/* global expect, jasmine, Ext, MockAjaxManager, spyOn */

topSuite("Ext.app.ViewModel",
    ['Ext.data.Store', 'Ext.data.validator.*', 'Ext.Container', 'Ext.app.ViewController'],
function() {
    
    var viewModel, scheduler, session, spy;

    function bindDeepNotify (key, fn, scope, vm) {
        vm = vm || viewModel;

        var bind = vm.bind(key, fn || spy, scope);
        bind.deep = true;
        vm.notify();
        return bind;
    }

    function bindNotify (key, fn, scope, vm) {
        vm = vm || viewModel;

        var bind = vm.bind(key, fn || spy, scope);
        vm.notify();
        return bind;
    }

    function setNotify (key, value, vm) {
        vm = vm || viewModel;

        vm.set(key, value);
        vm.notify();
    }

    function setBindNotify(binding, value, vm) {
        vm = vm || viewModel;
        binding.setValue(value);
        vm.notify();
    }
    
    function notify() {
        viewModel.notify();
    }

    function reset () {
        var spies = Ext.isArray(arguments[0]) ? arguments[0] : arguments,
            s;

        for (var i = 0, len = spies.length; i < len; ++i) {
            s = spies[i];
            if (s) {
                s.reset();
            }
        }
    }

    function expectArgs (newVal, oldVal) {
        if (arguments.length === 1) {
            expectArgsForCall(spy.mostRecentCall, newVal);
        } else {
            expectArgsForCall(spy.mostRecentCall, newVal, oldVal);
        }
    }

    function expectArgsForCall(theCall, newVal, oldVal) {
        var args = theCall.args;
        expect(args[0]).toBe(newVal);
        if (arguments.length > 2) {
            expect(args[1]).toBe(oldVal);
        }
    }

    function makeRecord(Type, id, data) {
        data = Ext.apply({
            id: id
        }, data);
        return new Type(data, session);
    }

    function makeSession() {
        session = new Ext.data.Session({
            scheduler: {
                // Make a huge tickDelay, we'll control it by forcing ticks
                tickDelay: 9999
            }
        });
    }

    function createViewModel(withSession, cfg) {
        if (withSession && !session) {
            makeSession();
        }

        viewModel = new Ext.app.ViewModel(Ext.apply({
            id: 'rootVM',
            session: session
        }, cfg));
        scheduler = viewModel.getScheduler();
    }

    function complete(data) {
        Ext.Ajax.mockCompleteWithData(data);
    }

    function completeNotify(data) {
        complete(data);
        notify();
    }
    
    beforeEach(function() {
        Ext.data.Store.prototype.config.asynchronousLoad = false;

        Ext.data.Model.schema.setNamespace('spec');
        MockAjaxManager.addMethods();
        spy = jasmine.createSpy();
    });
    
    afterEach(function() {
        Ext.data.Store.prototype.config.asynchronousLoad = undefined;

        Ext.destroy(viewModel);
        Ext.destroy(session);
        session = scheduler = spy = viewModel = null;

        MockAjaxManager.removeMethods();
        Ext.data.Model.schema.clear(true);
    });

    describe("isReadOnly", function() {
         describe("always readOnly bindings", function() {
             it("should be true for template bindings", function() {
                 createViewModel();
                 var b = viewModel.bind('Hello {foo}', Ext.emptyFn);
                 expect(b.isReadOnly()).toBe(true);
             });

             it("should be true for multi bindings", function() {
                 createViewModel();
                 var b = viewModel.bind({
                     a: '{foo}',
                     b: '{bar}'
                 }, Ext.emptyFn);
                 expect(b.isReadOnly()).toBe(true);
             });
         });

         describe("normal bindings", function() {
             it("should not be readOnly by default", function() {
                 createViewModel();
                 var b = viewModel.bind('{foo}', Ext.emptyFn);
                 expect(b.isReadOnly()).toBe(false);
             });

             it("should not be readOnly when options are passed", function() {
                 createViewModel();
                 var b = viewModel.bind('{foo}', Ext.emptyFn, null, {
                     single: true
                 });
                 expect(b.isReadOnly()).toBe(false);
             });

             it("should be readOnly when twoWay is set to false", function() {
                 createViewModel();
                 var b = viewModel.bind('{foo}', Ext.emptyFn, null, {
                     twoWay: false
                 });
                 expect(b.isReadOnly()).toBe(true);
             });
         });

         describe("formulas", function() {
             it("should be readOnly if there is no set", function() {
                 createViewModel(false, {
                     formulas: {
                         foo: function() {
                             return 1;
                         }
                     }
                 });
                 var b = viewModel.bind('{foo}', Ext.emptyFn);
                 expect(b.isReadOnly()).toBe(true);
             });

             it("should be readOnly if there is a set but is marked as twoWay: false", function() {
                 createViewModel(false, {
                     formulas: {
                         foo: {
                             get: function() {
                                 return 1;
                             },
                             set: function() {
                                 this.set('x', 1);
                             }
                         }
                     }
                 });
                 var b = viewModel.bind('{foo}', Ext.emptyFn, null, {
                     twoWay: false
                 });
                 expect(b.isReadOnly()).toBe(true);
             });

             it("should not be readOnly if there is a set", function() {
                 createViewModel(false, {
                     formulas: {
                         foo: {
                             get: function() {
                                 return 1;
                             },
                             set: function() {
                                 this.set('x', 1);
                             }
                         }
                     }
                 });
                 var b = viewModel.bind('{foo}', Ext.emptyFn);
                 expect(b.isReadOnly()).toBe(false);
             });
         });
     });

    describe("getting/setting values", function() {
        beforeEach(function() {
            createViewModel();
        });

        describe("set", function() {
            it("should set a root value if the param is an object", function() {
                viewModel.set({
                    foo: {
                        bar: 1
                    },
                    baz: 2
                });
                expect(viewModel.getData().foo.bar).toBe(1);
                expect(viewModel.getData().baz).toBe(2);
            });

            it("should set an object at a path", function() {
                viewModel.set('foo.bar', {
                    baz: 1
                });
                expect(viewModel.getData().foo.bar.baz).toBe(1);
            });

            it("should set a path + primitive", function() {
                viewModel.set('foo.bar', 100);
                expect(viewModel.getData().foo.bar).toBe(100);
            });

            it("should be able to set object instances and not descend into them", function() {
                var Cls = Ext.define(null, {
                    foo: 1
                });
                var o = new Cls();
                viewModel.set('obj', o);
                expect(viewModel.getData().obj).toBe(o);
            });

            it('should be able to set a value to undefined even after an unbound stub has been purged', function() {
                var child = new Ext.app.ViewModel({
                    parent: viewModel,
                    data: {
                        frob: 2
                    }
                });

                // Will delete stubs that have no bindings.
                viewModel.doCollect();

                expect(function() {
                    child.set('frob');
                }).not.toThrow();
            });
        });

        describe("get", function() {
            it("should be able to retrieve a value at the root", function() {
                viewModel.set('foo', 1);
                expect(viewModel.get('foo')).toBe(1);
            }); 

            it("should descend into a path", function() {
                viewModel.set({
                    foo: {
                        bar: {
                            baz: 100
                        }
                    }
                });
                expect(viewModel.get('foo.bar.baz')).toBe(100);
            }); 

            it("should return null if the value has not presented", function() {
                expect(viewModel.get('something')).toBeNull();
            });
        });
    });

    describe("bind/set for non records/stores", function() {
        beforeEach(function() {
            createViewModel();
        });

        function createSuite(bindFirst) {
            function run(bindFn, setFn) {
                if (bindFirst) {
                    bindFn();
                    setFn();
                } else {
                    setFn();
                    bindFn();
                }
            }

            describe(bindFirst ? "bind before set" : "set before bind", function() {
                describe("setting simple value types", function() {
                    it("should set a number", function() {
                        run(function() {
                            bindNotify('{age}', spy);
                        }, function() {
                            setNotify('age', 3);
                        });
                        expectArgs(3, undefined);
                    });
            
                    it("should set a string", function() {
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            setNotify('name', 'Kenneth');
                        });
                        expectArgs('Kenneth', undefined);
                    });
                    
                    it("should set a bool", function() {
                        run(function() {
                            bindNotify('{active}', spy);
                        }, function() {
                            setNotify('active', true);
                        });
                        expectArgs(true, undefined);
                    });
                    
                    it("should set an array", function() {
                        var arr = [18, 22, 13];
                        run(function() {
                            bindNotify('{scores}', spy);
                        }, function() {
                            setNotify('scores', arr);
                        });
                        expectArgs(arr, undefined);
                    });
                    
                    it("should set a date", function() {
                        var d = new Date(1980, 0, 1);
                        run(function() {
                            bindNotify('{dob}', spy);
                        }, function() {
                            setNotify('dob', d);
                        });
                        expectArgs(d, undefined);
                    });
                    
                    it("should set an object instance", function() {
                        var map = new Ext.util.HashMap();
                        run(function() {
                            bindNotify('{myMap}', spy);
                        }, function() {
                            setNotify('myMap', map);
                        });
                        
                        expectArgs(map, undefined);
                    });
                });

                describe("using bind options", function() {
                    it("should set a value using bindTo", function() {
                        run(function() {
                            bindNotify({
                                bindTo: '{age}'
                            }, spy);
                        }, function() {
                            setNotify('age', 3);
                            setNotify('age', 5);
                        });
                        if (bindFirst) {
                            expectArgsForCall(spy.calls[0], 3, undefined);
                            expectArgsForCall(spy.calls[1], 5, 3);
                        } else {
                            expectArgs(5, undefined);
                        }
                    });

                    it("should set the value once when using single: true", function() {
                        run(function() {
                            bindNotify({
                                bindTo: '{age}',
                                single: true
                            }, spy);
                        }, function() {
                            setNotify('age', 3);
                            setNotify('age', 5);
                        });
                        expect(spy.callCount).toBe(1);
                        if (bindFirst) {
                            expectArgs(3, undefined);
                        } else {
                            expectArgs(5, undefined);
                        }
                    });

                    it("should bind deep", function() {
                        run(function() {
                            bindNotify({
                                bindTo: '{foo}',
                                deep: true
                            }, spy);
                        }, function() {
                            setNotify({
                                foo: {
                                    bar: 1
                                }
                            });
                            setNotify('foo.bar', 2);
                        });
                        if (bindFirst) {
                            expect(spy.callCount).toBe(2);
                        } else {
                            expect(spy.mostRecentCall.args[0]).toEqual({
                                bar: 2
                            });
                        }
                    });
                });

                describe("setting objects", function() {
                    it("should set to the root if there's no name", function() {
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            setNotify('', {
                                name: 'Bar'
                            });
                        });
                        expectArgs('Bar', undefined);
                    });

                    it("should be able to set simple nested properties", function() {
                        run(function() {
                            bindNotify('{user.name}', spy);
                        }, function() {
                            setNotify('user', {
                                name: 'Foo'
                            });
                        });
                        expectArgs('Foo', undefined);
                    });

                    it("should set deeply nested properties", function() {
                        run(function() {
                            bindNotify('{a.b.c.d.e.f.g}', spy);
                        }, function() {
                            setNotify('a', {
                                b: {
                                    c: {
                                        d: {
                                            e: {
                                                f: {
                                                    g: 'val'
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                        });
                        expectArgs('val', undefined);
                    });

                    it("should be able to set mixes of values/objects", function() {
                        var city = jasmine.createSpy();
                        run(function() {
                            viewModel.bind('{user.name}', spy);
                            viewModel.bind('{user.address.city}', city);
                            notify();
                        }, function() {
                            setNotify('user', {
                                name: 'Foo',
                                address: {
                                    city: 'Paris'
                                }
                            });
                        });
                        expectArgs('Foo', undefined);
                        expectArgsForCall(city.mostRecentCall, 'Paris');
                    });
                });

                describe("callback settings", function() {
                    it("should pass the old and new value", function() {
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            setNotify('name', 'Foo');
                            setNotify('name', 'Bar');
                        });
                        if (bindFirst) {
                            expectArgsForCall(spy.calls[0], 'Foo', undefined);   
                            expectArgsForCall(spy.calls[1], 'Bar', 'Foo');   
                        } else {
                            expectArgs('Bar', undefined);
                        }
                    });
            
                    it("should default the scope to the session", function() {
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            setNotify('name', 'X');
                        });
                        expect(spy.mostRecentCall.object).toBe(viewModel);
                    });
            
                    it("should use the passed scope", function() {
                        var o = {};
                        run(function() {
                            bindNotify('{name}', spy, o);
                        }, function() {
                            setNotify('name', 'X');
                        });
                        expect(spy.mostRecentCall.object).toBe(o);
                    });    
                });

                describe("timing of callbacks", function() {
                    it("should not trigger the callback if the value doesn't change", function() {
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            setNotify('name', 'Foo');
                        });
                        spy.reset();
                        setNotify('name', 'Foo');
                        expect(spy).not.toHaveBeenCalled();
                    });
                    
                    it("should not trigger any parent nodes if the leaf value doesn't change", function() {
                        var inner = jasmine.createSpy();
                        run(function() {
                            viewModel.bind('{foo}', spy);
                            viewModel.bind('{foo.bar}', inner);
                        }, function() {
                            viewModel.set('foo.bar.baz.x', 'Foo');
                        });
                        notify();
                        reset(spy, inner);
                        setNotify('foo.bar.baz.x', 'Foo');
                        expect(spy).not.toHaveBeenCalled();
                        expect(inner).not.toHaveBeenCalled();
                    });
                    
                    it("should be able to bind twice to the same stub", function() {
                        var other = jasmine.createSpy();
                        run(function() {
                            bindNotify('{name}', spy);
                            bindNotify('{name}', other);
                        }, function() {
                            setNotify('name', 'A');
                        });
                        expectArgsForCall(spy.mostRecentCall, 'A', undefined);
                        expectArgsForCall(other.mostRecentCall, 'A', undefined);
                    });
                    
                    it("should trigger a new binding when there is a set pending", function() {
                        var other = jasmine.createSpy();
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            viewModel.set('name', 'A');
                        });
                        bindNotify('{name}', other);
                        expect(other).toHaveBeenCalled();
                    });
                    
                    it("should only fire a single callback inside the timer resolution", function() {
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            viewModel.set('name', 'A');
                            viewModel.set('name', 'B');
                            viewModel.set('name', 'C');
                            viewModel.set('name', 'D');
                            notify();
                        });
                        expect(spy.callCount).toBe(1);
                        expectArgs('D', undefined);
                    });
                    
                    it("should only pass the last value since the last fired change", function() {
                        run(function() {
                            bindNotify('{name}', spy);
                        }, function() {
                            setNotify('name', 'A');
                        });
                        viewModel.set('name', 'B');
                        viewModel.set('name', 'C');
                        viewModel.set('name', 'D');
                        viewModel.set('name', 'E');
                        notify();
                        expectArgs('E', 'A');
                    });

                    // Tests specifically for bind/data first
                    if (bindFirst) {
                        it("should not trigger the binding initially if a value is not set", function() {
                            bindNotify('{name}', spy);
                            expect(spy).not.toHaveBeenCalled();
                        });
                    
                        it("should suspend the initial binding if the value is set within the tick window", function() {
                            viewModel.bind('{name}', spy);
                            setNotify('name', 'Foo');
                            expectArgs('Foo', undefined);
                        });
                    } else {
                        it("should trigger the binding initially if a value exists", function() {
                            viewModel.set('name', 'Foo');
                            bindNotify('{name}', spy);
                            expect(spy).toHaveBeenCalled();
                            expectArgs('Foo', undefined);
                        });
                    }
                });

                describe("binding on nested values", function() {
                    it("should trigger a new long chain binding", function() {
                        run(function() {
                            bindNotify('{user.address.city}', spy);
                        }, function() {
                            setNotify('user.address.city', 'Sydney');
                        });
                        expectArgs('Sydney', undefined);
                    });
                    
                    it("should trigger a deep parent binding when a child changes", function() {
                        var city = jasmine.createSpy(),
                            address = jasmine.createSpy();
                            
                        run(function() {
                            bindNotify('{user.address.city}', city);
                            bindDeepNotify('{user.address}', address);
                        }, function() {
                            setNotify('user.address.city', 'Berlin');
                        });
                        expectArgsForCall(city.mostRecentCall, 'Berlin', undefined);
                        expect(address.mostRecentCall.args[0]).toEqual({
                            city: 'Berlin'
                        });
                    });
                    
                    it("should trigger all deep parent bindings when a child changes", function() {
                        var city = jasmine.createSpy(),
                            address = jasmine.createSpy(),
                            user = jasmine.createSpy();
                            
                        run(function() {
                            bindNotify('{user.address.city}', city);
                            bindDeepNotify('{user.address}', address);
                            bindDeepNotify('{user}', user);
                        }, function() {
                            setNotify('user.address.city', 'Jakarta');
                        });
                        expect(city).toHaveBeenCalled();
                        expect(address).toHaveBeenCalled();
                        expect(user).toHaveBeenCalled();
                    });
                    
                    it("should trigger parent bindings even if a node in the hierarchy is skipped", function() {
                        var city = jasmine.createSpy(),
                            user = jasmine.createSpy();

                        run(function() {
                            bindNotify('{user.address.city}', city);
                            bindDeepNotify('{user}', user);
                        }, function() {
                            setNotify('user.address.city', 'London');
                        });
                        expect(city).toHaveBeenCalled();
                        expect(user).toHaveBeenCalled();
                    });
                    
                    it("should only trigger the parent binding once if several direct children change", function() {
                        run(function() {
                            bindDeepNotify('{user.address}', spy);
                        }, function() {
                            viewModel.set('user.address.street', '1 Foo St');
                            viewModel.set('user.address.city', 'Moscow');
                            viewModel.set('user.address.zip', 12345);
                            viewModel.set('user.address.country', 'Russia');
                            notify();
                        });
                        expect(spy.callCount).toBe(1);
                    });
                    
                    it("should only trigger the parent once even if several indirect children change", function() {
                        run(function() {
                            bindDeepNotify('{user}', spy);
                        }, function() {
                            viewModel.set('user.homeAddress.street', 'Foo');
                            viewModel.set('user.homeAddress.city', 'Florida');
                            viewModel.set('user.postalAddress.street', 'Bar');
                            viewModel.set('user.postalAddress.city', 'Baltimore');
                            notify();
                        });
                        expect(spy.callCount).toBe(1);
                    });

                    describe("modifying hierarchies", function() {
                        function getHierarchy(val) {
                            return {
                                foo: {
                                    bar: {
                                        baz: {
                                            xxx: val
                                        }
                                    }
                                }
                            };
                        }

                        it("should trigger changes on the children when hierarchy is overwritten with a primitive", function() {
                            var xxx = jasmine.createSpy(),
                                baz = jasmine.createSpy(),
                                bar = jasmine.createSpy();

                            run(function() {
                                viewModel.bind('{foo.bar.baz.xxx}', xxx);
                                viewModel.bind('{foo.bar.baz}', baz);
                                viewModel.bind('{foo.bar}', bar);
                                notify();
                            }, function() {
                                setNotify('foo.bar.baz.xxx', 1);
                            });
                        
                            reset(xxx, baz, bar);

                            setNotify('foo', 1);
                            expect(xxx).toHaveBeenCalled();
                            expect(baz).toHaveBeenCalled();
                            expect(bar).toHaveBeenCalled();
                        });

                        it("should trigger changes on the children when hierarchy is overwritten with null", function() {
                            run(function() {
                                viewModel.bind('{foo.bar}', spy);
                                notify();
                            }, function() {
                                viewModel.set({
                                    foo: {
                                        bar: 1
                                    }
                                });
                                notify();
                            });                        
                            spy.reset();
                            setNotify('foo', null);
                            expectArgs(null, 1);
                        });

                        it("should set the child value correctly when changing a hierarchy in a single tick", function() {
                            run(function() {
                                viewModel.bind('{foo.bar.baz.xxx}', spy);
                            }, function() {
                                viewModel.set(getHierarchy(123));
                                viewModel.set(getHierarchy(456));
                                viewModel.set(getHierarchy(789));
                            });
                            notify();
                            expect(spy.callCount).toBe(1);
                            expectArgs(789);
                        });

                        it("should set the child value correctly when changing a hierarchy over multiple ticks", function() {
                            run(function() {
                                viewModel.bind('{foo.bar.baz.xxx}', spy);
                            }, function() {
                                viewModel.set(getHierarchy(123));
                            });
                            notify();
                            expectArgs(123);
                            viewModel.set(getHierarchy(456));
                            notify();
                            expectArgs(456);
                            viewModel.set(getHierarchy(789));
                            notify();
                            expectArgs(789);
                        });

                        it("should set the child value correctly when overwriting a hierarchy in a single tick", function() {
                            run(function() {
                                viewModel.bind('{foo.bar.baz.xxx}', spy);
                            }, function() {
                                viewModel.set(getHierarchy(123));
                                viewModel.set(getHierarchy(456));
                                viewModel.set({
                                    foo: null
                                });
                            });
                            notify();
                            if (bindFirst) {
                                expect(spy.callCount).toBe(1);
                                expectArgs(null, undefined);
                            } else {
                                expect(spy).not.toHaveBeenCalled();
                            }
                        });

                        it("should set the child value correctly when overwriting a hierarchy over multiple ticks", function() {
                            run(function() {
                                viewModel.bind('{foo.bar.baz.xxx}', spy);
                            }, function() {
                                viewModel.set(getHierarchy(123));
                            });
                            notify();
                            expectArgs(123);
                            viewModel.set(getHierarchy(456));
                            notify();
                            expectArgs(456);
                            viewModel.set({
                                foo: null
                            });
                            notify();
                            expectArgs(null);
                        });

                        it("should be able to expand a primitive into a hierarchy", function() {
                            var xxx = jasmine.createSpy(),
                                baz = jasmine.createSpy(), 
                                bar = jasmine.createSpy();
                    
                            run(function() {
                                viewModel.bind('{foo.bar.baz.xxx}', xxx, null, {deep: true});
                                viewModel.bind('{foo.bar.baz}', baz, null, {deep: true});
                                viewModel.bind('{foo.bar}', bar, null, {deep: true});
                            }, function() {
                                viewModel.set('foo', 1);
                            });
                            notify();
                            reset(xxx, baz, bar);
                            setNotify('foo.bar.baz.xxx', 1);
                
                            expect(xxx).toHaveBeenCalled();
                            expect(baz).toHaveBeenCalled();
                            expect(bar).toHaveBeenCalled();
                        });

                        it("should be able to expand an existing object path", function() {
                            run(function() {
                                bindNotify('{foo.bar.baz.xxx}', spy);
                            }, function() {
                                viewModel.set({
                                    foo: null
                                });
                            });
                            notify();
                            setNotify('foo.bar.baz.xxx', 1);
                            expect(spy.callCount).toBe(1);
                            expectArgs(1, undefined);
                        });

                        if (bindFirst) {
                            it("should set the child value correctly when expanding a hierarchy in a single tick", function() {
                                viewModel.bind('{foo.bar.baz.xxx}', spy);
                                notify();
                                viewModel.set({
                                    foo: null
                                });
                                viewModel.set({
                                    foo: {
                                        bar: null
                                    }
                                });
                                viewModel.set({
                                    foo: {
                                        bar: {
                                            baz: null
                                        }
                                    }
                                });
                                viewModel.set({
                                    foo: {
                                        bar: {
                                            baz: {
                                                xxx: 100
                                            }
                                        }
                                    }
                                });
                                notify();
                                expect(spy.callCount).toBe(1);
                                expectArgs(100);
                            });

                            it("should set the child value correctly when expanding a hierarchy over multiple ticks", function() {
                                viewModel.bind('{foo.bar.baz.xxx}', spy);
                                notify();
                                viewModel.set({
                                    foo: null
                                });
                                notify();
                                expect(spy).not.toHaveBeenCalled();
                                viewModel.set({
                                    foo: {
                                        bar: null
                                    }
                                });
                                notify();
                                expect(spy).not.toHaveBeenCalled();
                                viewModel.set({
                                    foo: {
                                        bar: {
                                            baz: null
                                        }
                                    }
                                });
                                notify();
                                expect(spy).not.toHaveBeenCalled();
                                viewModel.set({
                                    foo: {
                                        bar: {
                                            baz: {
                                                xxx: 100
                                            }
                                        }
                                    }
                                });
                                notify();
                                expectArgs(100);
                                viewModel.set({
                                    foo: null
                                });
                                notify();
                                // Now that we have a value loaded for xxx, it should publish as null
                                expectArgs(null);
                            });
                        }
                    });
                });
            });
        }
        createSuite(false);
        createSuite(true);

        describe("data types", function() {
            describe("dates", function() {
                it("should change when setting an initial date", function() {
                    var d = new Date(2010, 0, 1);
                    bindNotify('{val}', spy);
                    setNotify('val', d);
                    expectArgs(d, undefined);
                });

                it("should change when setting a new date", function() {
                    var d1 = new Date(2010, 0, 1),
                        d2 = new Date(2000, 3, 15);

                    setNotify('val', d1);
                    bindNotify('{val}', spy);
                    spy.reset();
                    setNotify('val', d2);
                    expectArgs(d2, d1);
                });

                it("should not change when setting the same date with a different reference", function() {
                    var d1 = new Date(2010, 0, 1),
                        d2 = new Date(2010, 0, 1);

                    setNotify('val', d1);
                    bindNotify('{val}', spy);
                    spy.reset();
                    setNotify('val', d2);
                    expect(spy).not.toHaveBeenCalled();
                });
            });
        });
        
        describe("firing order", function() {
            it("should fire children before parents", function() {
                var values = [];

                viewModel.bind('{address}', function (v) {
                    values.push('address: ' + Ext.encode(v));
                }).deep = true;
                viewModel.bind('{address.city}', function (v) {
                    values.push('address.city: ' + v);
                });

                notify();

                expect(values).toEqual([]);

                viewModel.set('address.city', 'Melbourne');
                notify();

                expect(values[0]).toBe('address.city: Melbourne');
                expect(values[1]).toBe('address: {"city":"Melbourne"}');
            });

            it("should fire a single binding at the depth of it's stub", function() {
                setNotify('foo.bar.baz.x', 1);
                var values = [],
                    adder = function(arg1) {
                        values.push(arg1);    
                    };
                viewModel.bind('{foo.bar.baz.x}', adder);
                viewModel.bind('{foo.bar.y}', adder);
                viewModel.set('foo.bar.y', 3);
                viewModel.set('foo.bar.baz.x', 2);
                notify();
                expect(values[0]).toBe(2);
                expect(values[1]).toBe(3);
            });

            it("should fire complex hierarchies in depth order", function() {
                var data = {
                    key1: {
                        key11: {
                            key111: {
                                key1111: 'a',                // d=4
                                key1112: 'b'                 // d=4
                            },
                            key112: 'c'                      // d=3
                        },
                        key12: {
                            key121: 'd',                     // d=3
                            key122: 'e'                      // d=3
                        }
                    },
                    key2: {
                        key21: {
                            key211: 'f'                      // d=3
                        },
                        key22: {
                            key221: {
                                key2211: {
                                    key22111: 'g'            // d=5
                                }
                            },
                            key222: {
                                key2221: 'h'                 // d=4
                            }
                        },
                        key23: {
                            key231: 'i'                      // d=3
                        }
                    },
                    key3: {
                        key31: 'j',                          // d=2
                        key32: {
                            key321: 'k'                      // d=3
                        },
                        key33: {
                            key331: {
                                key3311: 'l'                 // d=4
                            },
                            key332: 'm'                      // d=3
                        }
                    },
                    key4: {
                        key41: 'n'                          // d=2
                    },
                    key5: 'o',                              // d=1
                    key6: {
                        key61: {
                            key611: {
                                key6111: {
                                    key61111: {
                                        key611111: {
                                            key6111111: 'p' // d=7
                                        },
                                        key611112: 'q'      // d=6
                                    }
                                }
                            },
                            key612: {
                                key6121: {
                                    key61211: {
                                        key61211: 'r'      // d=6
                                    }
                                }
                            },
                            key613: {
                                key6131: {
                                    key61311: {
                                        key613111: {
                                            key6131111: 's' // d=7
                                        }
                                    }
                                }
                            }
                        }
                    }
                };

                var map = {};
                var items = [];
                var entryLog = [];
                var valueLog = [];

                function buildMap (value, parent, path) {
                    var entry = {
                            id: items.length + 1,
                            path: path,
                            parent: parent,
                            value: value
                        };

                    items.push(map[path] = entry);
                    if (path) {
                        viewModel.bind('{' + path + '}', function (v) {
                            entryLog.push(entry);
                            valueLog.push(v);

                            // We can say for certain that none of our parent objects
                            // should have called back at this time.
                            for (var p = parent; p; p = p.parent) {
                                expect(Ext.Array.contains(entryLog, p)).toBe(false);
                            }
                        });
                    }

                    if (value && value.constructor === Object) {
                        var subPath = path ? path + '.' : '';

                        Ext.Object.each(value, function (name, v) {
                            buildMap(v, entry, subPath + name);
                        });
                    }

                    return entry;
                }

                var root = buildMap(data, null, ''),
                    prefix, i;

                notify();
                for (i = 0; i < valueLog.length; ++i) {
                    prefix = entryLog[i].path + '=';
                    expect(prefix + valueLog[i]).toEqual(prefix + 'null');
                }

                entryLog.length = valueLog.length = 0;

                setNotify('', data);
                notify();

                for (i = 0; i < valueLog.length; ++i) {
                    // Each delivered value should preserve the references we passed in
                    // for this case.
                    expect(valueLog[i]).toBe(entryLog[i].value);
                }
            });
        });
    });

    describe("parsing formulas", function () {
        var vm;

        function getFormula (name) {
            var stub = vm.getStub(name);
            return stub.formula;
        }

        function getExpressions (name) {
            var formula = getFormula(name),
                expressions = Ext.apply({}, formula.get.$expressions);

            delete expressions.$literal;
            return Ext.Object.getKeys(expressions);
        }

        beforeEach(function() {
            createViewModel();
        });

        afterEach(function () {
            vm.destroy();
            vm = null;
        });

        describe("simple formulas", function () {
            it("should recognize property access", function () {
                vm = new Ext.app.ViewModel({
                    formulas: {
                        foo: function (get) {
                            return get('x.y') + get('z');
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual(['x.y', 'z']);
            });

            it("should ignore method calls", function () {
                vm = new Ext.app.ViewModel({
                    formulas: {
                        foo: function (get) {
                            return get('x.y').substring(1) + get('z').toLowerCase();
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual(['x.y', 'z']);
            });

            it("should recognize data as method parameters", function () {
                vm = new Ext.app.ViewModel({
                    formulas: {
                        foo: function (get) {
                            return this.foo(get('x')+get('y.z'));
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual(['x', 'y.z']);
            });

            it("should ignore data used in suffix expression", function () {
                vm = new Ext.app.ViewModel({
                    formulas: {
                        foo: function (get) {
                            return this.get.foo(get('x') + get('y.z'));
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual(['x', 'y.z']);
            });
        });

        describe("formula config objects", function () {
            it("should recognize property access", function () {
                vm = new Ext.app.ViewModel({
                    formulas: {
                        foo: {
                            get: function (get) {
                                return get('x.y') + get('z');
                            }
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual(['x.y', 'z']);
            });

            it("should ignore method calls", function () {
                vm = new Ext.app.ViewModel({
                    formulas: {
                        foo: {
                            get: function (get) {
                                return get('x.y').substring(1) + get('z').toLowerCase();
                            }
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual(['x.y', 'z']);
            });

            it("should allow for bind options", function () {
                vm = new Ext.app.ViewModel({
                    data: {
                        x: 'XYZ'
                    },
                    formulas: {
                        foo: {
                            bind: {
                                bindTo: '{x}',
                                single: true
                            },
                            get: function (data) {
                                return data;
                            }
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual([]);

                scheduler = vm.getScheduler();
                vm.notify();
                expect(scheduler.passes).toBe(1);

                var data = vm.getData();
                expect(data.foo).toBe('XYZ');

                vm.set('x', 'ABC');

                vm.notify();
                expect(scheduler.passes).toBe(2);
                expect(data.foo).toBe('XYZ');
            });

            it("should promote single:true to bind options", function () {
                vm = new Ext.app.ViewModel({
                    data: {
                        x: 'XYZ'
                    },
                    formulas: {
                        foo: {
                            bind: '{x}',
                            single: true,
                            get: function (data) {
                                return data;
                            }
                        }
                    }
                });

                var expressions = getExpressions('foo');
                expect(expressions).toEqual([]);

                scheduler = vm.getScheduler();
                vm.notify();
                expect(scheduler.passes).toBe(1);

                var data = vm.getData();
                expect(data.foo).toBe('XYZ');

                vm.set('x', 'ABC');

                vm.notify();
                expect(scheduler.passes).toBe(2);
                expect(data.foo).toBe('XYZ');
            });
        });
    }); // parsing formulas

    function createRecordSuite(withSession) {
        describe(withSession ? "with session" : "without a session", function() {
            beforeEach(function() {
                createViewModel(withSession);
            });

            describe("records", function() {
                var User, user;

                beforeEach(function() {
                    User = Ext.define('spec.User', {
                        extend: 'Ext.data.Model',
                        fields: ['id', 'name', 'age', 'group', {
                            name: 'addressId',
                            reference: 'Address',
                            unique: true
                        }]
                    });
                });

                afterEach(function() {
                    User = user = null;
                    Ext.undefine('spec.User');
                });

                function makeUser(id, data) {
                    user = makeRecord(User, id, data);
                }

                describe("record info bindings", function() {
                    var Order, order;

                    beforeEach(function() {
                        Order = Ext.define('spec.Order', {
                            extend: 'Ext.data.Model',
                            fields: [{
                                name: 'orderNo',
                                validators: 'presence'
                            }, {
                                name: 'total',
                                validators: {
                                    type: 'range',
                                    min: 0
                                }
                            }]
                        });
                    });

                    afterEach(function() {
                        Order = order = null;
                        Ext.undefine('spec.Order');
                    });

                    describe("valid", function() {
                        describe("starting state", function() {
                            it("should trigger as invalid when not valid", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.valid}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                            });

                            it("should trigger as valid when valid", function() {
                                order = new Order({
                                    orderNo: 'foo',
                                    total: 100
                                });
                                setNotify('order', order);
                                bindNotify('{order.valid}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(true);
                            });
                        });

                        describe("dynamic", function() {
                            it("should react to single set calls", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.valid}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                                order.set('orderNo', 'foo');
                                notify();
                                expect(spy.callCount).toBe(1);
                                order.set('total', 50);
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(true);
                                order.set('total', -10);
                                notify();
                                expect(spy.callCount).toBe(3);
                                expectArgs(false);
                            });

                            it("should react to multiple set calls", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.valid}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                                order.set({
                                    orderNo: 'foo',
                                    total: 20
                                });
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(true);
                                order.set({
                                    orderNo: 'bar',
                                    total: -1
                                });
                                notify();
                                expect(spy.callCount).toBe(3);
                                expectArgs(false);
                            });

                            it("should react to a reject", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.valid}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                                order.set({
                                    orderNo: 'foo',
                                    total: 30
                                });
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(true);
                                order.reject();
                                notify();
                                expect(spy.callCount).toBe(3);
                                expectArgs(false);
                            });
                        });
                    });

                    describe("dirty", function() {
                        describe("starting state", function() {
                            it("should trigger as not dirty when not dirty", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.dirty}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                            });

                            it("should trigger as dirty when dirty", function() {
                                order = new Order();
                                order.set({
                                    orderNo: 'foo',
                                    total: 100
                                });
                                setNotify('order', order);
                                bindNotify('{order.dirty}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(true);
                            });
                        });

                        describe("dynamic", function() {
                            it("should react to single set calls", function() {
                                order = new Order({
                                    orderNo: 'foo',
                                    total: 50
                                });
                                setNotify('order', order);
                                bindNotify('{order.dirty}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                                order.set('orderNo', 'bleh');
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(true);
                                order.set('orderNo', 'xxx');
                                notify();
                                expect(spy.callCount).toBe(2);
                                order.set('orderNo', 'foo');
                                notify();
                                expect(spy.callCount).toBe(3);
                                expectArgs(false);
                            });

                            it("should react to multiple set calls", function() {
                                order = new Order({
                                    orderNo: 'foo',
                                    total: 50
                                });
                                setNotify('order', order);
                                bindNotify('{order.dirty}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                                order.set({
                                    orderNo: 'bleh',
                                    total: 55
                                });
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(true);
                                order.set({
                                    orderNo: 'xxx',
                                    total: 60
                                });
                                notify();
                                expect(spy.callCount).toBe(2);
                                order.set({
                                    orderNo: 'foo',
                                    total: 50
                                });
                                notify();
                                expect(spy.callCount).toBe(3);
                                expectArgs(false);
                            });

                            it("should react to commit", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.dirty}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);

                                order.set('orderNo', 'qqq');
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(true);
                                order.commit();
                                notify();
                                expect(spy.callCount).toBe(3);
                                expectArgs(false);
                                order.commit();
                                notify();
                                expect(spy.callCount).toBe(3);
                            });

                            it("should react to reject", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.dirty}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);

                                order.set('orderNo', 'qqq');
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(true);
                                order.reject();
                                notify();
                                expect(spy.callCount).toBe(3);
                                expectArgs(false);
                                order.reject();
                                notify();
                                expect(spy.callCount).toBe(3);
                            });
                        });
                    });

                    describe("phantom", function() {
                        describe("starting state", function() {
                            it("should trigger as not phantom when not phantom", function() {
                                order = new Order({
                                    id: 1
                                });
                                setNotify('order', order);
                                bindNotify('{order.phantom}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(false);
                            });

                            it("should trigger as phantom when phantom", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.phantom}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(true);
                            });
                        });

                        describe("dynamic", function() {
                            it("should react to a commit", function() {
                                order = new Order();
                                setNotify('order', order);
                                bindNotify('{order.phantom}', spy);
                                expect(spy.callCount).toBe(1);
                                expectArgs(true);

                                order.commit();
                                notify();
                                expect(spy.callCount).toBe(2);
                                expectArgs(false);
                            });
                        });
                    });

                    describe("formulas", function() {
                        it("should not evaluate when the data changes by default", function() {
                            var calls = 0,
                                val;

                            order = new Order();
                            viewModel.setFormulas({
                                getIt: function(get) {
                                    ++calls;
                                    return get('order').isModified('orderNo');
                                }
                            });

                            setNotify('order', order);
                            bindNotify('{getIt}', function(v) {
                                val = v;
                            });
                            expect(calls).toBe(1);
                            expect(val).toBe(false);
                            order.set('orderNo', '123');
                            notify();
                            expect(calls).toBe(1);
                        });

                        it("should re-evaluate when the data changes with deep: true", function() {
                            var calls = 0,
                                val;

                            order = new Order();
                            viewModel.setFormulas({
                                getIt: {
                                    bind: {
                                        deep: true,
                                        bindTo: '{order}'
                                    },
                                    get: function(order) {
                                        ++calls;
                                        return order.isModified('orderNo');
                                    }
                                }
                            });

                            setNotify('order', order);
                            bindNotify('{getIt}', function(v) {
                                val = v;
                            });
                            expect(calls).toBe(1);
                            expect(val).toBe(false);
                            order.set('orderNo', '123');
                            notify();
                            expect(calls).toBe(2);
                            expect(val).toBe(true);
                        });
                    });
                });

                describe("local modifications", function() {
                    it("should publish when setting a record instance", function() {
                        makeUser(1);
                        bindNotify('{user}', spy);
                        setNotify('user', user);
                        expectArgs(user);
                    });

                    it("should publish when binding to a record field", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        expectArgs('Foo');
                    });

                    it("should publish even if the field value is undefined", function() {
                        makeUser(1);
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        expectArgs(undefined);
                    });

                    it("should not publish an undefined value if it's a known association key", function() {
                        Ext.define('spec.Post', {
                            extend: 'Ext.data.Model',
                            fields: ['content', {
                                name: 'userId',
                                reference: 'User'
                            }]
                        });
                        var post = new spec.Post({
                            id: 1
                        });
                        bindNotify('{post.user}', spy);
                        setNotify('post', post);
                        expect(spy).not.toHaveBeenCalled();
                        Ext.undefine('spec.Post');
                    });

                    it("should react to a change on the field", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        user.set('name', 'Bar');
                        notify();
                        expectArgs('Bar', 'Foo');
                    });

                    it("should react to multiple field changes", function() {
                        makeUser(1);
                        bindNotify('{user.name}', spy);
                        bindNotify('{user.age}', spy);
                        bindNotify('{user.group}', spy);
                        setNotify('user', user);
                        spy.reset();
                        user.set({
                            name: 'Foo',
                            age: 100,
                            group: 'Coders'
                        });
                        notify();
                        expect(spy.callCount).toBe(3);
                    });

                    it("should not react if the value changes then is reverted to the original value", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        spy.reset();
                        user.set('name', 'Bar');
                        user.set('name', 'Foo');
                        notify();
                        expect(spy).not.toHaveBeenCalled();
                    });

                    it("should react if the value changes, notifies, then is reverted to the original value", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        spy.reset();
                        user.set('name', 'Bar');
                        notify();
                        expectArgs('Bar', 'Foo');
                        user.set('name', 'Foo');
                        notify();
                        expectArgs('Foo', 'Bar');
                    });

                    it("should react to changes via reject", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        user.set('name', 'Bar');
                        notify();
                        spy.reset();
                        user.reject();
                        notify();
                        expectArgs('Foo', 'Bar');
                    });

                    it("should react to changes via commit", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        spy.reset();
                        user.set('name', 'Bar', {
                            silent: true
                        });
                        notify();
                        expect(spy).not.toHaveBeenCalled();
                        user.commit();
                        notify();
                        expectArgs('Bar', 'Foo');
                    });

                    it("should publish when setting a new model", function() {
                        makeUser(1);
                        bindNotify('{user}', spy);
                        setNotify('user', user);
                        var other = new User({id: 2});
                        setNotify('user', other);
                        expectArgs(other, user);
                    });

                    it("should publish a child field when changing the model", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        var other = new User({
                            id: 2,
                            name: 'Bar'
                        });
                        setNotify('user', other);
                        expectArgs('Bar', 'Foo');
                    });

                    it("should not publish when setting a new model but the field value remains", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        var other = new User({
                            id: 2,
                            name: 'Foo'
                        });
                        spy.reset();
                        setNotify('user', other);
                        expect(spy).not.toHaveBeenCalled();
                    });

                    it("should attach if a record is set as part of a hierarchy", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{foo.bar.baz.user.name}', spy);
                        setNotify({
                            foo: {
                                bar: {
                                    baz: {
                                        user: user
                                    }
                                }
                            }
                        });
                        spy.reset();
                        user.set('name', 'Bar');
                        notify();
                        expect(spy).toHaveBeenCalled();
                    });

                    it("should publish a field when the model is cleared", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        bindNotify('{user.name}', spy);
                        setNotify('user', user);
                        spy.reset();
                        setNotify('user', null);
                        expectArgs(null, 'Foo');
                    });
                });

                describe("remote loading", function() {
                    it("should publish if the record is not loading", function() {
                        makeUser(1);
                        bindNotify('{user}', spy);
                        setNotify('user', user);
                        expectArgs(user, undefined);
                    });

                    it("should not publish a field while loading for the first time", function() {
                        makeUser(1);
                        bindNotify('{user.name}', spy);
                        user.load();
                        setNotify('user', user);
                        expect(spy).not.toHaveBeenCalled();
                    });

                    it("should not publish if the record is loading for the first time but wait til data is loaded", function() {
                        makeUser(1);
                        bindNotify('{user}', spy);
                        user.load();
                        setNotify('user', user);
                        expect(spy).not.toHaveBeenCalled();
                        completeNotify({
                            id: 1,
                            name: 'Foo',
                            age: 100
                        });
                        expectArgs(user, undefined);
                    });

                    it("should publish if changes are made while the record is doing a load after the first", function() {
                        makeUser(1);
                        user.load();
                        completeNotify({
                            id: 1,
                            name: 'Foo',
                            age: 100
                        });

                        bindNotify('{user.name}', spy);
                        user.load();
                        setNotify('user', user);
                        spy.reset();

                        user.set('name', 'xxx');
                        notify();
                        expectArgs('xxx', 'Foo');
                    });
                });

                describe("values via binding", function() {
                    it("should be able to change fields via binding", function() {
                        makeUser(1, {
                            name: 'Foo'
                        });
                        var binding = viewModel.bind('{user.name}', spy);
                        setNotify('user', user);
                        spy.reset();
                        binding.setValue('Bar');
                        notify();
                        expectArgs('Bar', 'Foo');
                    });

                    it("should fail to set values on readonly bindings", function() {
                        var binding = viewModel.bind('Hello {user.name}', spy);
                        expect(function() {
                            binding.setValue('Bar');
                        }).toThrow();
                    });

                    describe("associations", function() {
                        var Comment, Address;

                        beforeEach(function() {
                            Comment = Ext.define('spec.Comment', {
                                extend: 'Ext.data.Model',
                                fields: ['id', 'text', {
                                    name: 'userId',
                                    reference: 'User'
                                }]
                            });

                            Address = Ext.define('spec.Address', {
                                extend: 'Ext.data.Model',
                                fields: ['id', 'street']
                            });
                        });

                        afterEach(function() {
                            Ext.undefine('spec.Comment');
                            Ext.undefine('spec.Address');
                            Address = Comment = null;
                        });

                        it("should be able to set association keys", function() {
                            var comment = makeRecord(Comment, 101, {
                                userId: 1
                            });
                            var binding = viewModel.bind('{comment.user}', spy);
                            setNotify('comment', comment);
                            spy.reset();
                            binding.setValue(3);
                            notify();
                            expect(comment.get('userId')).toBe(3);
                            // We set the key, but the user itself is not available
                            expect(spy).not.toHaveBeenCalled();
                        });

                        it("should be able to set association record", function() {
                            var comment = makeRecord(Comment, 101, {
                                userId: 1
                            });
                            makeUser(3);
                            var binding = viewModel.bind('{comment.user}', spy);
                            setNotify('comment', comment);
                            spy.reset();
                            binding.setValue(user);
                            notify();
                            expect(comment.get('userId')).toBe(3);
                            // We set the key, but the user itself is not available
                            expect(spy).toHaveBeenCalled();
                            expectArgs(user);
                        });

                        it("should be able to set an association field", function() {
                            var comment = makeRecord(Comment, 101, {
                                userId: 1
                            });
                            makeUser(3);
                            comment.setUser(user);
                            var binding = viewModel.bind('{comment.user.name}', spy);
                            setNotify('comment', comment);
                            spy.reset();
                            binding.setValue('aNewName');
                            notify();
                            expect(user.get('name')).toBe('aNewName');

                            binding.destroy();
                            spy.reset();

                            var address = makeRecord(Address, 201);
                            user.setAddress(address);
                            binding = viewModel.bind('{comment.user.address.street}', spy);
                            spy.reset();
                            binding.setValue('newStreet');
                            notify();
                            expect(address.get('street')).toBe('newStreet');
                        });

                        it("should update when a parent reference is nulled out after setting only the top level reference", function() {
                            var comment = makeRecord(Comment, 101, {
                                userId: 1
                            });
                            makeUser(1);
                            comment.setUser(user);

                            var binding = viewModel.bind('{comment.user}', spy);
                            setNotify('comment', comment);
                            spy.reset();
                            setNotify('comment', null);
                            expect(spy.callCount).toBe(1);
                            expectArgs(null, comment.getUser());
                        });
                    });
                });
            });

            describe("stores", function() {
                var User;

                beforeEach(function() {
                    User = Ext.define('spec.User', {
                        extend: 'Ext.data.Model',
                        fields: ['id', 'name', 'age', 'group']
                    });
                    
                    Ext.define('spec.Comment', {
                        extend: 'Ext.data.Model',
                        fields: ['id', 'text', {
                            name: 'userId',
                            reference: 'User'
                        }]
                    });
                });

                afterEach(function() {
                    User = null;
                    Ext.undefine('spec.User');
                    Ext.undefine('spec.Comment');
                });

                describe("publishing", function() {
                    var store;

                    beforeEach(function() {
                        store = new Ext.data.Store({
                            model: User,
                            proxy: {
                                type: 'ajax',
                                url: 'foo'
                            },
                            asynchronousLoad: false
                        });
                    });

                    afterEach(function() {
                        store.destroy();
                        store = null;
                    });

                    it("should publish when setting the value", function() {
                        bindNotify('{store}', spy);
                        setNotify('store', store);
                        expectArgs(store, undefined);
                    });

                    it("should publish if loading when attached", function() {
                        bindNotify('{store}', spy);
                        store.load();
                        setNotify('store', store);
                        expectArgs(store, undefined);
                    });

                    it("should publish if the store is loading during a notify", function() {
                        bindNotify('{store}', spy);
                        viewModel.set('store', store);
                        store.load();
                        notify();
                        expectArgs(store, undefined);
                    });

                    it("should not publish the store reference when store data changes", function() {
                        bindNotify('{store}', spy);
                        setNotify('store', store);
                        spy.reset();
                        store.add({});
                        notify();
                        expect(spy).not.toHaveBeenCalled();
                    });
                });

                describe("store info bindings", function() {
                    var store, prop,
                        foo, bar, baz;

                    afterEach(function() {
                        foo = bar = baz = prop = store = Ext.destroy(store);
                    });

                    function makeInlineStore() {
                        store = new Ext.data.Store({
                            model: User,
                            data: [{
                                name: 'Bar'
                            }, {
                                name: 'Baz'
                            }, {
                                name: 'Foo'
                            }],
                            proxy: {
                                type: 'ajax',
                                url: 'foo'
                            }
                        });
                        bar = store.getAt(0);
                        baz = store.getAt(1);
                        foo = store.getAt(2);
                    }

                    function makeLoadStore(autoLoad) {
                        store = new Ext.data.Store({
                            model: User,
                            proxy: {
                                type: 'ajax',
                                url: 'foo'
                            },
                            autoLoad: autoLoad
                        });
                    }

                    function setup() {
                        if (prop) {
                            prop = '.' + prop;
                        }
                        bindNotify('{store' + prop + '}', spy);
                        setNotify('store', store);
                    }

                    describe("formulas", function() {
                        function findName(store, name) {
                            var idx = store.findBy(function(r) {
                                    return r.get('name') === name;
                                });

                            return idx === -1 ? null : store.getAt(idx);
                        }

                        it("should not evaluate when the data changes by default", function() {
                            makeInlineStore();
                            var calls = 0,
                                val;

                            viewModel.setFormulas({
                                getIt: function(get) {
                                    ++calls;
                                    return findName(get('store'), 'Foo');
                                }
                            });

                            setup();
                            bindNotify('{getIt}', function(v) {
                                val = v;
                            });
                            expect(calls).toBe(1);
                            expect(val).toBe(foo);
                            store.remove(foo);
                            notify();
                            expect(calls).toBe(1);
                        });

                        it("should re-evaluate when the data changes with deep: true", function() {
                            makeInlineStore();
                            var calls = 0,
                                val;

                            viewModel.setFormulas({
                                getIt: {
                                    bind: {
                                        deep: true,
                                        bindTo: '{store}'
                                    },
                                    get: function(store) {
                                        ++calls;
                                        return findName(store, 'Foo');
                                    }
                                }
                            });

                            setup();
                            bindNotify('{getIt}', function(v) {
                                val = v;
                            });
                            expect(calls).toBe(1);
                            expect(val).toBe(foo);
                            store.remove(foo);
                            notify();
                            expect(calls).toBe(2);
                            expect(val).toBeNull();
                        });
                    });

                    describe("count", function() {
                        beforeEach(function() {
                            prop = 'count';
                        });

                        describe("with inline data", function() {
                            it("should be available immediately", function() {
                                makeInlineStore();
                                setup();
                                expectArgs(3, undefined);
                            });
                        });

                        describe("with an autoLoad", function() {
                            it("should not publish while the store is pending a load/loading", function() {
                                makeLoadStore(true);
                                setup();
                                expect(spy).not.toHaveBeenCalled();
                                waitsFor(function() {
                                    return Ext.Ajax.mockGetAllRequests().length > 0;
                                });
                                runs(function() {
                                    expect(spy).not.toHaveBeenCalled();
                                    completeNotify([{}, {}]);
                                    expectArgs(2, undefined);
                                });
                            });
                        });

                        describe("with no load", function() {
                            it("should publish straight away", function() {
                                makeLoadStore(false);
                                setup();
                                expectArgs(0, undefined);
                            });
                        });

                        describe("dynamic", function() {
                            beforeEach(function() {
                                makeInlineStore();
                                setup();
                                spy.reset();
                            });

                            it("should react to an add", function() {
                                store.add({});
                                notify();
                                expectArgs(4, 3);
                            });

                            it("should react to a remove", function() {
                                store.removeAt(0);
                                notify();
                                expectArgs(2, 3);
                            });

                            it("should react to a removeAll", function() {
                                store.removeAll();
                                notify();
                                expectArgs(0, 3);
                            });

                            it("should react to a remote load", function() {
                                store.load();
                                expect(spy).not.toHaveBeenCalled();
                                completeNotify([{}, {}, {}, {}, {}]);
                                expectArgs(5, 3);
                            });

                            it("should react to a local load", function() {
                                store.loadData([{}, {}]);
                                notify();
                                expectArgs(2, 3);
                            });

                            it("should react to filtering", function() {
                                store.getFilters().add({
                                    filterFn: function(rec) {
                                        return rec.get('name') === 'Foo';
                                    }
                                });
                                notify();
                                expectArgs(1, 3);
                                store.getFilters().removeAll();
                                notify();
                                expectArgs(3, 1);
                            });
                        });
                    });

                    describe("first", function() {
                        beforeEach(function() {
                            prop = 'first';
                        });

                        describe("with inline data", function() {
                            it("should be available immediately", function() {
                                makeInlineStore();
                                setup();
                                expectArgs(bar, undefined);
                            });
                        });

                        describe("with an autoLoad", function() {
                            it("should not publish while the store is pending a load/loading", function() {
                                makeLoadStore(true);
                                setup();
                                expect(spy).not.toHaveBeenCalled();
                                waitsFor(function() {
                                    return Ext.Ajax.mockGetAllRequests().length > 0;
                                });
                                runs(function() {
                                    expect(spy).not.toHaveBeenCalled();
                                    completeNotify([{}, {}]);
                                    expectArgs(store.getAt(0), undefined);
                                });
                            });
                        });

                        describe("with no load", function() {
                            it("should publish straight away", function() {
                                makeLoadStore(false);
                                setup();
                                expectArgs(null, undefined);
                            });
                        });

                        describe("dynamic", function() {
                            beforeEach(function() {
                                makeInlineStore();
                                setup();
                                spy.reset();
                            });

                            it("should react to an add", function() {
                                var r = store.insert(0, {})[0];
                                notify();
                                expectArgs(r, bar);
                            });

                            it("should react to a remove", function() {
                                store.removeAt(0);
                                notify();
                                expectArgs(baz, bar);
                            });

                            it("should react to a removeAll", function() {
                                store.removeAll();
                                notify();
                                expectArgs(null, bar);
                            });

                            it("should react to a remote load", function() {
                                store.load();
                                expect(spy).not.toHaveBeenCalled();
                                completeNotify([{}, {}, {}, {}, {}]);
                                expectArgs(store.getAt(0), bar);
                            });

                            it("should react to a local load", function() {
                                store.loadData([{}, {}]);
                                notify();
                                expectArgs(store.getAt(0), bar);
                            });

                            it("should react to filtering", function() {
                                store.getFilters().add({
                                    filterFn: function(rec) {
                                        return rec.get('name') === 'Foo';
                                    }
                                });
                                notify();
                                expectArgs(foo, bar);
                                store.getFilters().removeAll();
                                notify();
                                expectArgs(bar, foo);
                            });

                            it("should react to a sort", function() {
                                store.sort('name', 'DESC');
                                notify();
                                expectArgs(foo, bar);
                                store.sort('name', 'ASC');
                                notify();
                                expectArgs(bar, foo);
                            });

                            it("should react to an update", function() {
                                store.sort('name', 'ASC');
                                foo.set('name', 'AAA');
                                notify();
                                expectArgs(foo, bar);
                            });
                        });
                    });

                    describe("last", function() {
                        beforeEach(function() {
                            prop = 'last';
                        });

                        describe("with inline data", function() {
                            it("should be available immediately", function() {
                                makeInlineStore();
                                setup();
                                expectArgs(foo, undefined);
                            });
                        });

                        describe("with an autoLoad", function() {
                            it("should not publish while the store is pending a load/loading", function() {
                                makeLoadStore(true);
                                setup();
                                expect(spy).not.toHaveBeenCalled();
                                waitsFor(function() {
                                    return Ext.Ajax.mockGetAllRequests().length > 0;
                                });
                                runs(function() {
                                    expect(spy).not.toHaveBeenCalled();
                                    completeNotify([{}, {}]);
                                    expectArgs(store.getAt(1), undefined);
                                });
                            });
                        });

                        describe("with no load", function() {
                            it("should publish straight away", function() {
                                makeLoadStore(false);
                                setup();
                                expectArgs(null, undefined);
                            });
                        });

                        describe("dynamic", function() {
                            beforeEach(function() {
                                makeInlineStore();
                                setup();
                                spy.reset();
                            });

                            it("should react to an add", function() {
                                var r = store.add({})[0];
                                notify();
                                expectArgs(r, foo);
                            });

                            it("should react to a remove", function() {
                                store.removeAt(2);
                                notify();
                                expectArgs(baz, foo);
                            });

                            it("should react to a removeAll", function() {
                                store.removeAll();
                                notify();
                                expectArgs(null, foo);
                            });

                            it("should react to a remote load", function() {
                                store.load();
                                expect(spy).not.toHaveBeenCalled();
                                completeNotify([{}, {}, {}, {}, {}]);
                                expectArgs(store.getAt(4), foo);
                            });

                            it("should react to a local load", function() {
                                store.loadData([{}, {}]);
                                notify();
                                expectArgs(store.getAt(1), foo);
                            });

                            it("should react to filtering", function() {
                                store.getFilters().add({
                                    filterFn: function(rec) {
                                        return rec.get('name') === 'Bar';
                                    }
                                });
                                notify();
                                expectArgs(bar, foo);
                                store.getFilters().removeAll();
                                notify();
                                expectArgs(foo, bar);
                            });

                            it("should react to a sort", function() {
                                store.sort('name', 'DESC');
                                notify();
                                expectArgs(bar, foo);
                                store.sort('name', 'ASC');
                                notify();
                                expectArgs(foo, bar);
                            });

                            it("should react to an update", function() {
                                store.sort('name', 'ASC');
                                notify();
                                bar.set('name', 'ZZZ');
                                notify();
                                expectArgs(bar, foo);
                            });
                        });
                    });

                    describe("loading", function() {
                        beforeEach(function() {
                            prop = 'loading';
                        });

                        it("should not be loading if the store is configured with autoLoad: false", function() {
                            makeLoadStore(false);
                            setup();
                            expect(spy.callCount).toBe(1);
                            expectArgs(false);
                        });

                        it("should be loading if the store has a pending a load", function() {
                            makeLoadStore(true);
                            setup();
                            expect(spy.callCount).toBe(1);
                            expectArgs(true);
                        });

                        it("should be loading if the store has is loading", function() {
                            makeLoadStore(false);
                            setup();
                            spy.reset();
                            store.load();
                            notify();
                            expect(spy.callCount).toBe(1);
                            expectArgs(true);
                        });

                        it("should switch back to not loading once the load completes", function() {
                            makeLoadStore(false);
                            setup();
                            spy.reset();
                            store.load();
                            notify();
                            expect(spy.callCount).toBe(1);
                            expectArgs(true, false);
                            complete([]);
                            notify();
                            expect(spy.callCount).toBe(2);
                            expectArgs(false, true);
                        });
                    });

                    describe("totalCount", function() {
                        beforeEach(function() {
                            prop = 'totalCount';
                        });

                        it("should bind to the totalCount", function() {
                            makeInlineStore();
                            spyOn(store, 'getTotalCount').andReturn(3);
                            setup();
                            expect(spy.callCount).toBe(1);
                            expectArgs(3);
                        });
                    });
                });

                describe("loading associated stores", function() {
                    var user;

                    beforeEach(function() {
                        // Passing session here will be ignored if we're running the non-session specs
                        user = new User({
                            id: 1
                        }, session);
                    });

                    afterEach(function() {
                        user = null;
                    });
                    
                    it("should create/load the store if it's never been loaded", function() {
                        // We don't have a reference to the store, so spy on everything here
                        var loadSpy = spyOn(Ext.data.ProxyStore.prototype, 'load').andCallThrough();
                        bindNotify('{user.comments}', Ext.emptyFn);
                        setNotify('user', user);
                        expect(loadSpy).toHaveBeenCalled();
                        expect(loadSpy.mostRecentCall.object.getModel().$className).toBe('spec.Comment');
                    });

                    it("should not load if the store is loading", function() {
                        var comments = user.comments();
                        comments.load();
                        spyOn(comments, 'load');
                        bindNotify('{user.comments}', Ext.emptyFn);
                        setNotify('user', user);
                        expect(comments.load).not.toHaveBeenCalled();
                        complete([]);
                    });

                    it("should not load if the store has been loaded", function() {
                        var comments = user.comments();
                        comments.load();
                        complete([]);
                        spyOn(comments, 'load');
                        bindNotify('{user.comments}', Ext.emptyFn);
                        setNotify('user', user);
                        expect(comments.load).not.toHaveBeenCalled();
                    });

                    it("should not load if the record is a phantom", function() {
                        // We don't have a reference to the store, so spy on everything here
                        var loadSpy = spyOn(Ext.data.ProxyStore.prototype, 'load').andCallThrough();
                        user = new User({}, session);
                        bindNotify('{user.comments}', Ext.emptyFn);
                        setNotify('user', user);
                        expect(loadSpy).not.toHaveBeenCalled();
                    });

                    it("should not load if the data has been load via nested-loading", function() {
                        var store = new Ext.data.Store({
                            model: 'spec.User'
                        });
                        store.loadRawData([{
                            id: 100,
                            comments: [{
                                id: 1,
                                userId: 100,
                                text: 'Foo'
                            }, {
                                id: 2,
                                userId: 100,
                                text: 'Bar'
                            }]
                        }]);

                        user = store.first();

                        var comments = user.comments();
                        spyOn(comments, 'load');
                        bindNotify('{user.comments}', Ext.emptyFn);
                        setNotify('user', user);
                        expect(comments.load).not.toHaveBeenCalled();
                        store.destroy();
                    });

                    if (withSession) {
                        it("should load if the store has been filled with data from session but not loaded", function() {
                            session.createRecord('Comment', {
                                id: 1,
                                userId: 1,
                                text: 'Foo'
                            });

                            var comments = user.comments();
                            // Store will be created because we know the userId FK.
                            // However we know we don't have the full data set, so
                            // need to load it from the server
                            expect(comments.getCount()).toBe(1);
                            spyOn(comments, 'load');
                            bindNotify('{user.comments}', Ext.emptyFn);
                            setNotify('user', user);
                            expect(comments.load).toHaveBeenCalled();
                        });
                    }
                });
            });

            describe("associations", function() {
                describe("many to one", function() {
                    var user, post, posts, User, Post;
                    beforeEach(function() {
                        User = Ext.define('spec.User', {
                            extend: 'Ext.data.Model',
                            fields: ['id', 'name', {
                                name: 'organizationId',
                                reference: 'Organization'
                            }]
                        });

                        Ext.define('spec.Organization', {
                            extend: 'Ext.data.Model',
                            fields: ['id', 'name']
                        });

                        Post = Ext.define('spec.Post', {
                            extend: 'Ext.data.Model',
                            fields: ['id', 'content', {
                                name: 'userId',
                                reference: 'User'
                            }]
                        });
                    });

                    afterEach(function() {
                        Ext.undefine('spec.User');
                        Ext.undefine('spec.Post');
                        Ext.undefine('spec.Organization');
                        User = Post = user = post = posts = null;
                    });

                    function makeUser(id, data) {
                        user = makeRecord(User, id, data);
                    }

                    function makePost(id, data) {
                        post = makeRecord(Post, id, data);
                    }

                    describe("the one", function() {
                        it("should react when setting the inverse record", function() {
                            makePost(1);
                            bindNotify('{post.user.name}', spy);
                            setNotify('post', post);
                            post.setUser(new User({
                                name: 'Foo'
                            }, session));
                            notify();
                            expect(spy.callCount).toBe(1);
                            expect(spy.mostRecentCall.args[0]).toBe('Foo');
                        });

                        it("should not make a request there is no FK value", function() {
                            var proxySpy = spyOn(User.getProxy(), 'read');
                            makePost(1);
                            bindNotify('{post.user}', spy);
                            setNotify('post', post);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should load from the server and not publish until the value is retrieved", function() {
                            makePost(1, {
                                userId: 17
                            });
                            bindNotify('{post.user}', spy);
                            setNotify('post', post);
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 17
                            });
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should not publish if attached while loading and should publish when the load completes", function() {
                            makePost(1, {
                                userId: 17
                            });
                            bindNotify('{post.user}', spy);
                            post.getUser();
                            setNotify('post', post);
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 17
                            });
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should publish immediately if the record has already loaded via the API", function() {
                            makePost(1, {
                                userId: 17
                            });
                            bindNotify('{post.user}', spy);
                            post.getUser();
                            complete({
                                id: 17
                            });
                            setNotify('post', post);
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should cascade the load if waiting on the one", function() {
                            makePost(1);
                            bindNotify('{post.user}', spy);
                            post.load();
                            setNotify('post', post);
                            completeNotify({
                                id: 1,
                                userId: 17
                            });
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 17
                            });
                            expect(spy).toHaveBeenCalled();
                        });

                        if (withSession) {
                            it("should use an existing record from the session and not trigger a load", function() {
                                var proxySpy = spyOn(User.getProxy(), 'read'),
                                    theUser = session.createRecord('User', {
                                        id: 17
                                    });

                                makePost(1, {
                                    userId: 17
                                });
                                bindNotify('{post.user}', spy);
                                setNotify('post', post);
                                expect(proxySpy).not.toHaveBeenCalled();
                                expect(spy).toHaveBeenCalled();
                                expectArgs(theUser);
                            });

                            it("should create a record in the session if it does not exist and load it", function() {
                                makePost(1, {
                                    userId: 17
                                });
                                bindNotify('{post.user}', spy);
                                setNotify('post', post);
                                user = post.getUser();
                                expect(user.isLoading()).toBe(true);
                                expect(user).toBe(session.getRecord('User', 17));
                            });
                        } else {
                            it("should fire if the record instance is different", function() {
                                makePost(1, {
                                    userId: 17
                                });
                                bindNotify('{post.user}', spy);
                                setNotify('post', post);
                                completeNotify({
                                    id: 17
                                });
                                expect(spy).toHaveBeenCalled();
                                spy.reset();
                                makePost(2, {
                                    userId: 17
                                });
                                setNotify('post', post);
                                completeNotify({
                                    id: 17
                                });
                                expect(spy).toHaveBeenCalled();
                            });

                            it("should not fire if the underlying value is the same", function() {
                                makePost(1, {
                                    userId: 17
                                });
                                bindNotify('{post.user.name}', spy);
                                setNotify('post', post);
                                completeNotify({
                                    id: 17,
                                    name: 'Foo'
                                });
                                expect(spy).toHaveBeenCalled();
                                spy.reset();
                                makePost(2, {
                                    userId: 100
                                });
                                setNotify('post', post);
                                completeNotify({
                                    id: 100,
                                    name: 'Foo'
                                });
                                expect(spy).not.toHaveBeenCalled();
                            });
                        }

                        it("should be able to load multiple levels", function() {
                            makePost(1, {
                                userId: 17
                            });
                            bindNotify('{post.user.organization.name}', spy);
                            setNotify('post', post);
                            completeNotify({
                                id: 17,
                                organizationId: 34
                            });
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 34,
                                name: 'Org1'
                            });
                            expectArgs('Org1');
                        });
                    });

                    describe("the many", function() {
                        it("should create the store and load it if it doesn't exist", function() {
                            makeUser(1);
                            bindNotify('{user.posts}', spy);
                            var proxySpy = spyOn(Post.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).toHaveBeenCalled();
                        });

                        it("should not load the store if it's already been loaded", function() {
                            makeUser(1);
                            bindNotify('{user.posts}', spy);
                            user.posts().load();
                            complete([]);
                            var proxySpy = spyOn(Post.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not load the store if the record is a phantom", function() {
                            makeUser();
                            bindNotify('{user.posts}', spy);
                            var proxySpy = spyOn(Post.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not trigger a load if the store is loading", function() {
                            makeUser(1);
                            bindNotify('{user.posts}', spy);
                            user.posts().load();
                            var proxySpy = spyOn(Post.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not trigger a load if the store has data in it already", function() {
                            makeUser(1);
                            user.posts().load();
                            complete([{id: 2000}]);
                            bindNotify('{user.posts}', spy);
                            var proxySpy = spyOn(Post.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should publish if the attached store is loading, it should wait until the load completes", function() {
                            makeUser(1);
                            bindNotify('{user.posts}', spy);
                            setNotify('user', user);
                            expectArgs(user.posts(), undefined);
                            completeNotify([]);
                        });

                        it("should publish if the store has been loaded before", function() {
                            makeUser(1);
                            bindNotify('{user.posts}', spy);
                            user.posts().load();
                            complete([]);
                            setNotify('user', user);
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should publish if the store instance changes", function() {
                            makeUser(1);
                            bindNotify('{user.posts}', spy);
                            setNotify('user', user);
                            completeNotify([]);
                            spy.reset();
                            makeUser(2);
                            setNotify('user', user);
                            completeNotify([]);
                            expect(spy).toHaveBeenCalled();
                        });

                        if (withSession) {
                            it("should use existing records from the session", function() {
                                var post1 = session.getRecord('Post', 1),
                                    post3 = session.getRecord('Post', 3);

                                complete({id: 1, userId: 1});
                                complete({id: 3, userId: 1});

                                makeUser(1);
                                bindNotify('{user.posts}', spy);
                                user.posts().load();
                                complete([{id: 1, userId: 1}, {id: 2, userId: 1}, {id: 3, userId: 1}]);
                                setNotify('user', user);
                                expect(spy).toHaveBeenCalled();
                                var store = spy.mostRecentCall.args[0];
                                expect(store.getAt(0)).toBe(post1);
                                expect(store.getAt(2)).toBe(post3);
                            });

                            it("should push any new records into the session", function() {
                                var post1 = session.getRecord('Post', 1),
                                    post3 = session.getRecord('Post', 3);

                                complete({id: 1, userId: 1});
                                complete({id: 3, userId: 1});

                                makeUser(1);
                                bindNotify('{user.posts}', spy);
                                user.posts().load();
                                complete([{id: 1, userId: 1}, {id: 2, userId: 1}, {id: 3, userId: 1}]);
                                setNotify('user', user);
                                expect(spy).toHaveBeenCalled();
                                var store = spy.mostRecentCall.args[0];
                                expect(store.getAt(1)).toBe(session.getRecord('Post', 2));
                            });
                        }

                        it("should not throw when dropping the owner that causes the store to destroy", function() {
                            makeUser(1);
                            var posts = user.posts();
                            bindNotify('{user.posts}', spy);
                            setNotify('user', user);
                            expect(function() {
                                user.drop();
                            }).not.toThrow();
                            expect(posts.destroyed).toBe(true);
                        });
                    });
                });

                describe("one to one", function() {
                    var User, Passport, user, passport;

                    beforeEach(function() {
                        User = Ext.define('spec.User', {
                            extend: 'Ext.data.Model',
                            fields: ['id', 'name', {
                                name: 'passportId',
                                reference: 'Passport',
                                unique: true
                            }]
                        });

                        Passport = Ext.define('spec.Passport', {
                            extend: 'Ext.data.Model',
                            fields: ['id', 'expires', {
                                name: 'addressId',
                                reference: 'Address',
                                unique: true
                            }]
                        });
                    });

                    afterEach(function() {
                        Ext.undefine('spec.User');
                        Ext.undefine('spec.Passport');
                        User = Passport = user = passport = null;
                    });

                    function makeUser(id, data) {
                        user = makeRecord(User, id, data);
                    }

                    function makePassport(id, data) {
                        passport = makeRecord(Passport, id, data);
                    }

                    describe("the key holder", function() {
                        it("should react when setting the inverse record", function() {
                            makeUser(1);
                            bindNotify('{user.passport.key}', spy);
                            setNotify('user', user);
                            user.setPassport(new Passport({
                                key: 'Foo'
                            }, session));
                            notify();
                            expect(spy.callCount).toBe(1);
                            expect(spy.mostRecentCall.args[0]).toBe('Foo');
                        });

                        it("should not make a request there is no FK value", function() {
                            var proxySpy = spyOn(Passport.getProxy(), 'read');
                            makeUser(1);
                            bindNotify('{user.passport}', spy);
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should load from the server and not publish until the value is retrieved", function() {
                            makeUser(1, {
                                passportId: 17
                            });
                            bindNotify('{user.passport}', spy);
                            setNotify('user', user);
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 17
                            });
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should not publish if attached while loading and should publish when the load completes", function() {
                            makeUser(1, {
                                passportId: 17
                            });
                            bindNotify('{user.passport}', spy);
                            user.getPassport();
                            setNotify('user', user);
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 17
                            });
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should publish immediately if the record has already loaded via the API", function() {
                            makeUser(1, {
                                passportId: 17
                            });
                            bindNotify('{user.passport}', spy);
                            user.getPassport();
                            complete({
                                id: 17
                            });
                            setNotify('user', user);
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should cascade the load if waiting on the one", function() {
                            makeUser(1);
                            bindNotify('{user.passport}', spy);
                            user.load();
                            setNotify('user', user);
                            completeNotify({
                                id: 1,
                                passportId: 17
                            });
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 17
                            });
                            expect(spy).toHaveBeenCalled();
                        });

                        if (withSession) {
                            it("should use an existing record from the session and not trigger a load", function() {
                                var proxySpy = spyOn(Passport.getProxy(), 'read'),
                                    thePassport = session.createRecord('Passport', {
                                        id: 17
                                    });

                                makeUser(1, {
                                    passportId: 17
                                });
                                bindNotify('{user.passport}', spy);
                                setNotify('user', user);
                                expect(proxySpy).not.toHaveBeenCalled();
                                expect(spy).toHaveBeenCalled();
                                expectArgs(thePassport);
                            });

                            it("should create a record in the session if it does not exist and load it", function() {
                                makeUser(1, {
                                    passportId: 17
                                });
                                bindNotify('{user.passport}', spy);
                                setNotify('user', user);
                                passport = user.getPassport();
                                expect(passport.isLoading()).toBe(true);
                                expect(passport).toBe(session.getRecord('Passport', 17));
                            });
                        } else {
                            it("should fire if the record instance is different", function() {
                                makeUser(1, {
                                    passportId: 17
                                });
                                bindNotify('{user.passport}', spy);
                                setNotify('user', user);
                                completeNotify({
                                    id: 17
                                });
                                expect(spy).toHaveBeenCalled();
                                spy.reset();
                                makeUser(2, {
                                    passportId: 17
                                });
                                setNotify('user', user);
                                completeNotify({
                                    id: 17
                                });
                                expect(spy).toHaveBeenCalled();
                            });

                            it("should not fire if the underlying value is the same", function() {
                                makeUser(1, {
                                    passportId: 17
                                });
                                bindNotify('{user.passport.expiry}', spy);
                                setNotify('user', user);
                                completeNotify({
                                    id: 17,
                                    expiry: '2000-01-01'
                                });
                                expect(spy).toHaveBeenCalled();
                                spy.reset();
                                makeUser(2, {
                                    passportId: 100
                                });
                                setNotify('user', user);
                                completeNotify({
                                    id: 100,
                                    expiry: '2000-01-01'
                                });
                                expect(spy).not.toHaveBeenCalled();
                            });
                        }

                        it("should be able to load multiple levels", function() {
                            Ext.define('spec.Address', {
                                extend: 'Ext.data.Model',
                                fields: ['id', 'city']
                            });

                            makeUser(1, {
                                passportId: 17
                            });
                            bindNotify('{user.passport.address.city}', spy);
                            setNotify('user', user);
                            completeNotify({
                                id: 17,
                                addressId: 34
                            });
                            expect(spy).not.toHaveBeenCalled();
                            completeNotify({
                                id: 34,
                                city: 'Sydney'
                            });
                            expectArgs('Sydney');

                            Ext.undefine('spec.Address');
                        });
                    });

                    describe("the non-key holder", function() {
                        it("should react when setting the inverse record", function() {
                            makePassport(1);
                            bindNotify('{passport.user.name}', spy);
                            setNotify('passport', passport);
                            passport.setUser(new User({
                                name: 'Foo'
                            }, session));
                            notify();
                            expect(spy.callCount).toBe(1);
                            expect(spy.mostRecentCall.args[0]).toBe('Foo');
                        });

                        // Non key holder can only ever exist if it's been set via nested loading
                        it("should not publish unless there is an instance set", function() {
                            makePassport(1);
                            bindNotify('{passport.user}', spy);
                            setNotify('passport', passport);
                            expect(spy).not.toHaveBeenCalled();
                        });

                        it("should publish if an instance is already set", function() {
                            makePassport(13);
                            makeUser(1, {
                                passportId: 13
                            });
                            passport.setUser(user);
                            bindNotify('{passport.user}', spy);
                            setNotify('passport', passport);
                            expect(spy).toHaveBeenCalled();
                        });
                    });
                });

                describe("many to many", function() {
                    var User, Group, user, group;

                    beforeEach(function() {
                        User = Ext.define('spec.User', {
                            extend: 'Ext.data.Model',
                            fields: ['id', 'name'],
                            manyToMany: 'Group'
                        });

                        Group = Ext.define('spec.Group', {
                            extend: 'Ext.data.Model',
                            fields: ['id', 'name']
                        });
                    });

                    afterEach(function() {
                        Ext.undefine('spec.User');
                        Ext.undefine('spec.Group');
                        User = Group = user = group = null;
                    });

                    function makeUser(id, data) {
                        user = makeRecord(User, id, data);
                    }

                    function makeGroup(id, data) {
                        group = makeRecord(Group, id, data);
                    }

                    describe("the left", function() {
                        it("should create the store and load it if it doesn't exist", function() {
                            makeUser(1);
                            bindNotify('{user.groups}', spy);
                            var proxySpy = spyOn(Group.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).toHaveBeenCalled();
                        });

                        it("should not load the store if the record is a phantom", function() {
                            makeUser();
                            bindNotify('{user.groups}', spy);
                            var proxySpy = spyOn(Group.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not load the store if it's already been loaded", function() {
                            makeUser(1);
                            bindNotify('{user.groups}', spy);
                            user.groups().load();
                            complete([]);
                            var proxySpy = spyOn(Group.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not trigger a load if the store is loading", function() {
                            makeUser(1);
                            bindNotify('{user.groups}', spy);
                            user.groups().load();
                            var proxySpy = spyOn(Group.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not trigger a load if the store has data in it already", function() {
                            makeUser(1);
                            user.groups().load();
                            complete([{id: 3000}]);
                            bindNotify('{user.groups}', spy);
                            var proxySpy = spyOn(Group.getProxy(), 'read');
                            setNotify('user', user);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should publish if the attached store is loading", function() {
                            makeUser(1);
                            bindNotify('{user.groups}', spy);
                            setNotify('user', user);
                            expect(spy.callCount).toBe(1);
                            completeNotify([]);
                        });

                        it("should publish if the store has been loaded before", function() {
                            makeUser(1);
                            bindNotify('{user.groups}', spy);
                            user.groups().load();
                            complete([]);
                            setNotify('user', user);
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should publish if the store instance changes", function() {
                            makeUser(1);
                            bindNotify('{user.groups}', spy);
                            setNotify('user', user);
                            completeNotify([]);
                            spy.reset();
                            makeUser(2);
                            setNotify('user', user);
                            completeNotify([]);
                            expect(spy).toHaveBeenCalled();
                        });

                        if (withSession) {
                            it("should use existing records from the session", function() {
                                var group1 = session.getRecord('Group', 1, false),
                                    group3 = session.getRecord('Group', 3, false);

                                makeUser(1);
                                bindNotify('{user.groups}', spy);
                                user.groups().load();
                                complete([{id: 1}, {id: 2}, {id: 3}]);
                                setNotify('user', user);
                                expect(spy).toHaveBeenCalled();
                                var store = spy.mostRecentCall.args[0];
                                expect(store.getAt(0)).toBe(group1);
                                expect(store.getAt(2)).toBe(group3);
                            });

                            it("should push any new records into the session", function() {
                                var group1 = session.getRecord('Group', 1, false),
                                    group3 = session.getRecord('Group', 3, false);

                                makeUser(1);
                                bindNotify('{user.groups}', spy);
                                user.groups().load();
                                complete([{id: 1}, {id: 2}, {id: 3}]);
                                setNotify('user', user);
                                expect(spy).toHaveBeenCalled();
                                var store = spy.mostRecentCall.args[0];
                                expect(store.getAt(1)).toBe(session.getRecord('Group', 2));
                            });
                        }
                    });

                    describe("the right", function() {
                        it("should create the store and load it if it doesn't exist", function() {
                            makeGroup(1);
                            bindNotify('{group.users}', spy);
                            var proxySpy = spyOn(User.getProxy(), 'read');
                            setNotify('group', group);
                            expect(proxySpy).toHaveBeenCalled();
                        });

                        it("should not load the store if the record is a phantom", function() {
                            makeGroup();
                            bindNotify('{group.users}', spy);
                            var proxySpy = spyOn(User.getProxy(), 'read');
                            setNotify('group', group);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not load the store if it's already been loaded", function() {
                            makeGroup(1);
                            bindNotify('{group.users}', spy);
                            group.users().load();
                            complete([]);
                            var proxySpy = spyOn(User.getProxy(), 'read');
                            setNotify('group', group);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not trigger a load if the store is loading", function() {
                            makeGroup(1);
                            bindNotify('{group.users}', spy);
                            group.users().load();
                            var proxySpy = spyOn(User.getProxy(), 'read');
                            setNotify('group', group);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should not trigger a load if the store has data in it already", function() {
                            makeGroup(1);
                            group.users().load();
                            complete([{id: 1234}]);
                            bindNotify('{group.users}', spy);
                            var proxySpy = spyOn(User.getProxy(), 'read');
                            setNotify('group', group);
                            expect(proxySpy).not.toHaveBeenCalled();
                        });

                        it("should publish if the attached store is loading", function() {
                            makeGroup(1);
                            bindNotify('{group.users}', spy);
                            setNotify('group', group);
                            expect(spy.callCount).toBe(1);
                            completeNotify([]);
                        });

                        it("should publish if the store has been loaded before", function() {
                            makeGroup(1);
                            bindNotify('{group.users}', spy);
                            group.users().load();
                            complete([]);
                            setNotify('group', group);
                            expect(spy).toHaveBeenCalled();
                        });

                        it("should publish if the store instance changes", function() {
                            makeGroup(1);
                            bindNotify('{group.users}', spy);
                            setNotify('group', group);
                            completeNotify([]);
                            spy.reset();
                            makeGroup(2);
                            setNotify('group', group);
                            completeNotify([]);
                            expect(spy).toHaveBeenCalled();
                        });

                        if (withSession) {
                            it("should use existing records from the session", function() {
                                var user1 = session.getRecord('User', 1, false),
                                    user3 = session.getRecord('User', 3, false);

                                makeGroup(1);
                                bindNotify('{group.users}', spy);
                                group.users().load();
                                complete([{id: 1}, {id: 2}, {id: 3}]);
                                setNotify('group', group);
                                expect(spy).toHaveBeenCalled();
                                var store = spy.mostRecentCall.args[0];
                                expect(store.getAt(0)).toBe(user1);
                                expect(store.getAt(2)).toBe(user3);
                            });

                            it("should push any new records into the session", function() {
                                var user1 = session.getRecord('User', 1, false),
                                    user3 = session.getRecord('User', 3, false);

                                makeGroup(1);
                                bindNotify('{group.users}', spy);
                                group.users().load();
                                complete([{id: 1}, {id: 2}, {id: 3}]);
                                setNotify('group', group);
                                expect(spy).toHaveBeenCalled();
                                var store = spy.mostRecentCall.args[0];
                                expect(store.getAt(1)).toBe(session.getRecord('User', 2));
                            });
                        }
                    });
                });
            });
        });
    }
    createRecordSuite(false);
    createRecordSuite(true);

    describe("nesting viewmodels", function () {
        describe("values", function() {
            function createValueSuite(key) {
                var rootKey = key.split('.')[0],
                    bindKey = '{' + key + '}',
                    child, vms;

                function createChild(parent, cfg) {
                    cfg = Ext.apply({
                        parent: parent
                    }, cfg);
                    return new Ext.app.ViewModel(cfg);
                }

                function createWithData(data, parent) {
                    return new Ext.app.ViewModel({
                        data: data,
                        parent: parent
                    });
                }

                function makeVms(vals) {
                    vms = [];

                    Ext.Array.forEach(vals, function(v, i) {
                        var isEmpty = v === null,
                            parent = i === 0 ? null : vms[i - 1],
                            o = {};

                        if (v === null) {
                            vms.push(createChild(parent));
                        } else {
                            vms.push(createWithData(makeData(v), parent));
                        }
                    });
                }

                function expectValues(values) {
                    Ext.Array.forEach(values, function(v, i) {
                        expect(vms[i].get(key)).toBe(v);
                    });
                }

                function makeData(v) {
                    var o = {},
                        current = o,
                        parts = key.split('.'),
                        last = parts.length - 1;

                    Ext.Array.forEach(key.split('.'), function(part, idx) {
                        if (idx === last) {
                            current[part] = v;
                        } else {
                            current = current[part] = {};
                        }
                    });

                    return o;
                }

                function expectParentValue(v) {
                    expect(viewModel.get(key)).toBe(v);
                }

                function expectChildValue(v) {
                    expect(child.get(key)).toBe(v);
                }

                afterEach(function() {
                    vms = child = Ext.destroy(vms, child);
                });

                describe("inheriting values", function() {
                    describe("initial values", function() {
                        function setParentValue(v) {
                            setNotify(key, v);
                        }

                        function setChildValue(v) {
                            setNotify(key, v, child);
                        }

                        describe("value only in parent", function() {
                            beforeEach(function() {
                                viewModel = createWithData(makeData(1));
                                child = createChild(viewModel);
                            });

                            it("should inherit a value from the parent", function() {
                                expectChildValue(1);
                            });

                            it("should have the value available in the parent", function() {
                                expectParentValue(1);
                            });
                        });

                        describe("value only in child", function() {
                            beforeEach(function() {
                                createViewModel();
                                child = createWithData(makeData(1), viewModel);
                            });

                            it("should have the value in the child", function() {
                                expectChildValue(1);
                            });

                            it("should have no value in the parent", function() {
                                expectParentValue(null);
                            });
                        });

                        describe("value in parent and child", function() {
                            it("should have the value in the child", function() {
                                viewModel = createWithData(makeData(1));
                                child = createWithData(makeData(2), viewModel);
                                expectChildValue(2);
                            });

                            it("should have the value in the parent", function() {
                                viewModel = createWithData(makeData(1));
                                child = createWithData(makeData(2), viewModel);
                                expectParentValue(1);
                            });

                            it("should not inherit data when configuring a root/child with the same value", function() {
                                viewModel = createWithData(makeData(key));
                                child = createWithData(makeData(key), viewModel);

                                expectParentValue(key);
                                expectChildValue(key);

                                setParentValue(2);
                                expectParentValue(2);
                                expectChildValue(key);

                                setChildValue(3);
                                expectParentValue(2);
                                expectChildValue(3);
                            });
                        });

                        describe("multiple layers", function() {
                            it("should inherit the value from the nearest parent", function(){
                                makeVms([1, null, 2, null, 3, null]);
                                expectValues([1, 1, 2, 2, 3, 3]);
                            });
                        });
                    });

                    describe("dynamic values", function() {
                        var parentSpy, childSpy, parentBind, childBind;

                        function createParentBind() {
                            if (!parentBind) {
                                parentBind = bindNotify(bindKey, parentSpy);
                            }
                        }

                        function createChildBind() {
                            if (!childBind) {
                                childBind = bindNotify(bindKey, childSpy, null, child);
                            }
                        }

                        function expectParentSpy(value, callCount) {
                            if (parentBind) {
                                expect(parentSpy.callCount).toBe(callCount);
                                if (parentSpy.callCount > 0) {
                                    expect(parentSpy.mostRecentCall.args[0]).toBe(value);
                                }
                            }
                        }

                        function expectChildSpy(value, callCount) {
                            if (childBind) {
                                expect(childSpy.callCount).toBe(callCount);
                                if (childSpy.callCount > 0) {
                                    expect(childSpy.mostRecentCall.args[0]).toBe(value);
                                }
                            }
                        }

                        beforeEach(function() {
                            parentSpy = jasmine.createSpy();
                            childSpy = jasmine.createSpy();
                        });

                        afterEach(function() {
                            parentSpy = childSpy = parentBind = childBind = null;
                        });

                        describe("via viewmodel set method", function() {
                            function setParentValue(v) {
                                setNotify(key, v);
                            }

                            function setChildValue(v) {
                                setNotify(key, v, child);
                            }

                            describe("no data", function() {
                                beforeEach(function() {
                                    createViewModel();
                                    child = createChild(viewModel);
                                });

                                function createSuite(withParentStub, withChildStub) {
                                    beforeEach(function() {
                                        if (withParentStub) {
                                            createParentBind();
                                        }

                                        if (withChildStub) {
                                            createChildBind();
                                        }
                                    });

                                    describe("first set on the parent", function() {
                                        beforeEach(function() {
                                            setParentValue(1);

                                            expectParentSpy(1, 1);
                                            expectChildSpy(1, 1);
                                        });

                                        it("should climb when setting data on the child", function() {
                                            setChildValue(2);

                                            expectParentValue(2);
                                            expectChildValue(2);

                                            expectParentSpy(2, 2);
                                            expectChildSpy(2, 2);
                                        });

                                        it("should have the child inherit changes", function() {
                                            setParentValue(2);

                                            expectParentValue(2);
                                            expectChildValue(2);

                                            expectParentSpy(2, 2);
                                            expectChildSpy(2, 2);
                                        });
                                    });

                                    describe("first set on the child", function() {
                                        beforeEach(function() {
                                            setChildValue(1);
                                        });

                                        it("should set the data on the child", function() {
                                            expectParentValue(null);
                                            expectChildValue(1);

                                            expectParentSpy(null, 0);
                                            expectChildSpy(1, 1);
                                        });

                                        it("should be able to set a value on the parent", function() {
                                            setParentValue(2);

                                            expectParentValue(2);
                                            expectChildValue(1);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(1, 1);
                                        });

                                        it("should not climb on subsequent sets", function() {
                                            setParentValue(2);
                                            setChildValue(3);

                                            expectParentValue(2);
                                            expectChildValue(3);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(3, 2);
                                            
                                        });
                                    });
                                }

                                describe("no stubs created", function() {
                                    createSuite(false, false);
                                });

                                describe("parent stub created", function() {
                                    createSuite(true, false);
                                });

                                describe("child stub created", function() {
                                    createSuite(false, true);
                                });

                                describe("both stubs created", function() {
                                    createSuite(true, true);
                                });
                            });

                            describe("data in the parent", function() {
                                // By virtue of having data in the parent, a stub will
                                // always exist
                                beforeEach(function() {
                                    viewModel = createWithData(makeData(1));
                                    child = createChild(viewModel);
                                    createParentBind();
                                    parentSpy.reset();
                                });

                                function createSuite(withChildStub) {
                                    beforeEach(function() {
                                        if (withChildStub) {
                                            createChildBind();
                                            childSpy.reset();
                                        }
                                    });

                                    describe("first set on the parent", function() {
                                        beforeEach(function() {
                                            setParentValue(2);
                                        });
                                        it("should inherit the value from the parent", function() {
                                            expectParentValue(2);
                                            expectChildValue(2);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(2, 1);
                                        });

                                        it("should climb and set the value on the parent", function() {
                                            setChildValue(3);

                                            expectParentValue(3);
                                            expectChildValue(3);

                                            expectParentSpy(3, 2);
                                            expectChildSpy(3, 2);
                                        });
                                    });

                                    describe("first set on the child", function() {
                                        beforeEach(function() {
                                            setChildValue(2);
                                        });

                                        it("should climb and set the value", function() {
                                            expectParentValue(2);
                                            expectChildValue(2);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(2, 1);
                                        });

                                        it("should inherit subsequent sets on the parent", function() {
                                            setParentValue(3);

                                            expectParentValue(3);
                                            expectChildValue(3);

                                            expectParentSpy(3, 2);
                                            expectChildSpy(3, 2);
                                        });
                                    });
                                }

                                describe("child stub not created", function() {
                                    createSuite(false);
                                });

                                describe("child stub created", function() {
                                    createSuite(true);
                                });
                            });

                            describe("data in the child", function() {
                                // By virtue of having data in the child, a stub will
                                // always exist
                                beforeEach(function() {
                                    createViewModel();
                                    child = createWithData(makeData(1), viewModel);
                                    createChildBind();
                                    childSpy.reset();
                                });

                                function createSuite(withParentStub) {
                                    beforeEach(function() {
                                        if (withParentStub) {
                                            createParentBind();
                                            parentSpy.reset();
                                        }
                                    });

                                    describe("first set on the parent", function() {
                                        beforeEach(function() {
                                            setParentValue(2);
                                        });

                                        it("should set data on the child", function() {
                                            setChildValue(3);

                                            expectParentValue(2);
                                            expectChildValue(3);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(3, 1);
                                        });

                                        it("should not climb", function() {
                                            setChildValue(3);

                                            expectParentValue(2);
                                            expectChildValue(3);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(3, 1);
                                        });
                                    });

                                    describe("first set on the child", function() {
                                        beforeEach(function() {
                                            setChildValue(2);
                                        });

                                        it("should set the data on the child", function() {
                                            expectParentValue(null);
                                            expectChildValue(2);

                                            expectParentSpy(null, 0);
                                            expectChildSpy(2, 1);
                                        });

                                        it("should be able to set a value on the parent", function() {
                                            setParentValue(3);

                                            expectParentValue(3);
                                            expectChildValue(2);

                                            expectParentSpy(3, 1);
                                            expectChildSpy(2, 1);
                                        });

                                        it("should not climb on subsequent sets", function() {
                                            setParentValue(3);
                                            setChildValue(4);

                                            expectParentValue(3);
                                            expectChildValue(4);

                                            expectParentSpy(3, 1);
                                            expectChildSpy(4, 2);
                                        });
                                    });
                                }

                                describe("parent stub not created", function() {
                                    createSuite(false);
                                });

                                describe("parent stub created", function() {
                                    createSuite(true);
                                });
                            });

                            describe("data in parent and child", function() {
                                // Both stubs will already exist
                                beforeEach(function() {
                                    viewModel = createWithData(makeData(1));
                                    child = createWithData(makeData(2), viewModel);
                                    createParentBind();
                                    createChildBind();
                                    parentSpy.reset();
                                    childSpy.reset();
                                });

                                it("should set data on the child", function() {
                                    setChildValue(3);

                                    expectParentValue(1);
                                    expectChildValue(3);

                                    expectParentSpy(null, 0);
                                    expectChildSpy(3, 1);
                                });

                                it("should set data on the parent", function() {
                                    setParentValue(3);

                                    expectParentValue(3);
                                    expectChildValue(2);

                                    expectParentSpy(3, 1);
                                    expectChildSpy(null, 0);
                                });
                            });

                            describe("multiple layers", function() {
                                function createSuite(withBind) {
                                    var spies;

                                    beforeEach(function() {
                                        spies = [];
                                    });

                                    afterEach(function() {
                                        spies = null;
                                    });

                                    function runFn() {
                                        if (withBind) {
                                            Ext.Array.forEach(vms, function(vm) {
                                                var s = jasmine.createSpy();
                                                bindNotify(bindKey, s, null, vm);
                                                spies.push(s);
                                            });
                                        }
                                    }

                                    function expectSpies(values) {
                                        if (withBind) {
                                            Ext.Array.forEach(spies, function(s, idx) {
                                                var v = values[idx];
                                                if (v === null) {
                                                    expect(s.callCount).toBe(0);
                                                } else {
                                                    expect(s.callCount).toBe(1);
                                                    expect(s.mostRecentCall.args[0]).toBe(v);
                                                }
                                                s.reset();
                                            });
                                        }
                                    }

                                    it("should climb up to the nearest value on set", function() {
                                        makeVms([1, null, null, 2, null, null]);
                                        runFn();

                                        expectValues([1, 1, 1, 2, 2, 2]);
                                        expectSpies([1, 1, 1, 2, 2, 2]);

                                        setNotify(key, 100, vms[5]);
                                        expectValues([1, 1, 1, 100, 100, 100]);
                                        expectSpies([null, null, null, 100, 100, 100]);

                                        setNotify(key, 101, vms[4]);
                                        expectValues([1, 1, 1, 101, 101, 101]);
                                        expectSpies([null, null, null, 101, 101, 101]);

                                        setNotify(key, 102, vms[3]);
                                        expectSpies([null, null, null, 102, 102, 102]);

                                        setNotify(key, 200, vms[2]);
                                        expectValues([200, 200, 200, 102, 102, 102]);
                                        expectSpies([200, 200, 200, null, null, null]);

                                        setNotify(key, 201, vms[1]);
                                        expectValues([201, 201, 201, 102, 102, 102]);
                                        expectSpies([201, 201, 201, null, null, null]);

                                        setNotify(key, 202, vms[0]);
                                        expectValues([202, 202, 202, 102, 102, 102]);
                                        expectSpies([202, 202, 202, null, null, null]);
                                    });

                                    it("should stop climbing if there's no value above", function() {
                                        makeVms([null, null, null, 1, null, null]);
                                        runFn();

                                        expectValues([null, null, null, 1, 1, 1]);
                                        expectSpies([null, null, null, 1, 1, 1]);

                                        setNotify(key, 100, vms[5]);
                                        expectValues([null, null, null, 100, 100, 100]);
                                        expectSpies([null, null, null, 100, 100, 100]);

                                        setNotify(key, 200, vms[2]);
                                        expectValues([null, null, 200, 100, 100, 100]);
                                        expectSpies([null, null, 200, null, null, null]);

                                        setNotify(key, 201, vms[1]);
                                        expectValues([null, 201, 200, 100, 100, 100]);
                                        expectSpies([null, 201, null, null, null, null]);
                                    });
                                }

                                describe("bindings not created", function() {
                                    createSuite(false);
                                });

                                describe("bindings created", function() {
                                    createSuite(true);
                                });
                            });
                        });

                        describe("via binding", function() {
                            function setParentValue(v) {
                                createParentBind();
                                setBindNotify(parentBind, v);
                            }

                            function setChildValue(v) {
                                createChildBind();
                                setBindNotify(childBind, v, child);
                            }

                            describe("no data", function() {
                                beforeEach(function() {
                                    createViewModel();
                                    child = createChild(viewModel);
                                });

                                describe("first set on the parent", function() {
                                    function createSuite(withChildStub) {
                                        beforeEach(function() {
                                            createParentBind();
                                            if (withChildStub) {
                                                createChildBind();
                                            }
                                            setParentValue(1);
                                        });

                                        it("should set data on the parent and inherit to the child", function() {
                                            expectParentValue(1);
                                            expectChildValue(1);

                                            expectParentSpy(1, 1);
                                            expectChildSpy(1, 1);
                                        });

                                        it("should climb and set values on the parent", function() {
                                            setChildValue(2);

                                            expectParentValue(2);
                                            expectChildValue(2);

                                            expectParentSpy(2, 2);
                                            expectChildSpy(2, 2);
                                        });
                                    }

                                    describe("child stub not created", function() {
                                        createSuite(false);
                                    });

                                    describe("child stub created", function() {
                                        createSuite(true);
                                    });
                                });

                                describe("first set on the child", function() {
                                    function createSuite(withParentStub) {
                                        beforeEach(function() {
                                            createChildBind();
                                            if (withParentStub) {
                                                createParentBind();
                                            }
                                            setChildValue(1);
                                        });

                                        it("should set the data on the child", function() {
                                            expectParentValue(null);
                                            expectChildValue(1);

                                            expectParentSpy(null, 0);
                                            expectChildSpy(1, 1);
                                        });

                                        it("should be able to set a value on the parent", function() {
                                            setParentValue(2);

                                            expectParentValue(2);
                                            expectChildValue(1);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(1, 1);
                                        });

                                        it("should not climb on subsequent sets", function() {
                                            setParentValue(2);
                                            setChildValue(3);

                                            expectParentValue(2);
                                            expectChildValue(3);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(3, 2);
                                        });
                                    }

                                    describe("parent stub not created", function() {
                                        createSuite(false);
                                    });

                                    describe("parent stub created", function() {
                                        createSuite(true);
                                    });
                                });
                            });

                            describe("data in the parent", function() {
                                beforeEach(function() {
                                    viewModel = createWithData(makeData(1));
                                    child = createChild(viewModel);
                                });

                                describe("first set on the parent", function() {
                                    function createSuite(withChildStub) {
                                        beforeEach(function() {
                                            createParentBind();
                                            if (withChildStub) {
                                                createChildBind();
                                            }
                                            setParentValue(1);
                                        });

                                        it("should set data on the parent and inherit to the child", function() {
                                            expectParentValue(1);
                                            expectChildValue(1);

                                            expectParentSpy(1, 1);
                                            expectChildSpy(1, 1);
                                        });

                                        it("should climb and set values on the parent", function() {
                                            setChildValue(2);

                                            expectParentValue(2);
                                            expectChildValue(2);

                                            expectParentSpy(2, 2);
                                            expectChildSpy(2, 2);
                                        });
                                    }

                                    describe("child stub not created", function() {
                                        createSuite(false);
                                    });

                                    describe("child stub created", function() {
                                        createSuite(true);
                                    });
                                });

                                describe("first set on the child", function() {
                                    // Child stub has to be created

                                    it("should climb and set values on the parent", function() {
                                        setChildValue(2);

                                        expectParentValue(2);
                                        expectChildValue(2);

                                        expectParentSpy(2, 2);
                                        expectChildSpy(2, 2);
                                    });
                                });
                            });

                            describe("data in the child", function() {
                                beforeEach(function() {
                                    createViewModel();
                                    child = createWithData(makeData(1), viewModel);
                                });

                                describe("first set on the parent", function() {
                                    // Parent stub has to be created

                                    beforeEach(function() {
                                        setParentValue(2);
                                    });

                                    it("should set the data on the parent", function() {
                                        expectParentValue(2);
                                        expectChildValue(1);

                                        expectParentSpy(2, 1);
                                        expectChildSpy(null, 0);
                                    });

                                    it("should not climb on subsequent child sets", function() {
                                        setChildValue(3);

                                        expectParentValue(2);
                                        expectChildValue(3);

                                        expectParentSpy(2, 1);
                                        expectChildSpy(3, 2);
                                    });
                                });

                                describe("first set on the child", function() {
                                    function createSuite(withParentStub) {
                                        beforeEach(function() {
                                            createChildBind();
                                            if (withParentStub) {
                                                createParentBind();
                                            }
                                            setChildValue(2);
                                            
                                        });

                                        it("should set the data on the child", function() {
                                            expectParentValue(null);
                                            expectChildValue(2);

                                            expectParentSpy(null, 0);
                                            expectChildSpy(2, 2);
                                        });

                                        it("should be able to set a value on the parent", function() {
                                            setParentValue(3);

                                            expectParentValue(3);
                                            expectChildValue(2);

                                            expectParentSpy(3, 1);
                                            expectChildSpy(2, 2);
                                        });

                                        it("should not climb on subsequent sets", function() {
                                            setParentValue(2);
                                            setChildValue(3);

                                            expectChildValue(3);
                                            expectParentValue(2);

                                            expectParentSpy(2, 1);
                                            expectChildSpy(3, 3);
                                        });
                                    }

                                    describe("parent stub not created", function() {
                                        createSuite(false);
                                    });

                                    describe("parent stub created", function() {
                                        createSuite(true);
                                    });
                                });
                            });

                            describe("data in parent and child", function() {
                                // Both stubs will exist
                                beforeEach(function() {
                                    viewModel = createWithData(makeData(1));
                                    child = createWithData(makeData(2), viewModel);

                                    createParentBind();
                                    createChildBind();
                                });

                                describe("first set on the parent", function() {
                                    beforeEach(function() {
                                        setParentValue(3);
                                    });

                                    it("should set the data on the parent", function() {
                                        expectParentValue(3);
                                        expectChildValue(2);

                                        expectParentSpy(3, 2);
                                        expectChildSpy(2, 1);
                                    });

                                    it("should be able to set a value on the child", function() {
                                        setChildValue(4);

                                        expectParentValue(3);
                                        expectChildValue(4);

                                        expectParentSpy(3, 2);
                                        expectChildSpy(4, 2);
                                    });
                                });

                                describe("first set on the child", function() {
                                    beforeEach(function() {
                                        setChildValue(3);
                                    });

                                    it("should set the data on the child", function() {
                                        expectParentValue(1);
                                        expectChildValue(3);

                                        expectParentSpy(1, 1);
                                        expectChildSpy(3, 2);
                                    });

                                    it("should be able to set a value on the parent", function() {
                                        setParentValue(4);

                                        expectParentValue(4);
                                        expectChildValue(3);

                                        expectParentSpy(4, 2);
                                        expectChildSpy(3, 2);
                                    });
                                });
                            });

                            describe("multiple layers", function() {
                                function createSuite(withBind) {
                                    var spies, bindings;

                                    beforeEach(function() {
                                        bindings = [];
 