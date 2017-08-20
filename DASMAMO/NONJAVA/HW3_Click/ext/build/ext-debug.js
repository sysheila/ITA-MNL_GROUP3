/*
This file is part of Ext JS 6.5.0.775

Copyright (c) 2011-2017 Sencha Inc

license: http://www.sencha.com/legal/sencha-software-license-agreement
Contact: http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement referenced above or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Version: 6.5.0.775 Build date: 2017-05-10 11:10:44 (de337193176203a15a554d5a90e44493390c02d0)

*/

var Ext = Ext || {};
(function(manifest){
    if(!Ext.manifest) {
        Ext.manifest = manifest;
    } else {
        for(var name in manifest) {
            Ext.manifest[name] = manifest[name];
        }
    }
})({
  "paths": {
    "Ext": "../classic/classic/src",
    "Ext.AbstractManager": "../packages/core/src/AbstractManager.js",
    "Ext.Ajax": "../packages/core/src/Ajax.js",
    "Ext.AnimationQueue": "../packages/core/src/AnimationQueue.js",
    "Ext.ComponentManager": "../packages/core/src/ComponentManager.js",
    "Ext.ComponentQuery": "../packages/core/src/ComponentQuery.js",
    "Ext.Deferred": "../packages/core/src/Deferred.js",
    "Ext.Evented": "../packages/core/src/Evented.js",
    "Ext.Factory": "../packages/core/src/mixin/Factoryable.js",
    "Ext.GlobalEvents": "../packages/core/src/GlobalEvents.js",
    "Ext.Glyph": "../packages/core/src/Glyph.js",
    "Ext.JSON": "../packages/core/src/JSON.js",
    "Ext.Mixin": "../packages/core/src/class/Mixin.js",
    "Ext.Msg": "../classic/classic/src/window/MessageBox.js",
    "Ext.Progress": "../packages/core/src/Progress.js",
    "Ext.ProgressBase": "../packages/core/src/ProgressBase.js",
    "Ext.Promise": "../packages/core/src/Promise.js",
    "Ext.String.format": "../packages/core/src/Template.js",
    "Ext.TaskQueue": "../packages/core/src/TaskQueue.js",
    "Ext.Template": "../packages/core/src/Template.js",
    "Ext.Widget": "../packages/core/src/Widget.js",
    "Ext.XTemplate": "../packages/core/src/XTemplate.js",
    "Ext.app": "../packages/core/src/app",
    "Ext.data": "../packages/core/src/data",
    "Ext.direct": "../packages/core/src/direct",
    "Ext.dom": "../packages/core/src/dom",
    "Ext.dom.ButtonElement": "../classic/classic/src/dom/ButtonElement.js",
    "Ext.dom.Layer": "../classic/classic/src/dom/Layer.js",
    "Ext.drag": "../packages/core/src/drag",
    "Ext.event": "../packages/core/src/event",
    "Ext.event.publisher.MouseEnterLeave": "../classic/classic/src/event/publisher/MouseEnterLeave.js",
    "Ext.field": "../packages/core/src/field",
    "Ext.fx.Animation": "../packages/core/src/fx/Animation.js",
    "Ext.fx.Runner": "../packages/core/src/fx/Runner.js",
    "Ext.fx.State": "../packages/core/src/fx/State.js",
    "Ext.fx.animation": "../packages/core/src/fx/animation",
    "Ext.fx.easing": "../packages/core/src/fx/easing",
    "Ext.fx.runner": "../packages/core/src/fx/runner",
    "Ext.list": "../packages/core/src/list",
    "Ext.mixin": "../packages/core/src/mixin",
    "Ext.parse": "../packages/core/src/parse",
    "Ext.perf": "../packages/core/src/perf",
    "Ext.plugin.Abstract": "../packages/core/src/plugin/Abstract.js",
    "Ext.plugin.MouseEnter": "../packages/core/src/plugin/MouseEnter.js",
    "Ext.promise": "../packages/core/src/promise",
    "Ext.route": "../packages/core/src/route",
    "Ext.scroll.Scroller": "../packages/core/src/scroll/Scroller.js",
    "Ext.sparkline": "../packages/core/src/sparkline",
    "Ext.util": "../packages/core/src/util",
    "Ext.util.Animate": "../classic/classic/src/util/Animate.js",
    "Ext.util.ComponentDragger": "../classic/classic/src/util/ComponentDragger.js",
    "Ext.util.ElementContainer": "../classic/classic/src/util/ElementContainer.js",
    "Ext.util.Floating": "../classic/classic/src/util/Floating.js",
    "Ext.util.Format.format": "../packages/core/src/Template.js",
    "Ext.util.Memento": "../classic/classic/src/util/Memento.js",
    "Ext.util.ProtoElement": "../classic/classic/src/util/ProtoElement.js",
    "Ext.util.Queue": "../classic/classic/src/util/Queue.js",
    "Ext.util.Renderable": "../classic/classic/src/util/Renderable.js",
    "Ext.util.StoreHolder": "../classic/classic/src/util/StoreHolder.js"
  },
  "loadOrder": [
    {
      "path": "../packages/core/src/class/Mixin.js",
      "requires": [],
      "uses": [],
      "idx": 0
    },
    {
      "path": "../packages/core/src/util/DelayedTask.js",
      "requires": [],
      "uses": [
        75
      ],
      "idx": 1
    },
    {
      "path": "../packages/core/src/util/Event.js",
      "requires": [
        1
      ],
      "uses": [
        23
      ],
      "idx": 2
    },
    {
      "path": "../packages/core/src/mixin/Identifiable.js",
      "requires": [],
      "uses": [],
      "idx": 3
    },
    {
      "path": "../packages/core/src/mixin/Observable.js",
      "requires": [
        0,
        2,
        3
      ],
      "uses": [
        50
      ],
      "idx": 4
    },
    {
      "path": "../packages/core/src/util/HashMap.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 5
    },
    {
      "path": "../packages/core/src/AbstractManager.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 6
    },
    {
      "path": "../packages/core/src/promise/Consequence.js",
      "requires": [],
      "uses": [
        8
      ],
      "idx": 7
    },
    {
      "path": "../packages/core/src/promise/Deferred.js",
      "requires": [
        7
      ],
      "uses": [
        9
      ],
      "idx": 8
    },
    {
      "path": "../packages/core/src/promise/Promise.js",
      "requires": [
        8
      ],
      "uses": [],
      "idx": 9
    },
    {
      "path": "../packages/core/src/Promise.js",
      "requires": [
        9
      ],
      "uses": [
        8
      ],
      "idx": 10
    },
    {
      "path": "../packages/core/src/Deferred.js",
      "requires": [
        8,
        10
      ],
      "uses": [
        9
      ],
      "idx": 11
    },
    {
      "path": "../packages/core/src/mixin/Factoryable.js",
      "requires": [],
      "uses": [],
      "idx": 12
    },
    {
      "path": "../packages/core/src/data/request/Base.js",
      "requires": [
        11,
        12
      ],
      "uses": [
        17
      ],
      "idx": 13
    },
    {
      "path": "../packages/core/src/data/flash/BinaryXhr.js",
      "requires": [],
      "uses": [
        75
      ],
      "idx": 14
    },
    {
      "path": "../packages/core/src/data/request/Ajax.js",
      "requires": [
        13,
        14
      ],
      "uses": [
        75
      ],
      "idx": 15
    },
    {
      "path": "../packages/core/src/data/request/Form.js",
      "requires": [
        13
      ],
      "uses": [],
      "idx": 16
    },
    {
      "path": "../packages/core/src/data/Connection.js",
      "requires": [
        4,
        11,
        14,
        15,
        16
      ],
      "uses": [
        12,
        48
      ],
      "idx": 17
    },
    {
      "path": "../packages/core/src/Ajax.js",
      "requires": [
        17
      ],
      "uses": [],
      "idx": 18
    },
    {
      "path": "../packages/core/src/AnimationQueue.js",
      "requires": [],
      "uses": [],
      "idx": 19
    },
    {
      "path": "../packages/core/src/ComponentManager.js",
      "requires": [],
      "uses": [
        23,
        35,
        48
      ],
      "idx": 20
    },
    {
      "path": "../packages/core/src/util/Operators.js",
      "requires": [],
      "uses": [],
      "idx": 21
    },
    {
      "path": "../packages/core/src/util/LruCache.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 22
    },
    {
      "path": "../packages/core/src/ComponentQuery.js",
      "requires": [
        20,
        21,
        22
      ],
      "uses": [
        91
      ],
      "idx": 23
    },
    {
      "path": "../packages/core/src/Evented.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 24
    },
    {
      "path": "../packages/core/src/util/Positionable.js",
      "requires": [],
      "uses": [
        33,
        48
      ],
      "idx": 25
    },
    {
      "path": "../packages/core/src/dom/UnderlayPool.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 26
    },
    {
      "path": "../packages/core/src/dom/Underlay.js",
      "requires": [
        26
      ],
      "uses": [],
      "idx": 27
    },
    {
      "path": "../packages/core/src/dom/Shadow.js",
      "requires": [
        27
      ],
      "uses": [],
      "idx": 28
    },
    {
      "path": "../packages/core/src/dom/Shim.js",
      "requires": [
        27
      ],
      "uses": [],
      "idx": 29
    },
    {
      "path": "../packages/core/src/dom/ElementEvent.js",
      "requires": [
        2
      ],
      "uses": [
        36
      ],
      "idx": 30
    },
    {
      "path": "../packages/core/src/event/publisher/Publisher.js",
      "requires": [],
      "uses": [],
      "idx": 31
    },
    {
      "path": "../packages/core/src/util/Offset.js",
      "requires": [],
      "uses": [],
      "idx": 32
    },
    {
      "path": "../packages/core/src/util/Region.js",
      "requires": [
        32
      ],
      "uses": [],
      "idx": 33
    },
    {
      "path": "../packages/core/src/util/Point.js",
      "requires": [
        33
      ],
      "uses": [],
      "idx": 34
    },
    {
      "path": "../packages/core/src/event/Event.js",
      "requires": [
        34
      ],
      "uses": [
        36,
        75
      ],
      "idx": 35
    },
    {
      "path": "../packages/core/src/event/publisher/Dom.js",
      "requires": [
        31,
        35
      ],
      "uses": [
        75
      ],
      "idx": 36
    },
    {
      "path": "../packages/core/src/event/publisher/Gesture.js",
      "requires": [
        19,
        34,
        36
      ],
      "uses": [
        35,
        48,
        294,
        305,
        306,
        307,
        308,
        309,
        310,
        311,
        312,
        313,
        314,
        315
      ],
      "idx": 37
    },
    {
      "path": "../packages/core/src/mixin/Templatable.js",
      "requires": [
        0
      ],
      "uses": [
        48
      ],
      "idx": 38
    },
    {
      "path": "../packages/core/src/TaskQueue.js",
      "requires": [
        19
      ],
      "uses": [],
      "idx": 39
    },
    {
      "path": "../packages/core/src/util/sizemonitor/Abstract.js",
      "requires": [
        38,
        39
      ],
      "uses": [],
      "idx": 40
    },
    {
      "path": "../packages/core/src/util/sizemonitor/Scroll.js",
      "requires": [
        40
      ],
      "uses": [
        39
      ],
      "idx": 41
    },
    {
      "path": "../packages/core/src/util/SizeMonitor.js",
      "requires": [
        41
      ],
      "uses": [],
      "idx": 42
    },
    {
      "path": "../packages/core/src/event/publisher/ElementSize.js",
      "requires": [
        31,
        42
      ],
      "uses": [
        39
      ],
      "idx": 43
    },
    {
      "path": "../packages/core/src/util/paintmonitor/Abstract.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 44
    },
    {
      "path": "../packages/core/src/util/paintmonitor/CssAnimation.js",
      "requires": [
        44
      ],
      "uses": [],
      "idx": 45
    },
    {
      "path": "../packages/core/src/util/PaintMonitor.js",
      "requires": [
        45
      ],
      "uses": [],
      "idx": 46
    },
    {
      "path": "../packages/core/src/event/publisher/ElementPaint.js",
      "requires": [
        31,
        39,
        46
      ],
      "uses": [],
      "idx": 47
    },
    {
      "path": "../packages/core/src/dom/Element.js",
      "requires": [
        4,
        25,
        28,
        29,
        30,
        36,
        37,
        43,
        47
      ],
      "uses": [
        31,
        33,
        35,
        73,
        74,
        75,
        91,
        98,
        238,
        295,
        316,
        327,
        329
      ],
      "idx": 48
    },
    {
      "path": "../packages/core/src/util/Filter.js",
      "requires": [],
      "uses": [],
      "idx": 49
    },
    {
      "path": "../packages/core/src/util/Observable.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 50
    },
    {
      "path": "../packages/core/src/util/AbstractMixedCollection.js",
      "requires": [
        49,
        50
      ],
      "uses": [],
      "idx": 51
    },
    {
      "path": "../packages/core/src/util/Sorter.js",
      "requires": [],
      "uses": [],
      "idx": 52
    },
    {
      "path": "../packages/core/src/util/Sortable.js",
      "requires": [
        52
      ],
      "uses": [
        54
      ],
      "idx": 53
    },
    {
      "path": "../packages/core/src/util/MixedCollection.js",
      "requires": [
        51,
        53
      ],
      "uses": [],
      "idx": 54
    },
    {
      "path": "../packages/core/src/util/TaskRunner.js",
      "requires": [],
      "uses": [
        75
      ],
      "idx": 55
    },
    {
      "path": "../classic/classic/src/fx/target/Target.js",
      "requires": [],
      "uses": [],
      "idx": 56
    },
    {
      "path": "../classic/classic/src/fx/target/Element.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 57
    },
    {
      "path": "../classic/classic/src/fx/target/ElementCSS.js",
      "requires": [
        57
      ],
      "uses": [],
      "idx": 58
    },
    {
      "path": "../classic/classic/src/fx/target/CompositeElement.js",
      "requires": [
        57
      ],
      "uses": [],
      "idx": 59
    },
    {
      "path": "../classic/classic/src/fx/target/CompositeElementCSS.js",
      "requires": [
        58,
        59
      ],
      "uses": [],
      "idx": 60
    },
    {
      "path": "../classic/classic/src/fx/target/Sprite.js",
      "requires": [
        56
      ],
      "uses": [],
      "idx": 61
    },
    {
      "path": "../classic/classic/src/fx/target/CompositeSprite.js",
      "requires": [
        61
      ],
      "uses": [],
      "idx": 62
    },
    {
      "path": "../classic/classic/src/fx/target/Component.js",
      "requires": [
        56
      ],
      "uses": [
        75
      ],
      "idx": 63
    },
    {
      "path": "../classic/classic/src/fx/Queue.js",
      "requires": [
        5
      ],
      "uses": [],
      "idx": 64
    },
    {
      "path": "../classic/classic/src/fx/Manager.js",
      "requires": [
        54,
        55,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64
      ],
      "uses": [],
      "idx": 65
    },
    {
      "path": "../classic/classic/src/fx/Animator.js",
      "requires": [
        50,
        65
      ],
      "uses": [
        71
      ],
      "idx": 66
    },
    {
      "path": "../classic/classic/src/fx/CubicBezier.js",
      "requires": [],
      "uses": [],
      "idx": 67
    },
    {
      "path": "../classic/classic/src/fx/Easing.js",
      "requires": [
        67
      ],
      "uses": [],
      "idx": 68
    },
    {
      "path": "../classic/classic/src/fx/DrawPath.js",
      "requires": [],
      "uses": [],
      "idx": 69
    },
    {
      "path": "../classic/classic/src/fx/PropertyHandler.js",
      "requires": [
        69
      ],
      "uses": [],
      "idx": 70
    },
    {
      "path": "../classic/classic/src/fx/Anim.js",
      "requires": [
        50,
        65,
        66,
        67,
        68,
        70
      ],
      "uses": [],
      "idx": 71
    },
    {
      "path": "../classic/classic/src/util/Animate.js",
      "requires": [
        65,
        71
      ],
      "uses": [],
      "idx": 72
    },
    {
      "path": "../packages/core/src/dom/Fly.js",
      "requires": [
        48
      ],
      "uses": [],
      "idx": 73
    },
    {
      "path": "../packages/core/src/dom/CompositeElementLite.js",
      "requires": [
        73
      ],
      "uses": [
        48
      ],
      "idx": 74
    },
    {
      "path": "../packages/core/src/GlobalEvents.js",
      "requires": [
        4,
        48
      ],
      "uses": [],
      "idx": 75
    },
    {
      "path": "../packages/core/src/Glyph.js",
      "requires": [],
      "uses": [],
      "idx": 76
    },
    {
      "path": "../packages/core/src/JSON.js",
      "requires": [],
      "uses": [],
      "idx": 77
    },
    {
      "path": "../packages/core/src/Manifest.js",
      "requires": [],
      "uses": [],
      "idx": 78
    },
    {
      "path": "../packages/core/src/mixin/Inheritable.js",
      "requires": [
        0
      ],
      "uses": [
        20
      ],
      "idx": 79
    },
    {
      "path": "../packages/core/src/mixin/Bindable.js",
      "requires": [],
      "uses": [
        12
      ],
      "idx": 80
    },
    {
      "path": "../packages/core/src/mixin/ComponentDelegation.js",
      "requires": [
        0,
        4
      ],
      "uses": [
        2
      ],
      "idx": 81
    },
    {
      "path": "../packages/core/src/plugin/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 82
    },
    {
      "path": "../packages/core/src/mixin/Pluggable.js",
      "requires": [
        82
      ],
      "uses": [],
      "idx": 83
    },
    {
      "path": "../packages/core/src/mixin/Keyboard.js",
      "requires": [
        0
      ],
      "uses": [
        35
      ],
      "idx": 84
    },
    {
      "path": "../packages/core/src/mixin/Focusable.js",
      "requires": [],
      "uses": [
        20,
        23,
        35,
        48
      ],
      "idx": 85
    },
    {
      "path": "../packages/core/src/mixin/Accessible.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 86
    },
    {
      "path": "../packages/core/src/Widget.js",
      "requires": [
        12,
        24,
        48,
        79,
        80,
        81,
        83,
        84,
        85,
        86
      ],
      "uses": [
        20,
        23,
        94
      ],
      "idx": 87
    },
    {
      "path": "../packages/core/src/ProgressBase.js",
      "requires": [],
      "uses": [
        94
      ],
      "idx": 88
    },
    {
      "path": "../packages/core/src/Progress.js",
      "requires": [
        87,
        88
      ],
      "uses": [],
      "idx": 89
    },
    {
      "path": "../packages/core/src/util/Format.js",
      "requires": [],
      "uses": [
        91,
        238
      ],
      "idx": 90
    },
    {
      "path": "../packages/core/src/Template.js",
      "requires": [
        90
      ],
      "uses": [
        238
      ],
      "idx": 91
    },
    {
      "path": "../packages/core/src/util/XTemplateParser.js",
      "requires": [],
      "uses": [],
      "idx": 92
    },
    {
      "path": "../packages/core/src/util/XTemplateCompiler.js",
      "requires": [
        92
      ],
      "uses": [],
      "idx": 93
    },
    {
      "path": "../packages/core/src/XTemplate.js",
      "requires": [
        91,
        93
      ],
      "uses": [],
      "idx": 94
    },
    {
      "path": "../packages/core/src/app/EventDomain.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 95
    },
    {
      "path": "../packages/core/src/app/domain/Component.js",
      "requires": [
        87,
        95
      ],
      "uses": [],
      "idx": 96
    },
    {
      "path": "../classic/classic/src/util/ProtoElement.js",
      "requires": [],
      "uses": [
        48,
        238
      ],
      "idx": 97
    },
    {
      "path": "../packages/core/src/dom/CompositeElement.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 98
    },
    {
      "path": "../classic/classic/src/plugin/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 99
    },
    {
      "path": "../packages/core/src/util/CSS.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 100
    },
    {
      "path": "../packages/core/src/fx/easing/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 101
    },
    {
      "path": "../packages/core/src/fx/easing/Linear.js",
      "requires": [
        101
      ],
      "uses": [],
      "idx": 102
    },
    {
      "path": "../packages/core/src/util/translatable/Abstract.js",
      "requires": [
        12,
        24,
        102
      ],
      "uses": [
        19
      ],
      "idx": 103
    },
    {
      "path": "../packages/core/src/util/translatable/Dom.js",
      "requires": [
        103
      ],
      "uses": [],
      "idx": 104
    },
    {
      "path": "../packages/core/src/util/translatable/ScrollPosition.js",
      "requires": [
        104
      ],
      "uses": [],
      "idx": 105
    },
    {
      "path": "../packages/core/src/scroll/Scroller.js",
      "requires": [
        11,
        12,
        24,
        100,
        105
      ],
      "uses": [
        75
      ],
      "idx": 106
    },
    {
      "path": "../classic/classic/src/util/Floating.js",
      "requires": [],
      "uses": [
        20,
        48,
        73,
        401
      ],
      "idx": 107
    },
    {
      "path": "../classic/classic/src/util/ElementContainer.js",
      "requires": [],
      "uses": [],
      "idx": 108
    },
    {
      "path": "../classic/classic/src/util/Renderable.js",
      "requires": [
        48
      ],
      "uses": [
        94,
        113,
        238
      ],
      "idx": 109
    },
    {
      "path": "../classic/classic/src/state/Provider.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 110
    },
    {
      "path": "../classic/classic/src/state/Manager.js",
      "requires": [
        110
      ],
      "uses": [],
      "idx": 111
    },
    {
      "path": "../classic/classic/src/state/Stateful.js",
      "requires": [
        55,
        111
      ],
      "uses": [],
      "idx": 112
    },
    {
      "path": "../classic/classic/src/Component.js",
      "requires": [
        20,
        23,
        25,
        50,
        72,
        75,
        79,
        80,
        81,
        82,
        84,
        85,
        86,
        97,
        98,
        99,
        106,
        107,
        108,
        109,
        112
      ],
      "uses": [
        1,
        48,
        65,
        94,
        238,
        396,
        397,
        398,
        401,
        409,
        411,
        477,
        624,
        643
      ],
      "idx": 113
    },
    {
      "path": "../classic/classic/src/layout/container/border/Region.js",
      "requires": [],
      "uses": [],
      "idx": 114
    },
    {
      "path": "../packages/core/src/app/EventBus.js",
      "requires": [
        96
      ],
      "uses": [
        95
      ],
      "idx": 115
    },
    {
      "path": "../packages/core/src/app/domain/Global.js",
      "requires": [
        75,
        95
      ],
      "uses": [],
      "idx": 116
    },
    {
      "path": "../packages/core/src/route/Action.js",
      "requires": [],
      "uses": [
        11
      ],
      "idx": 117
    },
    {
      "path": "../packages/core/src/route/Route.js",
      "requires": [
        117
      ],
      "uses": [
        10,
        120
      ],
      "idx": 118
    },
    {
      "path": "../packages/core/src/util/History.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 119
    },
    {
      "path": "../packages/core/src/route/Router.js",
      "requires": [
        117,
        118,
        119
      ],
      "uses": [],
      "idx": 120
    },
    {
      "path": "../packages/core/src/route/Mixin.js",
      "requires": [
        0,
        120
      ],
      "uses": [
        119
      ],
      "idx": 121
    },
    {
      "path": "../packages/core/src/app/BaseController.js",
      "requires": [
        4,
        115,
        116,
        121
      ],
      "uses": [
        217
      ],
      "idx": 122
    },
    {
      "path": "../packages/core/src/app/Util.js",
      "requires": [],
      "uses": [],
      "idx": 123
    },
    {
      "path": "../packages/core/src/util/CollectionKey.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 124
    },
    {
      "path": "../packages/core/src/util/Grouper.js",
      "requires": [
        52
      ],
      "uses": [],
      "idx": 125
    },
    {
      "path": "../packages/core/src/util/Collection.js",
      "requires": [
        4,
        49,
        52,
        124,
        125
      ],
      "uses": [
        170,
        171,
        172
      ],
      "idx": 126
    },
    {
      "path": "../packages/core/src/data/Range.js",
      "requires": [
        1
      ],
      "uses": [],
      "idx": 127
    },
    {
      "path": "../packages/core/src/util/ObjectTemplate.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 128
    },
    {
      "path": "../packages/core/src/data/schema/Role.js",
      "requires": [],
      "uses": [
        12
      ],
      "idx": 129
    },
    {
      "path": "../packages/core/src/data/schema/Association.js",
      "requires": [
        129
      ],
      "uses": [],
      "idx": 130
    },
    {
      "path": "../packages/core/src/data/schema/OneToOne.js",
      "requires": [
        130
      ],
      "uses": [],
      "idx": 131
    },
    {
      "path": "../packages/core/src/data/schema/ManyToOne.js",
      "requires": [
        130
      ],
      "uses": [],
      "idx": 132
    },
    {
      "path": "../packages/core/src/data/schema/ManyToMany.js",
      "requires": [
        130
      ],
      "uses": [],
      "idx": 133
    },
    {
      "path": "../packages/core/src/util/Inflector.js",
      "requires": [],
      "uses": [],
      "idx": 134
    },
    {
      "path": "../packages/core/src/data/schema/Namer.js",
      "requires": [
        12,
        134
      ],
      "uses": [],
      "idx": 135
    },
    {
      "path": "../packages/core/src/data/schema/Schema.js",
      "requires": [
        12,
        128,
        131,
        132,
        133,
        135
      ],
      "uses": [],
      "idx": 136
    },
    {
      "path": "../packages/core/src/data/AbstractStore.js",
      "requires": [
        4,
        12,
        49,
        126,
        127,
        136
      ],
      "uses": [
        176
      ],
      "idx": 137
    },
    {
      "path": "../packages/core/src/data/Error.js",
      "requires": [],
      "uses": [],
      "idx": 138
    },
    {
      "path": "../packages/core/src/data/ErrorCollection.js",
      "requires": [
        54,
        138
      ],
      "uses": [
        147
      ],
      "idx": 139
    },
    {
      "path": "../packages/core/src/data/operation/Operation.js",
      "requires": [],
      "uses": [],
      "idx": 140
    },
    {
      "path": "../packages/core/src/data/operation/Create.js",
      "requires": [
        140
      ],
      "uses": [],
      "idx": 141
    },
    {
      "path": "../packages/core/src/data/operation/Destroy.js",
      "requires": [
        140
      ],
      "uses": [],
      "idx": 142
    },
    {
      "path": "../packages/core/src/data/operation/Read.js",
      "requires": [
        140
      ],
      "uses": [],
      "idx": 143
    },
    {
      "path": "../packages/core/src/data/operation/Update.js",
      "requires": [
        140
      ],
      "uses": [],
      "idx": 144
    },
    {
      "path": "../packages/core/src/data/SortTypes.js",
      "requires": [],
      "uses": [],
      "idx": 145
    },
    {
      "path": "../packages/core/src/data/validator/Validator.js",
      "requires": [
        12
      ],
      "uses": [],
      "idx": 146
    },
    {
      "path": "../packages/core/src/data/field/Field.js",
      "requires": [
        12,
        145,
        146
      ],
      "uses": [],
      "idx": 147
    },
    {
      "path": "../packages/core/src/data/field/Boolean.js",
      "requires": [
        147
      ],
      "uses": [],
      "idx": 148
    },
    {
      "path": "../packages/core/src/data/field/Date.js",
      "requires": [
        147
      ],
      "uses": [],
      "idx": 149
    },
    {
      "path": "../packages/core/src/data/field/Integer.js",
      "requires": [
        147
      ],
      "uses": [],
      "idx": 150
    },
    {
      "path": "../packages/core/src/data/field/Number.js",
      "requires": [
        150
      ],
      "uses": [],
      "idx": 151
    },
    {
      "path": "../packages/core/src/data/field/String.js",
      "requires": [
        147
      ],
      "uses": [],
      "idx": 152
    },
    {
      "path": "../packages/core/src/data/identifier/Generator.js",
      "requires": [
        12
      ],
      "uses": [],
      "idx": 153
    },
    {
      "path": "../packages/core/src/data/identifier/Sequential.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 154
    },
    {
      "path": "../packages/core/src/data/Model.js",
      "requires": [
        136,
        139,
        140,
        141,
        142,
        143,
        144,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154
      ],
      "uses": [
        12,
        157,
        237
      ],
      "idx": 155
    },
    {
      "path": "../packages/core/src/data/ResultSet.js",
      "requires": [],
      "uses": [],
      "idx": 156
    },
    {
      "path": "../packages/core/src/data/reader/Reader.js",
      "requires": [
        4,
        12,
        22,
        94,
        156
      ],
      "uses": [
        136
      ],
      "idx": 157
    },
    {
      "path": "../packages/core/src/data/writer/Writer.js",
      "requires": [
        12
      ],
      "uses": [],
      "idx": 158
    },
    {
      "path": "../packages/core/src/data/proxy/Proxy.js",
      "requires": [
        4,
        12,
        136,
        157,
        158
      ],
      "uses": [
        140,
        141,
        142,
        143,
        144,
        155,
        185
      ],
      "idx": 159
    },
    {
      "path": "../packages/core/src/data/proxy/Client.js",
      "requires": [
        159
      ],
      "uses": [],
      "idx": 160
    },
    {
      "path": "../packages/core/src/data/proxy/Memory.js",
      "requires": [
        160
      ],
      "uses": [
        49,
        53
      ],
      "idx": 161
    },
    {
      "path": "../packages/core/src/data/ProxyStore.js",
      "requires": [
        137,
        140,
        141,
        142,
        143,
        144,
        155,
        159,
        161
      ],
      "uses": [
        136
      ],
      "idx": 162
    },
    {
      "path": "../packages/core/src/util/Group.js",
      "requires": [
        126
      ],
      "uses": [],
      "idx": 163
    },
    {
      "path": "../packages/core/src/data/Group.js",
      "requires": [
        163
      ],
      "uses": [],
      "idx": 164
    },
    {
      "path": "../packages/core/src/data/LocalStore.js",
      "requires": [
        0,
        164
      ],
      "uses": [
        126
      ],
      "idx": 165
    },
    {
      "path": "../packages/core/src/data/proxy/Server.js",
      "requires": [
        159
      ],
      "uses": [
        91,
        234
      ],
      "idx": 166
    },
    {
      "path": "../packages/core/src/data/proxy/Ajax.js",
      "requires": [
        18,
        166
      ],
      "uses": [],
      "idx": 167
    },
    {
      "path": "../packages/core/src/data/reader/Json.js",
      "requires": [
        77,
        157
      ],
      "uses": [],
      "idx": 168
    },
    {
      "path": "../packages/core/src/data/writer/Json.js",
      "requires": [
        158
      ],
      "uses": [],
      "idx": 169
    },
    {
      "path": "../packages/core/src/util/SorterCollection.js",
      "requires": [
        52,
        126
      ],
      "uses": [],
      "idx": 170
    },
    {
      "path": "../packages/core/src/util/FilterCollection.js",
      "requires": [
        49,
        126
      ],
      "uses": [],
      "idx": 171
    },
    {
      "path": "../packages/core/src/util/GroupCollection.js",
      "requires": [
        126,
        163,
        170,
        171
      ],
      "uses": [],
      "idx": 172
    },
    {
      "path": "../packages/core/src/data/Store.js",
      "requires": [
        1,
        155,
        162,
        165,
        167,
        168,
        169,
        172
      ],
      "uses": [
        125,
        176,
        222
      ],
      "idx": 173
    },
    {
      "path": "../packages/core/src/data/reader/Array.js",
      "requires": [
        168
      ],
      "uses": [],
      "idx": 174
    },
    {
      "path": "../packages/core/src/data/ArrayStore.js",
      "requires": [
        161,
        173,
        174
      ],
      "uses": [],
      "idx": 175
    },
    {
      "path": "../packages/core/src/data/StoreManager.js",
      "requires": [
        54,
        175
      ],
      "uses": [
        12,
        161,
        169,
        173,
        174
      ],
      "idx": 176
    },
    {
      "path": "../packages/core/src/app/domain/Store.js",
      "requires": [
        95,
        137
      ],
      "uses": [],
      "idx": 177
    },
    {
      "path": "../packages/core/src/app/Controller.js",
      "requires": [
        20,
        96,
        122,
        123,
        176,
        177
      ],
      "uses": [
        23,
        136
      ],
      "idx": 178
    },
    {
      "path": "../packages/core/src/app/Application.js",
      "requires": [
        54,
        119,
        178
      ],
      "uses": [
        120
      ],
      "idx": 179
    },
    {
      "path": "../packages/core/src/app/Profile.js",
      "requires": [
        4,
        178
      ],
      "uses": [],
      "idx": 180
    },
    {
      "path": "../packages/core/src/app/domain/View.js",
      "requires": [
        87,
        95
      ],
      "uses": [],
      "idx": 181
    },
    {
      "path": "../packages/core/src/app/ViewController.js",
      "requires": [
        12,
        122,
        181
      ],
      "uses": [],
      "idx": 182
    },
    {
      "path": "../packages/core/src/util/Bag.js",
      "requires": [],
      "uses": [],
      "idx": 183
    },
    {
      "path": "../packages/core/src/util/Scheduler.js",
      "requires": [
        4,
        183
      ],
      "uses": [
        75
      ],
      "idx": 184
    },
    {
      "path": "../packages/core/src/data/Batch.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 185
    },
    {
      "path": "../packages/core/src/data/matrix/Slice.js",
      "requires": [],
      "uses": [],
      "idx": 186
    },
    {
      "path": "../packages/core/src/data/matrix/Side.js",
      "requires": [
        186
      ],
      "uses": [],
      "idx": 187
    },
    {
      "path": "../packages/core/src/data/matrix/Matrix.js",
      "requires": [
        187
      ],
      "uses": [],
      "idx": 188
    },
    {
      "path": "../packages/core/src/data/session/ChangesVisitor.js",
      "requires": [],
      "uses": [],
      "idx": 189
    },
    {
      "path": "../packages/core/src/data/session/ChildChangesVisitor.js",
      "requires": [
        189
      ],
      "uses": [],
      "idx": 190
    },
    {
      "path": "../packages/core/src/data/session/BatchVisitor.js",
      "requires": [],
      "uses": [
        185
      ],
      "idx": 191
    },
    {
      "path": "../packages/core/src/mixin/Dirty.js",
      "requires": [],
      "uses": [],
      "idx": 192
    },
    {
      "path": "../packages/core/src/data/Session.js",
      "requires": [
        4,
        136,
        185,
        188,
        189,
        190,
        191,
        192
      ],
      "uses": [],
      "idx": 193
    },
    {
      "path": "../packages/core/src/util/Schedulable.js",
      "requires": [],
      "uses": [],
      "idx": 194
    },
    {
      "path": "../packages/core/src/app/bind/BaseBinding.js",
      "requires": [
        194
      ],
      "uses": [],
      "idx": 195
    },
    {
      "path": "../packages/core/src/app/bind/Binding.js",
      "requires": [
        195
      ],
      "uses": [],
      "idx": 196
    },
    {
      "path": "../packages/core/src/app/bind/AbstractStub.js",
      "requires": [
        194,
        196
      ],
      "uses": [],
      "idx": 197
    },
    {
      "path": "../packages/core/src/app/bind/Stub.js",
      "requires": [
        196,
        197
      ],
      "uses": [
        202
      ],
      "idx": 198
    },
    {
      "path": "../packages/core/src/app/bind/LinkStub.js",
      "requires": [
        198
      ],
      "uses": [],
      "idx": 199
    },
    {
      "path": "../packages/core/src/app/bind/RootStub.js",
      "requires": [
        197,
        198,
        199
      ],
      "uses": [],
      "idx": 200
    },
    {
      "path": "../packages/core/src/app/bind/Multi.js",
      "requires": [
        195
      ],
      "uses": [],
      "idx": 201
    },
    {
      "path": "../packages/core/src/app/bind/Formula.js",
      "requires": [
        22,
        194
      ],
      "uses": [],
      "idx": 202
    },
    {
      "path": "../packages/core/src/util/Fly.js",
      "requires": [],
      "uses": [],
      "idx": 203
    },
    {
      "path": "../packages/core/src/parse/Tokenizer.js",
      "requires": [
        203
      ],
      "uses": [],
      "idx": 204
    },
    {
      "path": "../packages/core/src/parse/Symbol.js",
      "requires": [],
      "uses": [],
      "idx": 205
    },
    {
      "path": "../packages/core/src/parse/symbol/Constant.js",
      "requires": [
        205
      ],
      "uses": [],
      "idx": 206
    },
    {
      "path": "../packages/core/src/parse/symbol/Infix.js",
      "requires": [
        205
      ],
      "uses": [],
      "idx": 207
    },
    {
      "path": "../packages/core/src/parse/symbol/InfixRight.js",
      "requires": [
        207
      ],
      "uses": [],
      "idx": 208
    },
    {
      "path": "../packages/core/src/parse/symbol/Paren.js",
      "requires": [
        205
      ],
      "uses": [],
      "idx": 209
    },
    {
      "path": "../packages/core/src/parse/symbol/Prefix.js",
      "requires": [
        205
      ],
      "uses": [],
      "idx": 210
    },
    {
      "path": "../packages/core/src/parse/Parser.js",
      "requires": [
        203,
        204,
        206,
        208,
        209,
        210
      ],
      "uses": [
        205,
        207
      ],
      "idx": 211
    },
    {
      "path": "../packages/core/src/app/bind/Parser.js",
      "requires": [
        90,
        211
      ],
      "uses": [],
      "idx": 212
    },
    {
      "path": "../packages/core/src/app/bind/Template.js",
      "requires": [
        90,
        212
      ],
      "uses": [],
      "idx": 213
    },
    {
      "path": "../packages/core/src/app/bind/TemplateBinding.js",
      "requires": [
        195,
        201,
        213
      ],
      "uses": [],
      "idx": 214
    },
    {
      "path": "../packages/core/src/data/ChainedStore.js",
      "requires": [
        137,
        165
      ],
      "uses": [
        91,
        176
      ],
      "idx": 215
    },
    {
      "path": "../packages/core/src/app/ViewModel.js",
      "requires": [
        3,
        12,
        184,
        193,
        199,
        200,
        201,
        202,
        214,
        215
      ],
      "uses": [
        1,
        136
      ],
      "idx": 216
    },
    {
      "path": "../packages/core/src/app/domain/Controller.js",
      "requires": [
        95,
        178
      ],
      "uses": [
        122
      ],
      "idx": 217
    },
    {
      "path": "../packages/core/src/direct/Manager.js",
      "requires": [
        4,
        54
      ],
      "uses": [
        91
      ],
      "idx": 218
    },
    {
      "path": "../packages/core/src/direct/Provider.js",
      "requires": [
        4,
        218
      ],
      "uses": [
        18
      ],
      "idx": 219
    },
    {
      "path": "../packages/core/src/app/domain/Direct.js",
      "requires": [
        95,
        219
      ],
      "uses": [],
      "idx": 220
    },
    {
      "path": "../packages/core/src/data/PageMap.js",
      "requires": [
        22
      ],
      "uses": [],
      "idx": 221
    },
    {
      "path": "../packages/core/src/data/BufferedStore.js",
      "requires": [
        49,
        52,
        125,
        162,
        221
      ],
      "uses": [
        170,
        171,
        172
      ],
      "idx": 222
    },
    {
      "path": "../packages/core/src/data/proxy/Direct.js",
      "requires": [
        166,
        218
      ],
      "uses": [],
      "idx": 223
    },
    {
      "path": "../packages/core/src/data/DirectStore.js",
      "requires": [
        173,
        223
      ],
      "uses": [],
      "idx": 224
    },
    {
      "path": "../packages/core/src/data/JsonP.js",
      "requires": [],
      "uses": [
        75
      ],
      "idx": 225
    },
    {
      "path": "../packages/core/src/data/proxy/JsonP.js",
      "requires": [
        166,
        225
      ],
      "uses": [],
      "idx": 226
    },
    {
      "path": "../packages/core/src/data/JsonPStore.js",
      "requires": [
        168,
        173,
        226
      ],
      "uses": [],
      "idx": 227
    },
    {
      "path": "../packages/core/src/data/JsonStore.js",
      "requires": [
        167,
        168,
        169,
        173
      ],
      "uses": [],
      "idx": 228
    },
    {
      "path": "../packages/core/src/data/ModelManager.js",
      "requires": [
        136
      ],
      "uses": [
        155
      ],
      "idx": 229
    },
    {
      "path": "../packages/core/src/data/NodeInterface.js",
      "requires": [
        4,
        148,
        150,
        152,
        169
      ],
      "uses": [
        136
      ],
      "idx": 230
    },
    {
      "path": "../packages/core/src/mixin/Queryable.js",
      "requires": [],
      "uses": [
        23
      ],
      "idx": 231
    },
    {
      "path": "../packages/core/src/data/TreeModel.js",
      "requires": [
        155,
        230,
        231
      ],
      "uses": [],
      "idx": 232
    },
    {
      "path": "../packages/core/src/data/NodeStore.js",
      "requires": [
        173,
        230,
        232
      ],
      "uses": [
        155
      ],
      "idx": 233
    },
    {
      "path": "../packages/core/src/data/Request.js",
      "requires": [],
      "uses": [],
      "idx": 234
    },
    {
      "path": "../packages/core/src/data/TreeStore.js",
      "requires": [
        52,
        173,
        230,
        232
      ],
      "uses": [
        155
      ],
      "idx": 235
    },
    {
      "path": "../packages/core/src/data/Types.js",
      "requires": [
        145
      ],
      "uses": [],
      "idx": 236
    },
    {
      "path": "../packages/core/src/data/Validation.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 237
    },
    {
      "path": "../packages/core/src/dom/Helper.js",
      "requires": [],
      "uses": [
        91
      ],
      "idx": 238
    },
    {
      "path": "../packages/core/src/dom/Query.js",
      "requires": [
        21,
        238
      ],
      "uses": [
        22
      ],
      "idx": 239
    },
    {
      "path": "../packages/core/src/data/reader/Xml.js",
      "requires": [
        157,
        239
      ],
      "uses": [],
      "idx": 240
    },
    {
      "path": "../packages/core/src/data/writer/Xml.js",
      "requires": [
        158
      ],
      "uses": [],
      "idx": 241
    },
    {
      "path": "../packages/core/src/data/XmlStore.js",
      "requires": [
        167,
        173,
        240,
        241
      ],
      "uses": [],
      "idx": 242
    },
    {
      "path": "../packages/core/src/data/identifier/Negative.js",
      "requires": [
        154
      ],
      "uses": [],
      "idx": 243
    },
    {
      "path": "../packages/core/src/data/identifier/Uuid.js",
      "requires": [
        153
      ],
      "uses": [],
      "idx": 244
    },
    {
      "path": "../packages/core/src/data/proxy/WebStorage.js",
      "requires": [
        154,
        160
      ],
      "uses": [
        52,
        91,
        156
      ],
      "idx": 245
    },
    {
      "path": "../packages/core/src/data/proxy/LocalStorage.js",
      "requires": [
        245
      ],
      "uses": [],
      "idx": 246
    },
    {
      "path": "../packages/core/src/data/proxy/Rest.js",
      "requires": [
        167
      ],
      "uses": [],
      "idx": 247
    },
    {
      "path": "../packages/core/src/data/proxy/SessionStorage.js",
      "requires": [
        245
      ],
      "uses": [],
      "idx": 248
    },
    {
      "path": "../packages/core/src/data/schema/BelongsTo.js",
      "requires": [],
      "uses": [],
      "idx": 249
    },
    {
      "path": "../packages/core/src/data/schema/HasMany.js",
      "requires": [],
      "uses": [],
      "idx": 250
    },
    {
      "path": "../packages/core/src/data/schema/HasOne.js",
      "requires": [],
      "uses": [],
      "idx": 251
    },
    {
      "path": "../packages/core/src/data/schema/Reference.js",
      "requires": [],
      "uses": [],
      "idx": 252
    },
    {
      "path": "../packages/core/src/data/summary/Base.js",
      "requires": [
        12
      ],
      "uses": [],
      "idx": 253
    },
    {
      "path": "../packages/core/src/data/summary/Sum.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 254
    },
    {
      "path": "../packages/core/src/data/summary/Average.js",
      "requires": [
        254
      ],
      "uses": [],
      "idx": 255
    },
    {
      "path": "../packages/core/src/data/summary/Count.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 256
    },
    {
      "path": "../packages/core/src/data/summary/Max.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 257
    },
    {
      "path": "../packages/core/src/data/summary/Min.js",
      "requires": [
        253
      ],
      "uses": [],
      "idx": 258
    },
    {
      "path": "../packages/core/src/data/validator/AbstractDate.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 259
    },
    {
      "path": "../packages/core/src/data/validator/Bound.js",
      "requires": [
        146
      ],
      "uses": [
        91
      ],
      "idx": 260
    },
    {
      "path": "../packages/core/src/data/validator/Format.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 261
    },
    {
      "path": "../packages/core/src/data/validator/CIDRv4.js",
      "requires": [
        261
      ],
      "uses": [],
      "idx": 262
    },
    {
      "path": "../packages/core/src/data/validator/CIDRv6.js",
      "requires": [
        261
      ],
      "uses": [],
      "idx": 263
    },
    {
      "path": "../packages/core/src/data/validator/Number.js",
      "requires": [
        146
      ],
      "uses": [
        90
      ],
      "idx": 264
    },
    {
      "path": "../packages/core/src/data/validator/Currency.js",
      "requires": [
        264
      ],
      "uses": [
        90
      ],
      "idx": 265
    },
    {
      "path": "../packages/core/src/data/validator/CurrencyUS.js",
      "requires": [
        265
      ],
      "uses": [],
      "idx": 266
    },
    {
      "path": "../packages/core/src/data/validator/Date.js",
      "requires": [
        259
      ],
      "uses": [],
      "idx": 267
    },
    {
      "path": "../packages/core/src/data/validator/DateTime.js",
      "requires": [
        259
      ],
      "uses": [],
      "idx": 268
    },
    {
      "path": "../packages/core/src/data/validator/Email.js",
      "requires": [
        261
      ],
      "uses": [],
      "idx": 269
    },
    {
      "path": "../packages/core/src/data/validator/List.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 270
    },
    {
      "path": "../packages/core/src/data/validator/Exclusion.js",
      "requires": [
        270
      ],
      "uses": [],
      "idx": 271
    },
    {
      "path": "../packages/core/src/data/validator/IPAddress.js",
      "requires": [
        261
      ],
      "uses": [],
      "idx": 272
    },
    {
      "path": "../packages/core/src/data/validator/Inclusion.js",
      "requires": [
        270
      ],
      "uses": [],
      "idx": 273
    },
    {
      "path": "../packages/core/src/data/validator/Length.js",
      "requires": [
        260
      ],
      "uses": [],
      "idx": 274
    },
    {
      "path": "../packages/core/src/data/validator/Presence.js",
      "requires": [
        146
      ],
      "uses": [],
      "idx": 275
    },
    {
      "path": "../packages/core/src/data/validator/NotNull.js",
      "requires": [
        275
      ],
      "uses": [],
      "idx": 276
    },
    {
      "path": "../packages/core/src/data/validator/Phone.js",
      "requires": [
        261
      ],
      "uses": [],
      "idx": 277
    },
    {
      "path": "../packages/core/src/data/validator/Range.js",
      "requires": [
        260
      ],
      "uses": [],
      "idx": 278
    },
    {
      "path": "../packages/core/src/data/validator/Time.js",
      "requires": [
        259
      ],
      "uses": [],
      "idx": 279
    },
    {
      "path": "../packages/core/src/data/validator/Url.js",
      "requires": [
        261
      ],
      "uses": [],
      "idx": 280
    },
    {
      "path": "../packages/core/src/data/virtual/Group.js",
      "requires": [],
      "uses": [],
      "idx": 281
    },
    {
      "path": "../packages/core/src/data/virtual/Page.js",
      "requires": [],
      "uses": [],
      "idx": 282
    },
    {
      "path": "../packages/core/src/data/virtual/PageMap.js",
      "requires": [
        282
      ],
      "uses": [],
      "idx": 283
    },
    {
      "path": "../packages/core/src/data/virtual/Range.js",
      "requires": [
        127
      ],
      "uses": [],
      "idx": 284
    },
    {
      "path": "../packages/core/src/data/virtual/Store.js",
      "requires": [
        162,
        170,
        171,
        283,
        284
      ],
      "uses": [
        125,
        126,
        281
      ],
      "idx": 285
    },
    {
      "path": "../packages/core/src/direct/Event.js",
      "requires": [],
      "uses": [],
      "idx": 286
    },
    {
      "path": "../packages/core/src/direct/RemotingEvent.js",
      "requires": [
        286
      ],
      "uses": [
        218
      ],
      "idx": 287
    },
    {
      "path": "../packages/core/src/direct/ExceptionEvent.js",
      "requires": [
        287
      ],
      "uses": [],
      "idx": 288
    },
    {
      "path": "../packages/core/src/direct/JsonProvider.js",
      "requires": [
        219
      ],
      "uses": [
        218,
        288
      ],
      "idx": 289
    },
    {
      "path": "../packages/core/src/direct/PollingProvider.js",
      "requires": [
        18,
        55,
        288,
        289
      ],
      "uses": [
        218,
        387
      ],
      "idx": 290
    },
    {
      "path": "../packages/core/src/direct/RemotingMethod.js",
      "requires": [],
      "uses": [],
      "idx": 291
    },
    {
      "path": "../packages/core/src/direct/Transaction.js",
      "requires": [],
      "uses": [],
      "idx": 292
    },
    {
      "path": "../packages/core/src/direct/RemotingProvider.js",
      "requires": [
        1,
        54,
        218,
        289,
        291,
        292
      ],
      "uses": [
        77,
        288
      ],
      "idx": 293
    },
    {
      "path": "../packages/core/src/dom/GarbageCollector.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 294
    },
    {
      "path": "../packages/core/src/dom/TouchAction.js",
      "requires": [
        34,
        48
      ],
      "uses": [],
      "idx": 295
    },
    {
      "path": "../packages/core/src/drag/Constraint.js",
      "requires": [
        12
      ],
      "uses": [
        33
      ],
      "idx": 296
    },
    {
      "path": "../packages/core/src/drag/Info.js",
      "requires": [
        10
      ],
      "uses": [],
      "idx": 297
    },
    {
      "path": "../packages/core/src/drag/Item.js",
      "requires": [
        3,
        4
      ],
      "uses": [],
      "idx": 298
    },
    {
      "path": "../packages/core/src/drag/Manager.js",
      "requires": [],
      "uses": [
        48,
        79,
        297
      ],
      "idx": 299
    },
    {
      "path": "../packages/core/src/drag/Source.js",
      "requires": [
        75,
        296,
        298
      ],
      "uses": [
        12,
        297
      ],
      "idx": 300
    },
    {
      "path": "../packages/core/src/drag/Target.js",
      "requires": [
        298,
        299
      ],
      "uses": [],
      "idx": 301
    },
    {
      "path": "../packages/core/src/drag/proxy/None.js",
      "requires": [
        12
      ],
      "uses": [],
      "idx": 302
    },
    {
      "path": "../packages/core/src/drag/proxy/Original.js",
      "requires": [
        302
      ],
      "uses": [],
      "idx": 303
    },
    {
      "path": "../packages/core/src/drag/proxy/Placeholder.js",
      "requires": [
        302
      ],
      "uses": [],
      "idx": 304
    },
    {
      "path": "../packages/core/src/event/gesture/Recognizer.js",
      "requires": [
        3,
        37
      ],
      "uses": [],
      "idx": 305
    },
    {
      "path": "../packages/core/src/event/gesture/SingleTouch.js",
      "requires": [
        305
      ],
      "uses": [],
      "idx": 306
    },
    {
      "path": "../packages/core/src/event/gesture/DoubleTap.js",
      "requires": [
        306
      ],
      "uses": [
        48
      ],
      "idx": 307
    },
    {
      "path": "../packages/core/src/event/gesture/Drag.js",
      "requires": [
        306
      ],
      "uses": [
        48
      ],
      "idx": 308
    },
    {
      "path": "../packages/core/src/event/gesture/Swipe.js",
      "requires": [
        306
      ],
      "uses": [],
      "idx": 309
    },
    {
      "path": "../packages/core/src/event/gesture/EdgeSwipe.js",
      "requires": [
        309
      ],
      "uses": [
        48
      ],
      "idx": 310
    },
    {
      "path": "../packages/core/src/event/gesture/LongPress.js",
      "requires": [
        306
      ],
      "uses": [
        37,
        48,
        308
      ],
      "idx": 311
    },
    {
      "path": "../packages/core/src/event/gesture/MultiTouch.js",
      "requires": [
        305
      ],
      "uses": [],
      "idx": 312
    },
    {
      "path": "../packages/core/src/event/gesture/Pinch.js",
      "requires": [
        312
      ],
      "uses": [],
      "idx": 313
    },
    {
      "path": "../packages/core/src/event/gesture/Rotate.js",
      "requires": [
        312
      ],
      "uses": [],
      "idx": 314
    },
    {
      "path": "../packages/core/src/event/gesture/Tap.js",
      "requires": [
        306
      ],
      "uses": [
        48
      ],
      "idx": 315
    },
    {
      "path": "../packages/core/src/event/publisher/Focus.js",
      "requires": [
        36,
        48,
        73,
        75
      ],
      "uses": [
        35
      ],
      "idx": 316
    },
    {
      "path": "../packages/core/src/field/InputMask.js",
      "requires": [],
      "uses": [],
      "idx": 317
    },
    {
      "path": "../packages/core/src/fx/State.js",
      "requires": [],
      "uses": [],
      "idx": 318
    },
    {
      "path": "../packages/core/src/fx/animation/Abstract.js",
      "requires": [
        24,
        318
      ],
      "uses": [],
      "idx": 319
    },
    {
      "path": "../packages/core/src/fx/animation/Slide.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 320
    },
    {
      "path": "../packages/core/src/fx/animation/SlideOut.js",
      "requires": [
        320
      ],
      "uses": [],
      "idx": 321
    },
    {
      "path": "../packages/core/src/fx/animation/Fade.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 322
    },
    {
      "path": "../packages/core/src/fx/animation/FadeOut.js",
      "requires": [
        322
      ],
      "uses": [],
      "idx": 323
    },
    {
      "path": "../packages/core/src/fx/animation/Flip.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 324
    },
    {
      "path": "../packages/core/src/fx/animation/Pop.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 325
    },
    {
      "path": "../packages/core/src/fx/animation/PopOut.js",
      "requires": [
        325
      ],
      "uses": [],
      "idx": 326
    },
    {
      "path": "../packages/core/src/fx/Animation.js",
      "requires": [
        320,
        321,
        322,
        323,
        324,
        325,
        326
      ],
      "uses": [
        319
      ],
      "idx": 327
    },
    {
      "path": "../packages/core/src/fx/runner/Css.js",
      "requires": [
        24,
        327
      ],
      "uses": [
        48
      ],
      "idx": 328
    },
    {
      "path": "../packages/core/src/fx/runner/CssTransition.js",
      "requires": [
        19,
        328
      ],
      "uses": [
        327
      ],
      "idx": 329
    },
    {
      "path": "../packages/core/src/fx/Runner.js",
      "requires": [
        329
      ],
      "uses": [],
      "idx": 330
    },
    {
      "path": "../packages/core/src/fx/animation/Cube.js",
      "requires": [
        319
      ],
      "uses": [],
      "idx": 331
    },
    {
      "path": "../packages/core/src/fx/animation/Wipe.js",
      "requires": [
        327
      ],
      "uses": [],
      "idx": 332
    },
    {
      "path": "../packages/core/src/fx/animation/WipeOut.js",
      "requires": [
        332
      ],
      "uses": [],
      "idx": 333
    },
    {
      "path": "../packages/core/src/fx/easing/Bounce.js",
      "requires": [
        101
      ],
      "uses": [],
      "idx": 334
    },
    {
      "path": "../packages/core/src/fx/easing/Momentum.js",
      "requires": [
        101
      ],
      "uses": [],
      "idx": 335
    },
    {
      "path": "../packages/core/src/fx/easing/BoundMomentum.js",
      "requires": [
        101,
        334,
        335
      ],
      "uses": [],
      "idx": 336
    },
    {
      "path": "../packages/core/src/fx/easing/EaseIn.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 337
    },
    {
      "path": "../packages/core/src/fx/easing/EaseOut.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 338
    },
    {
      "path": "../packages/core/src/fx/easing/Easing.js",
      "requires": [
        102
      ],
      "uses": [],
      "idx": 339
    },
    {
      "path": "../packages/core/src/fx/runner/CssAnimation.js",
      "requires": [
        328
      ],
      "uses": [
        327
      ],
      "idx": 340
    },
    {
      "path": "../packages/core/src/list/AbstractTreeItem.js",
      "requires": [
        87
      ],
      "uses": [],
      "idx": 341
    },
    {
      "path": "../packages/core/src/list/RootTreeItem.js",
      "requires": [
        341
      ],
      "uses": [],
      "idx": 342
    },
    {
      "path": "../packages/core/src/mixin/ItemRippler.js",
      "requires": [],
      "uses": [],
      "idx": 343
    },
    {
      "path": "../packages/core/src/list/TreeItem.js",
      "requires": [
        87,
        341
      ],
      "uses": [],
      "idx": 344
    },
    {
      "path": "../packages/core/src/list/Tree.js",
      "requires": [
        87,
        342,
        343,
        344
      ],
      "uses": [
        155,
        176
      ],
      "idx": 345
    },
    {
      "path": "../packages/core/src/mixin/Bufferable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 346
    },
    {
      "path": "../packages/core/src/mixin/ConfigProxy.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 347
    },
    {
      "path": "../packages/core/src/mixin/ConfigState.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 348
    },
    {
      "path": "../packages/core/src/mixin/Container.js",
      "requires": [
        0
      ],
      "uses": [
        20
      ],
      "idx": 349
    },
    {
      "path": "../packages/core/src/util/KeyMap.js",
      "requires": [],
      "uses": [],
      "idx": 350
    },
    {
      "path": "../packages/core/src/util/KeyNav.js",
      "requires": [
        350
      ],
      "uses": [
        35
      ],
      "idx": 351
    },
    {
      "path": "../packages/core/src/mixin/FocusableContainer.js",
      "requires": [
        0,
        351
      ],
      "uses": [
        20
      ],
      "idx": 352
    },
    {
      "path": "../packages/core/src/mixin/Hookable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 353
    },
    {
      "path": "../packages/core/src/mixin/Mashup.js",
      "requires": [
        0
      ],
      "uses": [
        91
      ],
      "idx": 354
    },
    {
      "path": "../packages/core/src/mixin/Responsive.js",
      "requires": [
        0,
        75
      ],
      "uses": [
        48
      ],
      "idx": 355
    },
    {
      "path": "../packages/core/src/mixin/Selectable.js",
      "requires": [
        0
      ],
      "uses": [
        126
      ],
      "idx": 356
    },
    {
      "path": "../packages/core/src/mixin/StoreWatcher.js",
      "requires": [],
      "uses": [],
      "idx": 357
    },
    {
      "path": "../packages/core/src/mixin/StyleCacher.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 358
    },
    {
      "path": "../packages/core/src/mixin/Traversable.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 359
    },
    {
      "path": "../packages/core/src/perf/Accumulator.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 360
    },
    {
      "path": "../packages/core/src/perf/Monitor.js",
      "requires": [
        360
      ],
      "uses": [],
      "idx": 361
    },
    {
      "path": "../packages/core/src/plugin/MouseEnter.js",
      "requires": [
        82
      ],
      "uses": [],
      "idx": 362
    },
    {
      "path": "../packages/core/src/sparkline/Shape.js",
      "requires": [],
      "uses": [],
      "idx": 363
    },
    {
      "path": "../packages/core/src/sparkline/CanvasBase.js",
      "requires": [
        363
      ],
      "uses": [],
      "idx": 364
    },
    {
      "path": "../packages/core/src/sparkline/CanvasCanvas.js",
      "requires": [
        364
      ],
      "uses": [],
      "idx": 365
    },
    {
      "path": "../packages/core/src/sparkline/VmlCanvas.js",
      "requires": [
        364
      ],
      "uses": [],
      "idx": 366
    },
    {
      "path": "../packages/core/src/util/Color.js",
      "requires": [],
      "uses": [],
      "idx": 367
    },
    {
      "path": "../packages/core/src/sparkline/Base.js",
      "requires": [
        87,
        94,
        365,
        366,
        367
      ],
      "uses": [],
      "idx": 368
    },
    {
      "path": "../packages/core/src/sparkline/BarBase.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 369
    },
    {
      "path": "../packages/core/src/sparkline/RangeMap.js",
      "requires": [],
      "uses": [],
      "idx": 370
    },
    {
      "path": "../packages/core/src/sparkline/Bar.js",
      "requires": [
        369,
        370
      ],
      "uses": [],
      "idx": 371
    },
    {
      "path": "../packages/core/src/sparkline/Box.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 372
    },
    {
      "path": "../packages/core/src/sparkline/Bullet.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 373
    },
    {
      "path": "../packages/core/src/sparkline/Discrete.js",
      "requires": [
        369
      ],
      "uses": [],
      "idx": 374
    },
    {
      "path": "../packages/core/src/sparkline/Line.js",
      "requires": [
        368,
        370
      ],
      "uses": [],
      "idx": 375
    },
    {
      "path": "../packages/core/src/sparkline/Pie.js",
      "requires": [
        368
      ],
      "uses": [],
      "idx": 376
    },
    {
      "path": "../packages/core/src/sparkline/TriState.js",
      "requires": [
        369,
        370
      ],
      "uses": [],
      "idx": 377
    },
    {
      "path": "../packages/core/src/util/Base64.js",
      "requires": [],
      "uses": [],
      "idx": 378
    },
    {
      "path": "../packages/core/src/util/DelimitedValue.js",
      "requires": [],
      "uses": [],
      "idx": 379
    },
    {
      "path": "../packages/core/src/util/CSV.js",
      "requires": [
        379
      ],
      "uses": [],
      "idx": 380
    },
    {
      "path": "../packages/core/src/util/ClickRepeater.js",
      "requires": [
        4
      ],
      "uses": [],
      "idx": 381
    },
    {
      "path": "../packages/core/src/util/Cookies.js",
      "requires": [],
      "uses": [],
      "idx": 382
    },
    {
      "path": "../packages/core/src/util/ItemCollection.js",
      "requires": [
        54
      ],
      "uses": [],
      "idx": 383
    },
    {
      "path": "../packages/core/src/util/LocalStorage.js",
      "requires": [],
      "uses": [],
      "idx": 384
    },
    {
      "path": "../packages/core/src/util/Spans.js",
      "requires": [],
      "uses": [],
      "idx": 385
    },
    {
      "path": "../packages/core/src/util/TSV.js",
      "requires": [
        379
      ],
      "uses": [],
      "idx": 386
    },
    {
      "path": "../packages/core/src/util/TaskManager.js",
      "requires": [
        55
      ],
      "uses": [],
      "idx": 387
    },
    {
      "path": "../packages/core/src/util/TextMetrics.js",
      "requires": [
        48
      ],
      "uses": [],
      "idx": 388
    },
    {
      "path": "../packages/core/src/util/paintmonitor/OverflowChange.js",
      "requires": [
        44
      ],
      "uses": [],
      "idx": 389
    },
    {
      "path": "../packages/core/src/util/sizemonitor/OverflowChange.js",
      "requires": [
        40
      ],
      "uses": [
        39
      ],
      "idx": 390
    },
    {
      "path": "../packages/core/src/util/translatable/CssPosition.js",
      "requires": [
        104
      ],
      "uses": [],
      "idx": 391
    },
    {
      "path": "../packages/core/src/util/translatable/CssTransform.js",
      "requires": [
        104
      ],
      "uses": [],
      "idx": 392
    },
    {
      "path": "../packages/core/src/util/translatable/ScrollParent.js",
      "requires": [
        104
      ],
      "uses": [],
      "idx": 393
    },
    {
      "path": "../classic/classic/src/Action.js",
      "requires": [],
      "uses": [],
      "idx": 394
    },
    {
      "path": "../classic/classic/src/ElementLoader.js",
      "requires": [
        50
      ],
      "uses": [
        17,
        18
      ],
      "idx": 395
    },
    {
      "path": "../classic/classic/src/ComponentLoader.js",
      "requires": [
        395
      ],
      "uses": [],
      "idx": 396
    },
    {
      "path": "../classic/classic/src/layout/SizeModel.js",
      "requires": [],
      "uses": [],
      "idx": 397
    },
    {
      "path": "../classic/classic/src/layout/Layout.js",
      "requires": [
        12,
        94,
        397
      ],
      "uses": [
        624
      ],
      "idx": 398
    },
    {
      "path": "../classic/classic/src/layout/container/Container.js",
      "requires": [
        94,
        108,
        398
      ],
      "uses": [
        238
      ],
      "idx": 399
    },
    {
      "path": "../classic/classic/src/layout/container/Auto.js",
      "requires": [
        399
      ],
      "uses": [
        94
      ],
      "idx": 400
    },
    {
      "path": "../classic/classic/src/ZIndexManager.js",
      "requires": [
        75,
        170,
        171
      ],
      "uses": [
        48,
        126
      ],
      "idx": 401
    },
    {
      "path": "../classic/classic/src/container/Container.js",
      "requires": [
        54,
        113,
        231,
        349,
        352,
        383,
        394,
        400,
        401
      ],
      "uses": [
        12,
        20,
        23,
        48
      ],
      "idx": 402
    },
    {
      "path": "../classic/classic/src/layout/container/Editor.js",
      "requires": [
        399
      ],
      "uses": [],
      "idx": 403
    },
    {
      "path": "../classic/classic/src/Editor.js",
      "requires": [
        402,
        403
      ],
      "uses": [
        1,
        20
      ],
      "idx": 404
    },
    {
      "path": "../classic/classic/src/EventManager.js",
      "requires": [],
      "uses": [
        75
      ],
      "idx": 405
    },
    {
      "path": "../classic/classic/src/Gadget.js",
      "requires": [],
      "uses": [],
      "idx": 406
    },
    {
      "path": "../classic/classic/src/Img.js",
      "requires": [
        76,
        113
      ],
      "uses": [],
      "idx": 407
    },
    {
      "path": "../classic/classic/src/util/StoreHolder.js",
      "requires": [
        176
      ],
      "uses": [],
      "idx": 408
    },
    {
      "path": "../classic/classic/src/LoadMask.js",
      "requires": [
        113,
        408
      ],
      "uses": [
        48,
        75,
        176
      ],
      "idx": 409
    },
    {
      "path": "../classic/classic/src/layout/component/Component.js",
      "requires": [
        398
      ],
      "uses": [],
      "idx": 410
    },
    {
      "path": "../classic/classic/src/layout/component/Auto.js",
      "requires": [
        410
      ],
      "uses": [],
      "idx": 411
    },
    {
      "path": "../classic/classic/src/layout/component/ProgressBar.js",
      "requires": [
        411
      ],
      "uses": [],
      "idx": 412
    },
    {
      "path": "../classic/classic/src/ProgressBar.js",
      "requires": [
        88,
        91,
        98,
        113,
        387,
        412
      ],
      "uses": [
        71
      ],
      "idx": 413
    },
    {
      "path": "../classic/classic/src/dom/ButtonElement.js",
      "requires": [
        48
      ],
      "uses": [],
      "idx": 414
    },
    {
      "path": "../classic/classic/src/button/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 415
    },
    {
      "path": "../classic/classic/src/menu/Manager.js",
      "requires": [],
      "uses": [
        20,
        106,
        113,
        587
      ],
      "idx": 416
    },
    {
      "path": "../classic/classic/src/button/Button.js",
      "requires": [
        76,
        113,
        231,
        381,
        388,
        414,
        415,
        416
      ],
      "uses": [
        531
      ],
      "idx": 417
    },
    {
      "path": "../classic/classic/src/button/Split.js",
      "requires": [
        417
      ],
      "uses": [
        48
      ],
      "idx": 418
    },
    {
      "path": "../classic/classic/src/button/Cycle.js",
      "requires": [
        418
      ],
      "uses": [],
      "idx": 419
    },
    {
      "path": "../classic/classic/src/layout/container/SegmentedButton.js",
      "requires": [
        399
      ],
      "uses": [],
      "idx": 420
    },
    {
      "path": "../classic/classic/src/button/Segmented.js",
      "requires": [
        402,
        417,
        420
      ],
      "uses": [],
      "idx": 421
    },
    {
      "path": "../classic/classic/src/panel/Bar.js",
      "requires": [
        402
      ],
      "uses": [],
      "idx": 422
    },
    {
      "path": "../classic/classic/src/panel/Title.js",
      "requires": [
        76,
        113
      ],
      "uses": [],
      "idx": 423
    },
    {
      "path": "../classic/classic/src/panel/Tool.js",
      "requires": [
        76,
        113
      ],
      "uses": [
        531
      ],
      "idx": 424
    },
    {
      "path": "../classic/classic/src/panel/Header.js",
      "requires": [
        411,
        422,
        423,
        424
      ],
      "uses": [
        20
      ],
      "idx": 425
    },
    {
      "path": "../classic/classic/src/layout/container/boxOverflow/None.js",
      "requires": [
        12
      ],
      "uses": [],
      "idx": 426
    },
    {
      "path": "../classic/classic/src/layout/container/boxOverflow/Scroller.js",
      "requires": [
        4,
        48,
        381,
        426
      ],
      "uses": [],
      "idx": 427
    },
    {
      "path": "../classic/classic/src/dd/DragDropManager.js",
      "requires": [
        33,
        34
      ],
      "uses": [
        48,
        460,
        531
      ],
      "idx": 428
    },
    {
      "path": "../classic/classic/src/resizer/Splitter.js",
      "requires": [
        94,
        113
      ],
      "uses": [
        456
      ],
      "idx": 429
    },
    {
      "path": "../classic/classic/src/layout/container/Box.js",
      "requires": [
        90,
        399,
        426,
        427,
        428,
        429
      ],
      "uses": [
        12,
        397,
        411
      ],
      "idx": 430
    },
    {
      "path": "../classic/classic/src/layout/container/HBox.js",
      "requires": [
        430
      ],
      "uses": [],
      "idx": 431
    },
    {
      "path": "../classic/classic/src/layout/container/VBox.js",
      "requires": [
        430
      ],
      "uses": [],
      "idx": 432
    },
    {
      "path": "../classic/classic/src/toolbar/Toolbar.js",
      "requires": [
        402,
        411,
        431,
        432
      ],
      "uses": [
        113,
        362,
        513,
        534,
        659,
        660
      ],
      "idx": 433
    },
    {
      "path": "../classic/classic/src/dd/DragDrop.js",
      "requires": [
        428
      ],
      "uses": [
        48
      ],
      "idx": 434
    },
    {
      "path": "../classic/classic/src/dd/DD.js",
      "requires": [
        428,
        434
      ],
      "uses": [
        48
      ],
      "idx": 435
    },
    {
      "path": "../classic/classic/src/dd/DDProxy.js",
      "requires": [
        435
      ],
      "uses": [
        428
      ],
      "idx": 436
    },
    {
      "path": "../classic/classic/src/dd/StatusProxy.js",
      "requires": [
        113
      ],
      "uses": [],
      "idx": 437
    },
    {
      "path": "../classic/classic/src/dd/DragSource.js",
      "requires": [
        428,
        436,
        437
      ],
      "uses": [
        411
      ],
      "idx": 438
    },
    {
      "path": "../classic/classic/src/panel/Proxy.js",
      "requires": [],
      "uses": [
        48
      ],
      "idx": 439
    },
    {
      "path": "../classic/classic/src/panel/DD.js",
      "requires": [
        438,
        439
      ],
      "uses": [],
      "idx": 440
    },
    {
      "path": "../classic/classic/src/layout/component/Dock.js",
      "requires": [
        410
      ],
      "uses": [
        23,
        48,
        397
      ],
      "idx": 441
    },
    {
      "path": "../classic/classic/src/util/Memento.js",
      "requires": [],
      "uses": [],
      "idx": 442
    },
    {
      "path": "../classic/classic/src/container/DockingContainer.js",
      "requires": [
        48,
        54
      ],
      "uses": [
        23,
        238,
        383
      ],
      "idx": 443
    },
    {
      "path": "../classic/classic/src/panel/Panel.js",
      "requires": [
        48,
        54,
        71,
        94,
        402,
        425,
        433,
        440,
        441,
        442,
        443
      ],
      "uses": [
        1,
        20,
        33,
        90,
        97,
        98,
        113,
        238,
        351,
        400,
        411,
        424,
        477
      ],
      "idx": 444
    },
    {
      "path": "../classic/classic/src/layout/container/Table.js",
      "requires": [
        399
      ],
      "uses": [],
      "idx": 445
    },
    {
      "path": "../classic/classic/src/container/ButtonGroup.js",
      "requires": [
        444,
        445
      ],
      "uses": [],
      "idx": 446
    },
    {
      "path": "../classic/classic/src/container/Monitor.js",
      "requires": [],
      "uses": [
        23,
        54
      ],
      "idx": 447
    },
    {
      "path": "../classic/classic/src/plugin/Responsive.js",
      "requires": [
        355
      ],
      "uses": [],
      "idx": 448
    },
    {
      "path": "../classic/classic/src/plugin/Viewport.js",
      "requires": [
        448
      ],
      "uses": [
        48,
        397
      ],
      "idx": 449
    },
    {
      "path": "../classic/classic/src/container/Viewport.js",
      "requires": [
        355,
        402,
        449
      ],
      "uses": [],
      "idx": 450
    },
    {
      "path": "../classic/classic/src/layout/container/Anchor.js",
      "requires": [
        400
      ],
      "uses": [],
      "idx": 451
    },
    {
      "path": "../classic/classic/src/dashboard/Panel.js",
      "requires": [
        444
      ],
      "uses": [
        20
      ],
      "idx": 452
    },
    {
      "path": "../classic/classic/src/dashboard/Column.js",
      "requires": [
        402,
        451,
        452
      ],
      "uses": [],
      "idx": 453
    },
    {
      "path": "../classic/classic/src/layout/container/Column.js",
      "requires": [
        400
      ],
      "uses": [],
      "idx": 454
    },
    {
      "path": "../classic/classic/src/dd/DragTracker.js",
      "requires": [
        50
      ],
      "uses": [
        33,
        113,
        351
      ],
      "idx": 455
    },
    {
      "path": "../classic/classic/src/resizer/SplitterTracker.js",
      "requires": [
        33,
        455
      ],
      "uses": [
        48,
        102
      ],
      "idx": 456
    },
    {
      "path": "../classic/classic/src/layout/container/ColumnSplitterTracker.js",
      "requires": [
        456
      ],
      "uses": [],
      "idx": 457
    },
    {
      "path": "../classic/classic/src/layout/container/ColumnSplitter.js",
      "requires": [
        429,
        457
      ],
      "uses": [],
      "idx": 458
    },
    {
      "path": "../classic/classic/src/layout/container/Dashboard.js",
      "requires": [
        454,
        458
      ],
      "uses": [
        411
      ],
      "idx": 459
    },
    {
      "path": "../classic/classic/src/dd/DDTarget.js",
      "requires": [
        434
      ],
      "uses": [],
      "idx": 460
    },
    {
      "path": "../classic/classic/src/dd/ScrollManager.js",
      "requires": [
        428
      ],
      "uses": [],
      "idx": 461
    },
    {
      "path": "../classic/classic/src/dd/DropTarget.js",
      "requires": [
        460,
        461
      ],
      "uses": [],
      "idx": 462
    },
    {
      "path": "../classic/classic/src/dashboard/DropZone.js",
      "requires": [
        462
      ],
      "uses": [],
      "idx": 463
    },
    {
      "path": "../classic/classic/src/dashboard/Part.js",
      "requires": [
        3,
        12,
        128
      ],
      "uses": [],
      "idx": 464
    },
    {
      "path": "../classic/classic/src/dashboard/Dashboard.js",
      "requires": [
        444,
        453,
        459,
        463,
        464
      ],
      "uses": [
        12,
        111,
        126
      ],
      "idx": 465
    },
    {
      "path": "../classic/classic/src/dd/DragZone.js",
      "requires": [
        438
      ],
      "uses": [
        461,
        467
      ],
      "idx": 466
    },
    {
      "path": "../classic/classic/src/dd/Registry.js",
      "requires": [],
      "uses": [],
      "idx": 467
    },
    {
      "path": "../classic/classic/src/dd/DropZone.js",
      "requires": [
        462,
        467
      ],
      "uses": [
        428
      ],
      "idx": 468
    },
    {
      "path": "../classic/classic/src/dom/Layer.js",
      "requires": [
        48
      ],
      "uses": [
        238
      ],
      "idx": 469
    },
    {
      "path": "../classic/classic/src/enums.js",
      "requires": [],
      "uses": [],
      "idx": 470
    },
    {
      "path": "../classic/classic/src/event/publisher/MouseEnterLeave.js",
      "requires": [
        36
      ],
      "uses": [],
      "idx": 471
    },
    {
      "path": "../classic/classic/src/flash/Component.js",
      "requires": [
        113
      ],
      "uses": [],
      "idx": 472
    },
    {
      "path": "../classic/classic/src/form/action/Action.js",
      "requires": [],
      "uses": [],
      "idx": 473
    },
    {
      "path": "../classic/classic/src/form/action/Load.js",
      "requires": [
        17,
        473
      ],
      "uses": [
        18
      ],
      "idx": 474
    },
    {
      "path": "../classic/classic/src/form/action/Submit.js",
      "requires": [
        473
      ],
      "uses": [
        18,
        238
      ],
      "idx": 475
    },
    {
      "path": "../classic/classic/src/form/action/StandardSubmit.js",
      "requires": [
        475
      ],
      "uses": [],
      "idx": 476
    },
    {
      "path": "../classic/classic/src/util/ComponentDragger.js",
      "requires": [
        455
      ],
      "uses": [
        33,
        48
      ],
      "idx": 477
    },
    {
      "path": "../classic/classic/src/window/Window.js",
      "requires": [
        33,
        444,
        477
      ],
      "uses": [],
      "idx": 478
    },
    {
      "path": "../classic/classic/src/form/Labelable.js",
      "requires": [
        0,
        94
      ],
      "uses": [
        48,
        530
      ],
      "idx": 479
    },
    {
      "path": "../classic/classic/src/form/field/Field.js",
      "requires": [],
      "uses": [],
      "idx": 480
    },
    {
      "path": "../classic/classic/src/form/field/Base.js",
      "requires": [
        1,
        94,
        113,
        479,
        480
      ],
      "uses": [
        91,
        238
      ],
      "idx": 481
    },
    {
      "path": "../classic/classic/src/form/field/VTypes.js",
      "requires": [],
      "uses": [],
      "idx": 482
    },
    {
      "path": "../classic/classic/src/form/trigger/Trigger.js",
      "requires": [
        12,
        381
      ],
      "uses": [
        48,
        94
      ],
      "idx": 483
    },
    {
      "path": "../classic/classic/src/form/field/Text.js",
      "requires": [
        388,
        481,
        482,
        483
      ],
      "uses": [
        90,
        91,
        98
      ],
      "idx": 484
    },
    {
      "path": "../classic/classic/src/form/field/TextArea.js",
      "requires": [
        1,
        94,
        484
      ],
      "uses": [
        90,
        388
      ],
      "idx": 485
    },
    {
      "path": "../classic/classic/src/window/MessageBox.js",
      "requires": [
        413,
        417,
        431,
        433,
        451,
        478,
        484,
        485
      ],
      "uses": [
        113,
        402,
        411,
        412
      ],
      "idx": 486
    },
    {
      "path": "../classic/classic/src/form/Basic.js",
      "requires": [
        1,
        50,
        54,
        139,
        474,
        475,
        476,
        486
      ],
      "uses": [
        447
      ],
      "idx": 487
    },
    {
      "path": "../classic/classic/src/form/FieldAncestor.js",
      "requires": [
        0,
        447
      ],
      "uses": [],
      "idx": 488
    },
    {
      "path": "../classic/classic/src/layout/component/field/FieldContainer.js",
      "requires": [
        411
      ],
      "uses": [],
      "idx": 489
    },
    {
      "path": "../classic/classic/src/form/FieldContainer.js",
      "requires": [
        402,
        479,
        488,
        489
      ],
      "uses": [],
      "idx": 490
    },
    {
      "path": "../classic/classic/src/layout/container/CheckboxGroup.js",
      "requires": [
        399
      ],
      "uses": [
        238
      ],
      "idx": 491
    },
    {
      "path": "../classic/classic/src/form/CheckboxManager.js",
      "requires": [
        54
      ],
      "uses": [],
      "idx": 492
    },
    {
      "path": "../classic/classic/src/form/field/Checkbox.js",
      "requires": [
        94,
        481,
        492
      ],
      "uses": [],
      "idx": 493
    },
    {
      "path": "../classic/classic/src/form/CheckboxGroup.js",
      "requires": [
        480,
        481,
        490,
        491,
        493
      ],
      "uses": [],
      "idx": 494
    },
    {
      "path": "../classic/classic/src/form/FieldSet.js",
      "requires": [
        402,
        488
      ],
      "uses": [
        48,
        97,
        113,
        238,
        411,
        424,
        451,
        493,
        627
      ],
      "idx": 495
    },
    {
      "path": "../classic/classic/src/form/Label.js",
      "requires": [
        90,
        113
      ],
      "uses": [],
      "idx": 496
    },
    {
      "path": "../classic/classic/src/form/Panel.js",
      "requires": [
        55,
        444,
        487,
        488
      ],
      "uses": [
        387
      ],
      "idx": 497
    },
    {
      "path": "../classic/classic/src/form/RadioManager.js",
      "requires": [
        54
      ],
      "uses": [],
      "idx": 498
    },
    {
      "path": "../classic/classic/src/form/field/Radio.js",
      "requires": [
        493,
        498
      ],
      "uses": [],
      "idx": 499
    },
    {
      "path": "../classic/classic/src/form/RadioGroup.js",
      "requires": [
        494,
        499
      ],
      "uses": [
        498
      ],
      "idx": 500
    },
    {
      "path": "../classic/classic/src/form/action/DirectAction.js",
      "requires": [
        0
      ],
      "uses": [
        218
      ],
      "idx": 501
    },
    {
      "path": "../classic/classic/src/form/action/DirectLoad.js",
      "requires": [
        218,
        474,
        501
      ],
      "uses": [],
      "idx": 502
    },
    {
      "path": "../classic/classic/src/form/action/DirectSubmit.js",
      "requires": [
        218,
        475,
        501
      ],
      "uses": [],
      "idx": 503
    },
    {
      "path": "../classic/classic/src/form/field/Picker.js",
      "requires": [
        351,
        484
      ],
      "uses": [],
      "idx": 504
    },
    {
      "path": "../classic/classic/src/selection/Model.js",
      "requires": [
        4,
        12,
        183,
        408
      ],
      "uses": [],
      "idx": 505
    },
    {
      "path": "../classic/classic/src/selection/DataViewModel.js",
      "requires": [
        351,
        505
      ],
      "uses": [],
      "idx": 506
    },
    {
      "path": "../classic/classic/src/view/NavigationModel.js",
      "requires": [
        12,
        50,
        408
      ],
      "uses": [
        351
      ],
      "idx": 507
    },
    {
      "path": "../classic/classic/src/view/AbstractView.js",
      "requires": [
        73,
        74,
        100,
        113,
        408,
        409,
        506,
        507
      ],
      "uses": [
        1,
        12,
        48,
        91,
        94,
        176,
        238
      ],
      "idx": 508
    },
    {
      "path": "../classic/classic/src/view/View.js",
      "requires": [
        508
      ],
      "uses": [],
      "idx": 509
    },
    {
      "path": "../classic/classic/src/view/BoundListKeyNav.js",
      "requires": [
        507
      ],
      "uses": [
        35,
        351
      ],
      "idx": 510
    },
    {
      "path": "../classic/classic/src/layout/component/BoundList.js",
      "requires": [
        411
      ],
      "uses": [],
      "idx": 511
    },
    {
      "path": "../classic/classic/src/toolbar/Item.js",
      "requires": [
        113,
        433
      ],
      "uses": [],
      "idx": 512
    },
    {
      "path": "../classic/classic/src/toolbar/TextItem.js",
      "requires": [
        94,
        433,
        512
      ],
      "uses": [],
      "idx": 513
    },
    {
      "path": "../classic/classic/src/form/trigger/Spinner.js",
      "requires": [
        483
      ],
      "uses": [],
      "idx": 514
    },
    {
      "path": "../classic/classic/src/form/field/Spinner.js",
      "requires": [
        351,
        484,
        514
      ],
      "uses": [],
      "idx": 515
    },
    {
      "path": "../classic/classic/src/form/field/Number.js",
      "requires": [
        515
      ],
      "uses": [
        90,
        91
      ],
      "idx": 516
    },
    {
      "path": "../classic/classic/src/toolbar/Paging.js",
      "requires": [
        408,
        433,
        513,
        516
      ],
      "uses": [
        91,
        411,
        514
      ],
      "idx": 517
    },
    {
      "path": "../classic/classic/src/view/BoundList.js",
      "requires": [
        48,
        231,
        509,
        510,
        511,
        517
      ],
      "uses": [
        94,
        411
      ],
      "idx": 518
    },
    {
      "path": "../classic/classic/src/form/field/ComboBox.js",
      "requires": [
        1,
        176,
        408,
        504,
        518
      ],
      "uses": [
        48,
        49,
        94,
        126,
        155,
        171,
        238,
        351,
        506,
        510,
        511
      ],
      "idx": 519
    },
    {
      "path": "../classic/classic/src/picker/Month.js",
      "requires": [
        94,
        113,
        381,
        417
      ],
      "uses": [
        411
      ],
      "idx": 520
    },
    {
      "path": "../classic/classic/src/picker/Date.js",
      "requires": [
        65,
        94,
        113,
        351,
        381,
        417,
        418,
        520
      ],
      "uses": [
        91,
        238,
        411
      ],
      "idx": 521
    },
    {
      "path": "../classic/classic/src/form/field/Date.js",
      "requires": [
        504,
        521
      ],
      "uses": [
        91,
        411
      ],
      "idx": 522
    },
    {
      "path": "../classic/classic/src/form/field/Display.js",
      "requires": [
        90,
        94,
        481
      ],
      "uses": [],
      "idx": 523
    },
    {
      "path": "../classic/classic/src/form/field/FileButton.js",
      "requires": [
        417
      ],
      "uses": [],
      "idx": 524
    },
    {
      "path": "../classic/classic/src/form/trigger/Component.js",
      "requires": [
        483
      ],
      "uses": [],
      "idx": 525
    },
    {
      "path": "../classic/classic/src/form/field/File.js",
      "requires": [
        484,
        524,
        525
      ],
      "uses": [
        411
      ],
      "idx": 526
    },
    {
      "path": "../classic/classic/src/form/field/Hidden.js",
      "requires": [
        481
      ],
      "uses": [],
      "idx": 527
    },
    {
      "path": "../classic/classic/src/tip/Tip.js",
      "requires": [
        444
      ],
      "uses": [
        34,
        113
      ],
      "idx": 528
    },
    {
      "path": "../classic/classic/src/tip/ToolTip.js",
      "requires": [
        32,
        528
      ],
      "uses": [
        34,
        73
      ],
      "idx": 529
    },
    {
      "path": "../classic/classic/src/tip/QuickTip.js",
      "requires": [
        529
      ],
      "uses": [],
      "idx": 530
    },
    {
      "path": "../classic/classic/src/tip/QuickTipManager.js",
      "requires": [
        530
      ],
      "uses": [],
      "idx": 531
    },
    {
      "path": "../classic/classic/src/picker/Color.js",
      "requires": [
        94,
        113
      ],
      "uses": [],
      "idx": 532
    },
    {
      "path": "../classic/classic/src/layout/component/field/HtmlEditor.js",
      "requires": [
        489
      ],
      "uses": [],
      "idx": 533
    },
    {
      "path": "../classic/classic/src/toolbar/Separator.js",
      "requires": [
        433,
        512
      ],
      "uses": [],
      "idx": 534
    },
    {
      "path": "../classic/classic/src/layout/container/boxOverflow/Menu.js",
      "requires": [
        417,
        426,
        534
      ],
      "uses": [
        411,
        427,
        432,
        441,
        493,
        585,
        587,
        659
      ],
      "idx": 535
    },
    {
      "path": "../classic/classic/src/form/field/HtmlEditor.js",
      "requires": [
        90,
        387,
        432,
        433,
        480,
        490,
        512,
        531,
        532,
        533,
        535
      ],
      "uses": [
        1,
        91,
        113,
        238,
        411,
        427,
        441,
        587
      ],
      "idx": 536
    },
    {
      "path": "../classic/classic/src/view/TagKeyNav.js",
      "requires": [
        510
      ],
      "uses": [],
      "idx": 537
    },
    {
      "path": "../classic/classic/src/form/field/Tag.js",
      "requires": [
        173,
        215,
        505,
        519,
        537
      ],
      "uses": [
        49,
        91,
        94,
        161,
        168,
        169
      ],
      "idx": 538
    },
    {
      "path": "../classic/classic/src/picker/Time.js",
      "requires": [
        173,
        518
      ],
      "uses": [
        49
      ],
      "idx": 539
    },
    {
      "path": "../classic/classic/src/form/field/Time.js",
      "requires": [
        510,
        519,
        522,
        539
      ],
      "uses": [
        91,
        94,
        506,
        511
      ],
      "idx": 540
    },
    {
      "path": "../classic/classic/src/form/field/Trigger.js",
      "requires": [
        238,
        381,
        484
      ],
      "uses": [],
      "idx": 541
    },
    {
      "path": "../classic/classic/src/grid/CellContext.js",
      "requires": [],
      "uses": [],
      "idx": 542
    },
    {
      "path": "../classic/classic/src/grid/CellEditor.js",
      "requires": [
        404
      ],
      "uses": [
        48,
        402
      ],
      "idx": 543
    },
    {
      "path": "../classic/classic/src/grid/ColumnComponentLayout.js",
      "requires": [
        411
      ],
      "uses": [],
      "idx": 544
    },
    {
      "path": "../classic/classic/src/layout/container/Fit.js",
      "requires": [
        399
      ],
      "uses": [],
      "idx": 545
    },
    {
      "path": "../classic/classic/src/panel/Table.js",
      "requires": [
        444,
        545
      ],
      "uses": [
        1,
        75,
        176,
        216,
        238,
        542,
        549,
        556,
        566,
        600,
        601,
        644,
        645,
        646
      ],
      "idx": 546
    },
    {
      "path": "../classic/classic/src/grid/ColumnLayout.js",
      "requires": [
        431,
        546
      ],
      "uses": [],
      "idx": 547
    },
    {
      "path": "../classic/classic/src/grid/ColumnManager.js",
      "requires": [],
      "uses": [],
      "idx": 548
    },
    {
      "path": "../classic/classic/src/grid/NavigationModel.js",
      "requires": [
        507
      ],
      "uses": [
        20,
        35,
        48,
        73,
        113,
        351,
        542
      ],
      "idx": 549
    },
    {
      "path": "../classic/classic/src/view/TableLayout.js",
      "requires": [
        411
      ],
      "uses": [],
      "idx": 550
    },
    {
      "path": "../classic/classic/src/grid/locking/RowSynchronizer.js",
      "requires": [],
      "uses": [],
      "idx": 551
    },
    {
      "path": "../classic/classic/src/view/NodeCache.js",
      "requires": [
        74
      ],
      "uses": [
        48,
        73
      ],
      "idx": 552
    },
    {
      "path": "../classic/classic/src/scroll/TableScroller.js",
      "requires": [
        106
      ],
      "uses": [
        10
      ],
      "idx": 553
    },
    {
      "path": "../classic/classic/src/view/Table.js",
      "requires": [
        1,
        54,
        73,
        231,
        509,
        542,
        550,
        551,
        552,
        553
      ],
      "uses": [
        12,
        48,
        94,
        113,
        155,
        566
      ],
      "idx": 554
    },
    {
      "path": "../classic/classic/src/grid/Panel.js",
      "requires": [
        546,
        554
      ],
      "uses": [],
      "idx": 555
    },
    {
      "path": "../classic/classic/src/grid/RowContext.js",
      "requires": [],
      "uses": [
        12
      ],
      "idx": 556
    },
    {
      "path": "../classic/classic/src/grid/RowEditorButtons.js",
      "requires": [
        402
      ],
      "uses": [
        411,
        417,
        444
      ],
      "idx": 557
    },
    {
      "path": "../classic/classic/src/grid/RowEditor.js",
      "requires": [
        351,
        497,
        529,
        557
      ],
      "uses": [
        48,
        65,
        75,
        400,
        402,
        411,
        441,
        523,
        542
      ],
      "idx": 558
    },
    {
      "path": "../classic/classic/src/grid/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 559
    },
    {
      "path": "../classic/classic/src/view/DropZone.js",
      "requires": [
        468
      ],
      "uses": [
        113,
        411
      ],
      "idx": 560
    },
    {
      "path": "../classic/classic/src/grid/ViewDropZone.js",
      "requires": [
        560
      ],
      "uses": [],
      "idx": 561
    },
    {
      "path": "../classic/classic/src/grid/plugin/HeaderResizer.js",
      "requires": [
        33,
        82,
        455
      ],
      "uses": [
        567
      ],
      "idx": 562
    },
    {
      "path": "../classic/classic/src/grid/header/DragZone.js",
      "requires": [
        466
      ],
      "uses": [],
      "idx": 563
    },
    {
      "path": "../classic/classic/src/grid/header/DropZone.js",
      "requires": [
        468
      ],
      "uses": [
        428
      ],
      "idx": 564
    },
    {
      "path": "../classic/classic/src/grid/plugin/HeaderReorderer.js",
      "requires": [
        82,
        563,
        564
      ],
      "uses": [],
      "idx": 565
    },
    {
      "path": "../classic/classic/src/grid/header/Container.js",
      "requires": [
        351,
        402,
        547,
        562,
        565
      ],
      "uses": [
        1,
        113,
        411,
        427,
        432,
        441,
        548,
        567,
        585,
        586,
        587
      ],
      "idx": 566
    },
    {
      "path": "../classic/classic/src/grid/column/Column.js",
      "requires": [
        212,
        544,
        547,
        566
      ],
      "uses": [
        52,
        90,
        562
      ],
      "idx": 567
    },
    {
      "path": "../classic/classic/src/grid/column/ActionProxy.js",
      "requires": [],
      "uses": [],
      "idx": 568
    },
    {
      "path": "../classic/classic/src/grid/column/Action.js",
      "requires": [
        76,
        567,
        568
      ],
      "uses": [
        48
      ],
      "idx": 569
    },
    {
      "path": "../classic/classic/src/grid/column/Boolean.js",
      "requires": [
        567
      ],
      "uses": [],
      "idx": 570
    },
    {
      "path": "../classic/classic/src/grid/column/Check.js",
      "requires": [
        567
      ],
      "uses": [
        542
      ],
      "idx": 571
    },
    {
      "path": "../classic/classic/src/grid/column/Date.js",
      "requires": [
        567
      ],
      "uses": [
        90
      ],
      "idx": 572
    },
    {
      "path": "../classic/classic/src/grid/column/Number.js",
      "requires": [
        90,
        567
      ],
      "uses": [],
      "idx": 573
    },
    {
      "path": "../classic/classic/src/grid/column/RowNumberer.js",
      "requires": [
        567
      ],
      "uses": [
        542
      ],
      "idx": 574
    },
    {
      "path": "../classic/classic/src/grid/column/Template.js",
      "requires": [
        94,
        567
      ],
      "uses": [
        571
      ],
      "idx": 575
    },
    {
      "path": "../classic/classic/src/grid/column/Widget.js",
      "requires": [
        358,
        567
      ],
      "uses": [],
      "idx": 576
    },
    {
      "path": "../classic/classic/src/grid/feature/Feature.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 577
    },
    {
      "path": "../classic/classic/src/grid/feature/AbstractSummary.js",
      "requires": [
        577
      ],
      "uses": [],
      "idx": 578
    },
    {
      "path": "../classic/classic/src/grid/feature/GroupStore.js",
      "requires": [
        50
      ],
      "uses": [
        126
      ],
      "idx": 579
    },
    {
      "path": "../classic/classic/src/grid/feature/Grouping.js",
      "requires": [
        577,
        578,
        579
      ],
      "uses": [
        94,
        155,
        566
      ],
      "idx": 580
    },
    {
      "path": "../classic/classic/src/grid/feature/GroupingSummary.js",
      "requires": [
        580
      ],
      "uses": [],
      "idx": 581
    },
    {
      "path": "../classic/classic/src/grid/feature/RowBody.js",
      "requires": [
        577
      ],
      "uses": [
        94
      ],
      "idx": 582
    },
    {
      "path": "../classic/classic/src/grid/feature/Summary.js",
      "requires": [
        578
      ],
      "uses": [
        113,
        155,
        411
      ],
      "idx": 583
    },
    {
      "path": "../classic/classic/src/menu/Item.js",
      "requires": [
        76,
        113,
        231
      ],
      "uses": [
        416,
        531
      ],
      "idx": 584
    },
    {
      "path": "../classic/classic/src/menu/CheckItem.js",
      "requires": [
        584
      ],
      "uses": [
        416
      ],
      "idx": 585
    },
    {
      "path": "../classic/classic/src/menu/Separator.js",
      "requires": [
        584
      ],
      "uses": [],
      "idx": 586
    },
    {
      "path": "../classic/classic/src/menu/Menu.js",
      "requires": [
        416,
        432,
        444,
        584,
        585,
        586
      ],
      "uses": [
        1,
        20,
        35,
        48,
        351,
        411
      ],
      "idx": 587
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/Base.js",
      "requires": [
        12,
        427,
        432,
        441,
        587
      ],
      "uses": [
        1,
        49
      ],
      "idx": 588
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/SingleFilter.js",
      "requires": [
        588
      ],
      "uses": [],
      "idx": 589
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/Boolean.js",
      "requires": [
        589
      ],
      "uses": [],
      "idx": 590
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/TriFilter.js",
      "requires": [
        588
      ],
      "uses": [],
      "idx": 591
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/Date.js",
      "requires": [
        411,
        585,
        591
      ],
      "uses": [
        427,
        432,
        441,
        521,
        637
      ],
      "idx": 592
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/List.js",
      "requires": [
        589
      ],
      "uses": [
        173,
        176
      ],
      "idx": 593
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/Number.js",
      "requires": [
        411,
        514,
        591
      ],
      "uses": [
        516
      ],
      "idx": 594
    },
    {
      "path": "../classic/classic/src/grid/filters/filter/String.js",
      "requires": [
        411,
        484,
        589
      ],
      "uses": [
        49
      ],
      "idx": 595
    },
    {
      "path": "../classic/classic/src/grid/filters/Filters.js",
      "requires": [
        82,
        408,
        588,
        589,
        590,
        591,
        592,
        593,
        594,
        595
      ],
      "uses": [
        12
      ],
      "idx": 596
    },
    {
      "path": "../classic/classic/src/grid/locking/HeaderContainer.js",
      "requires": [
        548,
        566
      ],
      "uses": [],
      "idx": 597
    },
    {
      "path": "../classic/classic/src/grid/locking/View.js",
      "requires": [
        50,
        85,
        113,
        408,
        508,
        554
      ],
      "uses": [
        106,
        409,
        542
      ],
      "idx": 598
    },
    {
      "path": "../classic/classic/src/scroll/LockingScroller.js",
      "requires": [
        106
      ],
      "uses": [
        10
      ],
      "idx": 599
    },
    {
      "path": "../classic/classic/src/grid/locking/Lockable.js",
      "requires": [
        113,
        554,
        566,
        597,
        598,
        599
      ],
      "uses": [
        1,
        33,
        106,
        176,
        400,
        411,
        429,
        430,
        444,
        546
      ],
      "idx": 600
    },
    {
      "path": "../classic/classic/src/grid/plugin/BufferedRenderer.js",
      "requires": [
        82
      ],
      "uses": [
        1,
        48,
        113,
        551
      ],
      "idx": 601
    },
    {
      "path": "../classic/classic/src/grid/plugin/Editing.js",
      "requires": [
        4,
        82,
        351,
        481,
        554,
        567
      ],
      "uses": [
        20,
        113,
        411,
        542
      ],
      "idx": 602
    },
    {
      "path": "../classic/classic/src/grid/plugin/CellEditing.js",
      "requires": [
        1,
        543,
        602
      ],
      "uses": [
        54,
        542
      ],
      "idx": 603
    },
    {
      "path": "../classic/classic/src/plugin/AbstractClipboard.js",
      "requires": [
        82,
        350
      ],
      "uses": [
        48
      ],
      "idx": 604
    },
    {
      "path": "../classic/classic/src/grid/plugin/Clipboard.js",
      "requires": [
        90,
        386,
        604
      ],
      "uses": [
        542
      ],
      "idx": 605
    },
    {
      "path": "../classic/classic/src/grid/plugin/DragDrop.js",
      "requires": [
        82
      ],
      "uses": [
        561,
        665
      ],
      "idx": 606
    },
    {
      "path": "../classic/classic/src/grid/plugin/RowEditing.js",
      "requires": [
        558,
        602
      ],
      "uses": [],
      "idx": 607
    },
    {
      "path": "../classic/classic/src/grid/plugin/RowExpander.js",
      "requires": [
        82,
        582
      ],
      "uses": [
        94,
        567
      ],
      "idx": 608
    },
    {
      "path": "../classic/classic/src/grid/plugin/RowWidget.js",
      "requires": [
        3,
        358,
        608
      ],
      "uses": [
        82,
        582
      ],
      "idx": 609
    },
    {
      "path": "../classic/classic/src/grid/property/Grid.js",
      "requires": [
        555
      ],
      "uses": [
        20,
        94,
        155,
        403,
        411,
        481,
        484,
        514,
        516,
        519,
        522,
        542,
        543,
        554,
        603,
        611,
        614
      ],
      "idx": 610
    },
    {
      "path": "../classic/classic/src/grid/property/HeaderContainer.js",
      "requires": [
        90,
        566
      ],
      "uses": [],
      "idx": 611
    },
    {
      "path": "../classic/classic/src/grid/property/Property.js",
      "requires": [
        155
      ],
      "uses": [],
      "idx": 612
    },
    {
      "path": "../classic/classic/src/grid/property/Reader.js",
      "requires": [
        157
      ],
      "uses": [
        156
      ],
      "idx": 613
    },
    {
      "path": "../classic/classic/src/grid/property/Store.js",
      "requires": [
        161,
        173,
        612,
        613
      ],
      "uses": [
        169
      ],
      "idx": 614
    },
    {
      "path": "../classic/classic/src/grid/selection/Selection.js",
      "requires": [],
      "uses": [],
      "idx": 615
    },
    {
      "path": "../classic/classic/src/grid/selection/Cells.js",
      "requires": [
        615
      ],
      "uses": [
        542
      ],
      "idx": 616
    },
    {
      "path": "../classic/classic/src/grid/selection/Columns.js",
      "requires": [
        615
      ],
      "uses": [
        542
      ],
      "idx": 617
    },
    {
      "path": "../classic/classic/src/grid/selection/Replicator.js",
      "requires": [
        82
      ],
      "uses": [],
      "idx": 618
    },
    {
      "path": "../classic/classic/src/grid/selection/Rows.js",
      "requires": [
        126,
        615
      ],
      "uses": [
        542
      ],
      "idx": 619
    },
    {
      "path": "../classic/classic/src/grid/selection/SelectionExtender.js",
      "requires": [
        455
      ],
      "uses": [
        48,
        387
      ],
      "idx": 620
    },
    {
      "path": "../classic/classic/src/grid/selection/SpreadsheetModel.js",
      "requires": [
        505,
        574,
        615,
        616,
        617,
        619,
        620
      ],
      "uses": [
        400,
        461,
        542,
        544,
        571
      ],
      "idx": 621
    },
    {
      "path": "../classic/classic/src/util/Queue.js",
      "requires": [],
      "uses": [],
      "idx": 622
    },
    {
      "path": "../classic/classic/src/layout/ContextItem.js",
      "requires": [],
      "uses": [
        54,
        65,
        71,
        397
      ],
      "idx": 623
    },
    {
      "path": "../classic/classic/src/layout/Context.js",
      "requires": [
        65,
        71,
        361,
        398,
        622,
        623
      ],
      "uses": [],
      "idx": 624
    },
    {
      "path": "../classic/classic/src/layout/SizePolicy.js",
      "requires": [],
      "uses": [],
      "idx": 625
    },
    {
      "path": "../classic/classic/src/layout/component/Body.js",
      "requires": [
        411
      ],
      "uses": [],
      "idx": 626
    },
    {
      "path": "../classic/classic/src/layout/component/FieldSet.js",
      "requires": [
        626
      ],
      "uses": [],
      "idx": 627
    },
    {
      "path": "../classic/classic/src/layout/container/Absolute.js",
      "requires": [
        451
      ],
      "uses": [],
      "idx": 628
    },
    {
      "path": "../classic/classic/src/layout/container/Accordion.js",
      "requires": [
        432
      ],
      "uses": [],
      "idx": 629
    },
    {
      "path": "../classic/classic/src/resizer/BorderSplitter.js",
      "requires": [
        429
      ],
      "uses": [
        640
      ],
      "idx": 630
    },
    {
      "path": "../classic/classic/src/layout/container/Border.js",
      "requires": [
        71,
        114,
        399,
        630
      ],
      "uses": [
        90,
        411
      ],
      "idx": 631
    },
    {
      "path": "../classic/classic/src/layout/container/Card.js",
      "requires": [
        545
      ],
      "uses": [
        48
      ],
      "idx": 632
    },
    {
      "path": "../classic/classic/src/layout/container/Center.js",
      "requires": [
        545
      ],
      "uses": [],
      "idx": 633
    },
    {
      "path": "../classic/classic/src/layout/container/Form.js",
      "requires": [
        400
      ],
      "uses": [],
      "idx": 634
    },
    {
      "path": "../classic/classic/src/menu/Bar.js",
      "requires": [
        587
      ],
      "uses": [],
      "idx": 635
    },
    {
      "path": "../classic/classic/src/menu/ColorPicker.js",
      "requires": [
        532,
        587
      ],
      "uses": [
        411,
        416
      ],
      "idx": 636
    },
    {
      "path": "../classic/classic/src/menu/DatePicker.js",
      "requires": [
        521,
        587
      ],
      "uses": [
        411,
        416
      ],
      "idx": 637
    },
    {
      "path": "../classic/classic/src/panel/Pinnable.js",
      "requires": [
        0
      ],
      "uses": [
        411,
        424
      ],
      "idx": 638
    },
    {
      "path": "../classic/classic/src/plugin/LazyItems.js",
      "requires": [
        82
      ],
      "uses": [],
      "idx": 639
    },
    {
      "path": "../classic/classic/src/resizer/BorderSplitterTracker.js",
      "requires": [
        33,
        456
      ],
      "uses": [],
      "idx": 640
    },
    {
      "path": "../classic/classic/src/resizer/Handle.js",
      "requires": [
        113
      ],
      "uses": [],
      "idx": 641
    },
    {
      "path": "../classic/classic/src/resizer/ResizeTracker.js",
      "requires": [
        455
      ],
      "uses": [
        48
      ],
      "idx": 642
    },
    {
      "path": "../classic/classic/src/resizer/Resizer.js",
      "requires": [
        50
      ],
      "uses": [
        48,
        91,
        113,
        642
      ],
      "idx": 643
    },
    {
      "path": "../classic/classic/src/selection/CellModel.js",
      "requires": [
        506,
        542
      ],
      "uses": [],
      "idx": 644
    },
    {
      "path": "../classic/classic/src/selection/RowModel.js",
      "requires": [
        506,
        542
      ],
      "uses": [],
      "idx": 645
    },
    {
      "path": "../classic/classic/src/selection/CheckboxModel.js",
      "requires": [
        571,
        645
      ],
      "uses": [
        400,
        542,
        544
      ],
      "idx": 646
    },
    {
      "path": "../classic/classic/src/selection/TreeModel.js",
      "requires": [
        645
      ],
      "uses": [],
      "idx": 647
    },
    {
      "path": "../classic/classic/src/slider/Thumb.js",
      "requires": [
        90,
        455
      ],
      "uses": [
        71
      ],
      "idx": 648
    },
    {
      "path": "../classic/classic/src/slider/Tip.js",
      "requires": [
        528
      ],
      "uses": [],
      "idx": 649
    },
    {
      "path": "../classic/classic/src/slider/Multi.js",
      "requires": [
        90,
        91,
        481,
        648,
        649
      ],
      "uses": [
        238
      ],
      "idx": 650
    },
    {
      "path": "../classic/classic/src/slider/Single.js",
      "requires": [
        650
      ],
      "uses": [],
      "idx": 651
    },
    {
      "path": "../classic/classic/src/slider/Widget.js",
      "requires": [
        87,
        650
      ],
      "uses": [
        71,
        90
      ],
      "idx": 652
    },
    {
      "path": "../classic/classic/src/state/CookieProvider.js",
      "requires": [
        110
      ],
      "uses": [],
      "idx": 653
    },
    {
      "path": "../classic/classic/src/state/LocalStorageProvider.js",
      "requires": [
        110,
        384
      ],
      "uses": [],
      "idx": 654
    },
    {
      "path": "../classic/classic/src/tab/Tab.js",
      "requires": [
        417
      ],
      "uses": [],
      "idx": 655
    },
    {
      "path": "../classic/classic/src/tab/Bar.js",
      "requires": [
        34,
        422,
        626,
        655
      ],
      "uses": [
        33
      ],
      "idx": 656
    },
    {
      "path": "../classic/classic/src/tab/Panel.js",
      "requires": [
        444,
        632,
        656
      ],
      "uses": [
        411,
        655
      ],
      "idx": 657
    },
    {
      "path": "../classic/classic/src/toolbar/Breadcrumb.js",
      "requires": [
        235,
        402,
        418
      ],
      "uses": [
        23,
        176
      ],
      "idx": 658
    },
    {
      "path": "../classic/classic/src/toolbar/Fill.js",
      "requires": [
        113,
        433
      ],
      "uses": [],
      "idx": 659
    },
    {
      "path": "../classic/classic/src/toolbar/Spacer.js",
      "requires": [
        113,
        433
      ],
      "uses": [],
      "idx": 660
    },
    {
      "path": "../classic/classic/src/tree/Column.js",
      "requires": [
        567
      ],
      "uses": [
        76
      ],
      "idx": 661
    },
    {
      "path": "../classic/classic/src/tree/NavigationModel.js",
      "requires": [
        549
      ],
      "uses": [
        35
      ],
      "idx": 662
    },
    {
      "path": "../classic/classic/src/tree/View.js",
      "requires": [
        554
      ],
      "uses": [
        48
      ],
      "idx": 663
    },
    {
      "path": "../classic/classic/src/tree/Panel.js",
      "requires": [
        235,
        546,
        647,
        661,
        662,
        663
      ],
      "uses": [
        176,
        400,
        544
      ],
      "idx": 664
    },
    {
      "path": "../classic/classic/src/view/DragZone.js",
      "requires": [
        466
      ],
      "uses": [
        48,
        91
      ],
      "idx": 665
    },
    {
      "path": "../classic/classic/src/tree/ViewDragZone.js",
      "requires": [
        665
      ],
      "uses": [
        91
      ],
      "idx": 666
    },
    {
      "path": "../classic/classic/src/tree/ViewDropZone.js",
      "requires": [
        560
      ],
      "uses": [],
      "idx": 667
    },
    {
      "path": "../classic/classic/src/tree/plugin/TreeViewDragDrop.js",
      "requires": [
        82
      ],
      "uses": [
        666,
        667
      ],
      "idx": 668
    },
    {
      "path": "../classic/classic/src/view/MultiSelectorSearch.js",
      "requires": [
        444
      ],
      "uses": [
        49,
        176,
        411,
        441,
        484,
        545,
        555
      ],
      "idx": 669
    },
    {
      "path": "../classic/classic/src/view/MultiSelector.js",
      "requires": [
        441,
        545,
        555,
        669
      ],
      "uses": [],
      "idx": 670
    },
    {
      "path": "../classic/classic/src/window/Toast.js",
      "requires": [
        478
      ],
      "uses": [
        1
      ],
      "idx": 671
    }
  ],
  "classes": {
    "Ext.AbstractManager": {
      "idx": 6,
      "alias": [],
      "alternates": []
    },
    "Ext.Action": {
      "idx": 394,
      "alias": [],
      "alternates": []
    },
    "Ext.Ajax": {
      "idx": 18,
      "alias": [],
      "alternates": []
    },
    "Ext.AnimationQueue": {
      "idx": 19,
      "alias": [],
      "alternates": []
    },
    "Ext.Component": {
      "idx": 113,
      "alias": [
        "widget.box",
        "widget.component"
      ],
      "alternates": [
        "Ext.AbstractComponent"
      ]
    },
    "Ext.ComponentLoader": {
      "idx": 396,
      "alias": [],
      "alternates": []
    },
    "Ext.ComponentManager": {
      "idx": 20,
      "alias": [],
      "alternates": [
        "Ext.ComponentMgr"
      ]
    },
    "Ext.ComponentQuery": {
      "idx": 23,
      "alias": [],
      "alternates": []
    },
    "Ext.Deferred": {
      "idx": 11,
      "alias": [],
      "alternates": []
    },
    "Ext.Editor": {
      "idx": 404,
      "alias": [
        "widget.editor"
      ],
      "alternates": []
    },
    "Ext.ElementLoader": {
      "idx": 395,
      "alias": [],
      "alternates": []
    },
    "Ext.EventManager": {
      "idx": 405,
      "alias": [],
      "alternates": []
    },
    "Ext.Evented": {
      "idx": 24,
      "alias": [],
      "alternates": [
        "Ext.EventedBase"
      ]
    },
    "Ext.GlobalEvents": {
      "idx": 75,
      "alias": [],
      "alternates": [
        "Ext.globalEvents"
      ]
    },
    "Ext.Glyph": {
      "idx": 76,
      "alias": [],
      "alternates": []
    },
    "Ext.Img": {
      "idx": 407,
      "alias": [
        "widget.image",
        "widget.imagecomponent"
      ],
      "alternates": []
    },
    "Ext.LoadMask": {
      "idx": 409,
      "alias": [
        "widget.loadmask"
      ],
      "alternates": []
    },
    "Ext.Mixin": {
      "idx": 0,
      "alias": [],
      "alternates": []
    },
    "Ext.Progress": {
      "idx": 89,
      "alias": [
        "widget.progress",
        "widget.progressbarwidget"
      ],
      "alternates": [
        "Ext.ProgressBarWidget"
      ]
    },
    "Ext.ProgressBar": {
      "idx": 413,
      "alias": [
        "widget.progressbar"
      ],
      "alternates": []
    },
    "Ext.ProgressBase": {
      "idx": 88,
      "alias": [],
      "alternates": []
    },
    "Ext.Promise": {
      "idx": 10,
      "alias": [],
      "alternates": []
    },
    "Ext.TaskQueue": {
      "idx": 39,
      "alias": [],
      "alternates": []
    },
    "Ext.Template": {
      "idx": 91,
      "alias": [],
      "alternates": []
    },
    "Ext.Widget": {
      "idx": 87,
      "alias": [
        "widget.widget"
      ],
      "alternates": [
        "Ext.Gadget"
      ]
    },
    "Ext.XTemplate": {
      "idx": 94,
      "alias": [],
      "alternates": []
    },
    "Ext.ZIndexManager": {
      "idx": 401,
      "alias": [],
      "alternates": [
        "Ext.WindowGroup"
      ]
    },
    "Ext.app.Application": {
      "idx": 179,
      "alias": [],
      "alternates": []
    },
    "Ext.app.BaseController": {
      "idx": 122,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Controller": {
      "idx": 178,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventBus": {
      "idx": 115,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventDomain": {
      "idx": 95,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Profile": {
      "idx": 180,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Util": {
      "idx": 123,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewController": {
      "idx": 182,
      "alias": [
        "controller.controller"
      ],
      "alternates": []
    },
    "Ext.app.ViewModel": {
      "idx": 216,
      "alias": [
        "viewmodel.default"
      ],
      "alternates": []
    },
    "Ext.app.bind.AbstractStub": {
      "idx": 197,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.BaseBinding": {
      "idx": 195,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Binding": {
      "idx": 196,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Formula": {
      "idx": 202,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.LinkStub": {
      "idx": 199,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Multi": {
      "idx": 201,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Parser": {
      "idx": 212,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.RootStub": {
      "idx": 200,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Stub": {
      "idx": 198,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Template": {
      "idx": 213,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.TemplateBinding": {
      "idx": 214,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Component": {
      "idx": 96,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Controller": {
      "idx": 217,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Direct": {
      "idx": 220,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Global": {
      "idx": 116,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Store": {
      "idx": 177,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.View": {
      "idx": 181,
      "alias": [],
      "alternates": []
    },
    "Ext.button.Button": {
      "idx": 417,
      "alias": [
        "widget.button"
      ],
      "alternates": [
        "Ext.Button"
      ]
    },
    "Ext.button.Cycle": {
      "idx": 419,
      "alias": [
        "widget.cycle"
      ],
      "alternates": [
        "Ext.CycleButton"
      ]
    },
    "Ext.button.Manager": {
      "idx": 415,
      "alias": [],
      "alternates": [
        "Ext.ButtonToggleManager"
      ]
    },
    "Ext.button.Segmented": {
      "idx": 421,
      "alias": [
        "widget.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.button.Split": {
      "idx": 418,
      "alias": [
        "widget.splitbutton"
      ],
      "alternates": [
        "Ext.SplitButton"
      ]
    },
    "Ext.container.ButtonGroup": {
      "idx": 446,
      "alias": [
        "widget.buttongroup"
      ],
      "alternates": [
        "Ext.ButtonGroup"
      ]
    },
    "Ext.container.Container": {
      "idx": 402,
      "alias": [
        "widget.container"
      ],
      "alternates": [
        "Ext.Container",
        "Ext.AbstractContainer"
      ]
    },
    "Ext.container.DockingContainer": {
      "idx": 443,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Monitor": {
      "idx": 447,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Viewport": {
      "idx": 450,
      "alias": [
        "widget.viewport"
      ],
      "alternates": [
        "Ext.Viewport"
      ]
    },
    "Ext.dashboard.Column": {
      "idx": 453,
      "alias": [
        "widget.dashboard-column"
      ],
      "alternates": []
    },
    "Ext.dashboard.Dashboard": {
      "idx": 465,
      "alias": [
        "widget.dashboard"
      ],
      "alternates": []
    },
    "Ext.dashboard.DropZone": {
      "idx": 463,
      "alias": [],
      "alternates": []
    },
    "Ext.dashboard.Panel": {
      "idx": 452,
      "alias": [
        "widget.dashboard-panel"
      ],
      "alternates": []
    },
    "Ext.dashboard.Part": {
      "idx": 464,
      "alias": [
        "part.part"
      ],
      "alternates": []
    },
    "Ext.data.AbstractStore": {
      "idx": 137,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ArrayStore": {
      "idx": 175,
      "alias": [
        "store.array"
      ],
      "alternates": [
        "Ext.data.SimpleStore"
      ]
    },
    "Ext.data.Batch": {
      "idx": 185,
      "alias": [],
      "alternates": []
    },
    "Ext.data.BufferedStore": {
      "idx": 222,
      "alias": [
        "store.buffered"
      ],
      "alternates": []
    },
    "Ext.data.ChainedStore": {
      "idx": 215,
      "alias": [
        "store.chained"
      ],
      "alternates": []
    },
    "Ext.data.Connection": {
      "idx": 17,
      "alias": [],
      "alternates": []
    },
    "Ext.data.DirectStore": {
      "idx": 224,
      "alias": [
        "store.direct"
      ],
      "alternates": []
    },
    "Ext.data.Error": {
      "idx": 138,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ErrorCollection": {
      "idx": 139,
      "alias": [],
      "alternates": [
        "Ext.data.Errors"
      ]
    },
    "Ext.data.Group": {
      "idx": 164,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonP": {
      "idx": 225,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonPStore": {
      "idx": 227,
      "alias": [
        "store.jsonp"
      ],
      "alternates": []
    },
    "Ext.data.JsonStore": {
      "idx": 228,
      "alias": [
        "store.json"
      ],
      "alternates": []
    },
    "Ext.data.LocalStore": {
      "idx": 165,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Model": {
      "idx": 155,
      "alias": [],
      "alternates": [
        "Ext.data.Record"
      ]
    },
    "Ext.data.ModelManager": {
      "idx": 229,
      "alias": [],
      "alternates": [
        "Ext.ModelMgr"
      ]
    },
    "Ext.data.NodeInterface": {
      "idx": 230,
      "alias": [],
      "alternates": []
    },
    "Ext.data.NodeStore": {
      "idx": 233,
      "alias": [
        "store.node"
      ],
      "alternates": []
    },
    "Ext.data.PageMap": {
      "idx": 221,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ProxyStore": {
      "idx": 162,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Range": {
      "idx": 127,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Request": {
      "idx": 234,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ResultSet": {
      "idx": 156,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Session": {
      "idx": 193,
      "alias": [],
      "alternates": []
    },
    "Ext.data.SortTypes": {
      "idx": 145,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Store": {
      "idx": 173,
      "alias": [
        "store.store"
      ],
      "alternates": []
    },
    "Ext.data.StoreManager": {
      "idx": 176,
      "alias": [],
      "alternates": [
        "Ext.StoreMgr",
        "Ext.data.StoreMgr",
        "Ext.StoreManager"
      ]
    },
    "Ext.data.TreeModel": {
      "idx": 232,
      "alias": [],
      "alternates": []
    },
    "Ext.data.TreeStore": {
      "idx": 235,
      "alias": [
        "store.tree"
      ],
      "alternates": []
    },
    "Ext.data.Types": {
      "idx": 236,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Validation": {
      "idx": 237,
      "alias": [],
      "alternates": []
    },
    "Ext.data.XmlStore": {
      "idx": 242,
      "alias": [
        "store.xml"
      ],
      "alternates": []
    },
    "Ext.data.field.Boolean": {
      "idx": 148,
      "alias": [
        "data.field.bool",
        "data.field.boolean"
      ],
      "alternates": []
    },
    "Ext.data.field.Date": {
      "idx": 149,
      "alias": [
        "data.field.date"
      ],
      "alternates": []
    },
    "Ext.data.field.Field": {
      "idx": 147,
      "alias": [
        "data.field.auto"
      ],
      "alternates": [
        "Ext.data.Field"
      ]
    },
    "Ext.data.field.Integer": {
      "idx": 150,
      "alias": [
        "data.field.int",
        "data.field.integer"
      ],
      "alternates": []
    },
    "Ext.data.field.Number": {
      "idx": 151,
      "alias": [
        "data.field.float",
        "data.field.number"
      ],
      "alternates": []
    },
    "Ext.data.field.String": {
      "idx": 152,
      "alias": [
        "data.field.string"
      ],
      "alternates": []
    },
    "Ext.data.flash.BinaryXhr": {
      "idx": 14,
      "alias": [],
      "alternates": []
    },
    "Ext.data.identifier.Generator": {
      "idx": 153,
      "alias": [
        "data.identifier.default"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Negative": {
      "idx": 243,
      "alias": [
        "data.identifier.negative"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Sequential": {
      "idx": 154,
      "alias": [
        "data.identifier.sequential"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Uuid": {
      "idx": 244,
      "alias": [
        "data.identifier.uuid"
      ],
      "alternates": []
    },
    "Ext.data.matrix.Matrix": {
      "idx": 188,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Side": {
      "idx": 187,
      "alias": [],
      "alternates": []
    },
    "Ext.data.matrix.Slice": {
      "idx": 186,
      "alias": [],
      "alternates": []
    },
    "Ext.data.operation.Create": {
      "idx": 141,
      "alias": [
        "data.operation.create"
      ],
      "alternates": []
    },
    "Ext.data.operation.Destroy": {
      "idx": 142,
      "alias": [
        "data.operation.destroy"
      ],
      "alternates": []
    },
    "Ext.data.operation.Operation": {
      "idx": 140,
      "alias": [],
      "alternates": [
        "Ext.data.Operation"
      ]
    },
    "Ext.data.operation.Read": {
      "idx": 143,
      "alias": [
        "data.operation.read"
      ],
      "alternates": []
    },
    "Ext.data.operation.Update": {
      "idx": 144,
      "alias": [
        "data.operation.update"
      ],
      "alternates": []
    },
    "Ext.data.proxy.Ajax": {
      "idx": 167,
      "alias": [
        "proxy.ajax"
      ],
      "alternates": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
      ]
    },
    "Ext.data.proxy.Client": {
      "idx": 160,
      "alias": [],
      "alternates": [
        "Ext.data.ClientProxy"
      ]
    },
    "Ext.data.proxy.Direct": {
      "idx": 223,
      "alias": [
        "proxy.direct"
      ],
      "alternates": [
        "Ext.data.DirectProxy"
      ]
    },
    "Ext.data.proxy.JsonP": {
      "idx": 226,
      "alias": [
        "proxy.jsonp",
        "proxy.scripttag"
      ],
      "alternates": [
        "Ext.data.ScriptTagProxy"
      ]
    },
    "Ext.data.proxy.LocalStorage": {
      "idx": 246,
      "alias": [
        "proxy.localstorage"
      ],
      "alternates": [
        "Ext.data.LocalStorageProxy"
      ]
    },
    "Ext.data.proxy.Memory": {
      "idx": 161,
      "alias": [
        "proxy.memory"
      ],
      "alternates": [
        "Ext.data.MemoryProxy"
      ]
    },
    "Ext.data.proxy.Proxy": {
      "idx": 159,
      "alias": [
        "proxy.proxy"
      ],
      "alternates": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
      ]
    },
    "Ext.data.proxy.Rest": {
      "idx": 247,
      "alias": [
        "proxy.rest"
      ],
      "alternates": [
        "Ext.data.RestProxy"
      ]
    },
    "Ext.data.proxy.Server": {
      "idx": 166,
      "alias": [
        "proxy.server"
      ],
      "alternates": [
        "Ext.data.ServerProxy"
      ]
    },
    "Ext.data.proxy.SessionStorage": {
      "idx": 248,
      "alias": [
        "proxy.sessionstorage"
      ],
      "alternates": [
        "Ext.data.SessionStorageProxy"
      ]
    },
    "Ext.data.proxy.WebStorage": {
      "idx": 245,
      "alias": [],
      "alternates": [
        "Ext.data.WebStorageProxy"
      ]
    },
    "Ext.data.reader.Array": {
      "idx": 174,
      "alias": [
        "reader.array"
      ],
      "alternates": [
        "Ext.data.ArrayReader"
      ]
    },
    "Ext.data.reader.Json": {
      "idx": 168,
      "alias": [
        "reader.json"
      ],
      "alternates": [
        "Ext.data.JsonReader"
      ]
    },
    "Ext.data.reader.Reader": {
      "idx": 157,
      "alias": [
        "reader.base"
      ],
      "alternates": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
      ]
    },
    "Ext.data.reader.Xml": {
      "idx": 240,
      "alias": [
        "reader.xml"
      ],
      "alternates": [
        "Ext.data.XmlReader"
      ]
    },
    "Ext.data.request.Ajax": {
      "idx": 15,
      "alias": [
        "request.ajax"
      ],
      "alternates": []
    },
    "Ext.data.request.Base": {
      "idx": 13,
      "alias": [],
      "alternates": []
    },
    "Ext.data.request.Form": {
      "idx": 16,
      "alias": [
        "request.form"
      ],
      "alternates": []
    },
    "Ext.data.schema.Association": {
      "idx": 130,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToMany": {
      "idx": 133,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToOne": {
      "idx": 132,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Namer": {
      "idx": 135,
      "alias": [
        "namer.default"
      ],
      "alternates": []
    },
    "Ext.data.schema.OneToOne": {
      "idx": 131,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Role": {
      "idx": 129,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Schema": {
      "idx": 136,
      "alias": [
        "schema.default"
      ],
      "alternates": []
    },
    "Ext.data.session.BatchVisitor": {
      "idx": 191,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChangesVisitor": {
      "idx": 189,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ChildChangesVisitor": {
      "idx": 190,
      "alias": [],
      "alternates": []
    },
    "Ext.data.summary.Average": {
      "idx": 255,
      "alias": [
        "data.summary.average"
      ],
      "alternates": []
    },
    "Ext.data.summary.Base": {
      "idx": 253,
      "alias": [
        "data.summary.base"
      ],
      "alternates": []
    },
    "Ext.data.summary.Count": {
      "idx": 256,
      "alias": [
        "data.summary.count"
      ],
      "alternates": []
    },
    "Ext.data.summary.Max": {
      "idx": 257,
      "alias": [
        "data.summary.max"
      ],
      "alternates": []
    },
    "Ext.data.summary.Min": {
      "idx": 258,
      "alias": [
        "data.summary.min"
      ],
      "alternates": []
    },
    "Ext.data.summary.Sum": {
      "idx": 254,
      "alias": [
        "data.summary.sum"
      ],
      "alternates": []
    },
    "Ext.data.validator.AbstractDate": {
      "idx": 259,
      "alias": [],
      "alternates": []
    },
    "Ext.data.validator.Bound": {
      "idx": 260,
      "alias": [
        "data.validator.bound"
      ],
      "alternates": []
    },
    "Ext.data.validator.CIDRv4": {
      "idx": 262,
      "alias": [
        "data.validator.cidrv4"
      ],
      "alternates": []
    },
    "Ext.data.validator.CIDRv6": {
      "idx": 263,
      "alias": [
        "data.validator.cidrv6"
      ],
      "alternates": []
    },
    "Ext.data.validator.Currency": {
      "idx": 265,
      "alias": [
        "data.validator.currency"
      ],
      "alternates": []
    },
    "Ext.data.validator.CurrencyUS": {
      "idx": 266,
      "alias": [
        "data.validator.currency-us"
      ],
      "alternates": []
    },
    "Ext.data.validator.Date": {
      "idx": 267,
      "alias": [
        "data.validator.date"
      ],
      "alternates": []
    },
    "Ext.data.validator.DateTime": {
      "idx": 268,
      "alias": [
        "data.validator.datetime"
      ],
      "alternates": []
    },
    "Ext.data.validator.Email": {
      "idx": 269,
      "alias": [
        "data.validator.email"
      ],
      "alternates": []
    },
    "Ext.data.validator.Exclusion": {
      "idx": 271,
      "alias": [
        "data.validator.exclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Format": {
      "idx": 261,
      "alias": [
        "data.validator.format"
      ],
      "alternates": []
    },
    "Ext.data.validator.IPAddress": {
      "idx": 272,
      "alias": [
        "data.validator.ipaddress"
      ],
      "alternates": []
    },
    "Ext.data.validator.Inclusion": {
      "idx": 273,
      "alias": [
        "data.validator.inclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Length": {
      "idx": 274,
      "alias": [
        "data.validator.length"
      ],
      "alternates": []
    },
    "Ext.data.validator.List": {
      "idx": 270,
      "alias": [
        "data.validator.list"
      ],
      "alternates": []
    },
    "Ext.data.validator.NotNull": {
      "idx": 276,
      "alias": [
        "data.validator.notnull"
      ],
      "alternates": []
    },
    "Ext.data.validator.Number": {
      "idx": 264,
      "alias": [
        "data.validator.number"
      ],
      "alternates": []
    },
    "Ext.data.validator.Phone": {
      "idx": 277,
      "alias": [
        "data.validator.phone"
      ],
      "alternates": []
    },
    "Ext.data.validator.Presence": {
      "idx": 275,
      "alias": [
        "data.validator.presence"
      ],
      "alternates": []
    },
    "Ext.data.validator.Range": {
      "idx": 278,
      "alias": [
        "data.validator.range"
      ],
      "alternates": []
    },
    "Ext.data.validator.Time": {
      "idx": 279,
      "alias": [
        "data.validator.time"
      ],
      "alternates": []
    },
    "Ext.data.validator.Url": {
      "idx": 280,
      "alias": [
        "data.validator.url"
      ],
      "alternates": []
    },
    "Ext.data.validator.Validator": {
      "idx": 146,
      "alias": [
        "data.validator.base"
      ],
      "alternates": []
    },
    "Ext.data.virtual.Group": {
      "idx": 281,
      "alias": [],
      "alternates": []
    },
    "Ext.data.virtual.Page": {
      "idx": 282,
      "alias": [],
      "alternates": []
    },
    "Ext.data.virtual.PageMap": {
      "idx": 283,
      "alias": [],
      "alternates": []
    },
    "Ext.data.virtual.Range": {
      "idx": 284,
      "alias": [],
      "alternates": []
    },
    "Ext.data.virtual.Store": {
      "idx": 285,
      "alias": [
        "store.virtual"
      ],
      "alternates": []
    },
    "Ext.data.writer.Json": {
      "idx": 169,
      "alias": [
        "writer.json"
      ],
      "alternates": [
        "Ext.data.JsonWriter"
      ]
    },
    "Ext.data.writer.Writer": {
      "idx": 158,
      "alias": [
        "writer.base"
      ],
      "alternates": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
      ]
    },
    "Ext.data.writer.Xml": {
      "idx": 241,
      "alias": [
        "writer.xml"
      ],
      "alternates": [
        "Ext.data.XmlWriter"
      ]
    },
    "Ext.dd.DD": {
      "idx": 435,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDProxy": {
      "idx": 436,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDTarget": {
      "idx": 460,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDrop": {
      "idx": 434,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDropManager": {
      "idx": 428,
      "alias": [],
      "alternates": [
        "Ext.dd.DragDropMgr",
        "Ext.dd.DDM"
      ]
    },
    "Ext.dd.DragSource": {
      "idx": 438,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragTracker": {
      "idx": 455,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragZone": {
      "idx": 466,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropTarget": {
      "idx": 462,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropZone": {
      "idx": 468,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.Registry": {
      "idx": 467,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.ScrollManager": {
      "idx": 461,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.StatusProxy": {
      "idx": 437,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.Event": {
      "idx": 286,
      "alias": [
        "direct.event"
      ],
      "alternates": []
    },
    "Ext.direct.ExceptionEvent": {
      "idx": 288,
      "alias": [
        "direct.exception"
      ],
      "alternates": []
    },
    "Ext.direct.JsonProvider": {
      "idx": 289,
      "alias": [
        "direct.jsonprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Manager": {
      "idx": 218,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.PollingProvider": {
      "idx": 290,
      "alias": [
        "direct.pollingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Provider": {
      "idx": 219,
      "alias": [
        "direct.provider"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingEvent": {
      "idx": 287,
      "alias": [
        "direct.rpc"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingMethod": {
      "idx": 291,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.RemotingProvider": {
      "idx": 293,
      "alias": [
        "direct.remotingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Transaction": {
      "idx": 292,
      "alias": [
        "direct.transaction"
      ],
      "alternates": []
    },
    "Ext.dom.ButtonElement": {
      "idx": 414,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.CompositeElement": {
      "idx": 98,
      "alias": [],
      "alternates": [
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.CompositeElementLite": {
      "idx": 74,
      "alias": [],
      "alternates": [
        "Ext.CompositeElementLite"
      ]
    },
    "Ext.dom.Element": {
      "idx": 48,
      "alias": [],
      "alternates": [
        "Ext.Element"
      ]
    },
    "Ext.dom.ElementEvent": {
      "idx": 30,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Fly": {
      "idx": 73,
      "alias": [],
      "alternates": [
        "Ext.dom.Element.Fly"
      ]
    },
    "Ext.dom.GarbageCollector": {
      "idx": 294,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Helper": {
      "idx": 238,
      "alias": [],
      "alternates": [
        "Ext.DomHelper",
        "Ext.core.DomHelper"
      ]
    },
    "Ext.dom.Layer": {
      "idx": 469,
      "alias": [],
      "alternates": [
        "Ext.Layer"
      ]
    },
    "Ext.dom.Query": {
      "idx": 239,
      "alias": [],
      "alternates": [
        "Ext.core.DomQuery",
        "Ext.DomQuery"
      ]
    },
    "Ext.dom.Shadow": {
      "idx": 28,
      "alias": [],
      "alternates": [
        "Ext.Shadow"
      ]
    },
    "Ext.dom.Shim": {
      "idx": 29,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.TouchAction": {
      "idx": 295,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Underlay": {
      "idx": 27,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.UnderlayPool": {
      "idx": 26,
      "alias": [],
      "alternates": []
    },
    "Ext.drag.Constraint": {
      "idx": 296,
      "alias": [
        "drag.constraint.base"
      ],
      "alternates": []
    },
    "Ext.drag.Info": {
      "idx": 297,
      "alias": [],
      "alternates": []
    },
    "Ext.drag.Item": {
      "idx": 298,
      "alias": [],
      "alternates": []
    },
    "Ext.drag.Manager": {
      "idx": 299,
      "alias": [],
      "alternates": []
    },
    "Ext.drag.Source": {
      "idx": 300,
      "alias": [],
      "alternates": []
    },
    "Ext.drag.Target": {
      "idx": 301,
      "alias": [],
      "alternates": []
    },
    "Ext.drag.proxy.None": {
      "idx": 302,
      "alias": [
        "drag.proxy.none"
      ],
      "alternates": []
    },
    "Ext.drag.proxy.Original": {
      "idx": 303,
      "alias": [
        "drag.proxy.original"
      ],
      "alternates": []
    },
    "Ext.drag.proxy.Placeholder": {
      "idx": 304,
      "alias": [
        "drag.proxy.placeholder"
      ],
      "alternates": []
    },
    "Ext.event.Event": {
      "idx": 35,
      "alias": [],
      "alternates": [
        "Ext.EventObjectImpl"
      ]
    },
    "Ext.event.gesture.DoubleTap": {
      "idx": 307,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Drag": {
      "idx": 308,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.EdgeSwipe": {
      "idx": 310,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.LongPress": {
      "idx": 311,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.MultiTouch": {
      "idx": 312,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Pinch": {
      "idx": 313,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Recognizer": {
      "idx": 305,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Rotate": {
      "idx": 314,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.SingleTouch": {
      "idx": 306,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Swipe": {
      "idx": 309,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Tap": {
      "idx": 315,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Dom": {
      "idx": 36,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementPaint": {
      "idx": 47,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementSize": {
      "idx": 43,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Focus": {
      "idx": 316,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Gesture": {
      "idx": 37,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.MouseEnterLeave": {
      "idx": 471,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Publisher": {
      "idx": 31,
      "alias": [],
      "alternates": []
    },
    "Ext.field.InputMask": {
      "idx": 317,
      "alias": [],
      "alternates": []
    },
    "Ext.flash.Component": {
      "idx": 472,
      "alias": [
        "widget.flash"
      ],
      "alternates": [
        "Ext.FlashComponent"
      ]
    },
    "Ext.form.Basic": {
      "idx": 487,
      "alias": [],
      "alternates": [
        "Ext.form.BasicForm"
      ]
    },
    "Ext.form.CheckboxGroup": {
      "idx": 494,
      "alias": [
        "widget.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.form.CheckboxManager": {
      "idx": 492,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldAncestor": {
      "idx": 488,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldContainer": {
      "idx": 490,
      "alias": [
        "widget.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.form.FieldSet": {
      "idx": 495,
      "alias": [
        "widget.fieldset"
      ],
      "alternates": []
    },
    "Ext.form.Label": {
      "idx": 496,
      "alias": [
        "widget.label"
      ],
      "alternates": []
    },
    "Ext.form.Labelable": {
      "idx": 479,
      "alias": [],
      "alternates": []
    },
    "Ext.form.Panel": {
      "idx": 497,
      "alias": [
        "widget.form"
      ],
      "alternates": [
        "Ext.FormPanel",
        "Ext.form.FormPanel"
      ]
    },
    "Ext.form.RadioGroup": {
      "idx": 500,
      "alias": [
        "widget.radiogroup"
      ],
      "alternates": []
    },
    "Ext.form.RadioManager": {
      "idx": 498,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.Action": {
      "idx": 473,
      "alias": [],
      "alternates": [
        "Ext.form.Action"
      ]
    },
    "Ext.form.action.DirectAction": {
      "idx": 501,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.DirectLoad": {
      "idx": 502,
      "alias": [
        "formaction.directload"
      ],
      "alternates": [
        "Ext.form.Action.DirectLoad"
      ]
    },
    "Ext.form.action.DirectSubmit": {
      "idx": 503,
      "alias": [
        "formaction.directsubmit"
      ],
      "alternates": [
        "Ext.form.Action.DirectSubmit"
      ]
    },
    "Ext.form.action.Load": {
      "idx": 474,
      "alias": [
        "formaction.load"
      ],
      "alternates": [
        "Ext.form.Action.Load"
      ]
    },
    "Ext.form.action.StandardSubmit": {
      "idx": 476,
      "alias": [
        "formaction.standardsubmit"
      ],
      "alternates": []
    },
    "Ext.form.action.Submit": {
      "idx": 475,
      "alias": [
        "formaction.submit"
      ],
      "alternates": [
        "Ext.form.Action.Submit"
      ]
    },
    "Ext.form.field.Base": {
      "idx": 481,
      "alias": [
        "widget.field"
      ],
      "alternates": [
        "Ext.form.Field",
        "Ext.form.BaseField"
      ]
    },
    "Ext.form.field.Checkbox": {
      "idx": 493,
      "alias": [
        "widget.checkbox",
        "widget.checkboxfield"
      ],
      "alternates": [
        "Ext.form.Checkbox"
      ]
    },
    "Ext.form.field.ComboBox": {
      "idx": 519,
      "alias": [
        "widget.combo",
        "widget.combobox"
      ],
      "alternates": [
        "Ext.form.ComboBox"
      ]
    },
    "Ext.form.field.Date": {
      "idx": 522,
      "alias": [
        "widget.datefield"
      ],
      "alternates": [
        "Ext.form.DateField",
        "Ext.form.Date"
      ]
    },
    "Ext.form.field.Display": {
      "idx": 523,
      "alias": [
        "widget.displayfield"
      ],
      "alternates": [
        "Ext.form.DisplayField",
        "Ext.form.Display"
      ]
    },
    "Ext.form.field.Field": {
      "idx": 480,
      "alias": [],
      "alternates": []
    },
    "Ext.form.field.File": {
      "idx": 526,
      "alias": [
        "widget.filefield",
        "widget.fileuploadfield"
      ],
      "alternates": [
        "Ext.form.FileUploadField",
        "Ext.ux.form.FileUploadField",
        "Ext.form.File"
      ]
    },
    "Ext.form.field.FileButton": {
      "idx": 524,
      "alias": [
        "widget.filebutton"
      ],
      "alternates": []
    },
    "Ext.form.field.Hidden": {
      "idx": 527,
      "alias": [
        "widget.hidden",
        "widget.hiddenfield"
      ],
      "alternates": [
        "Ext.form.Hidden"
      ]
    },
    "Ext.form.field.HtmlEditor": {
      "idx": 536,
      "alias": [
        "widget.htmleditor"
      ],
      "alternates": [
        "Ext.form.HtmlEditor"
      ]
    },
    "Ext.form.field.Number": {
      "idx": 516,
      "alias": [
        "widget.numberfield"
      ],
      "alternates": [
        "Ext.form.NumberField",
        "Ext.form.Number"
      ]
    },
    "Ext.form.field.Picker": {
      "idx": 504,
      "alias": [
        "widget.pickerfield"
      ],
      "alternates": [
        "Ext.form.Picker"
      ]
    },
    "Ext.form.field.Radio": {
      "idx": 499,
      "alias": [
        "widget.radio",
        "widget.radiofield"
      ],
      "alternates": [
        "Ext.form.Radio"
      ]
    },
    "Ext.form.field.Spinner": {
      "idx": 515,
      "alias": [
        "widget.spinnerfield"
      ],
      "alternates": [
        "Ext.form.Spinner"
      ]
    },
    "Ext.form.field.Tag": {
      "idx": 538,
      "alias": [
        "widget.tagfield"
      ],
      "alternates": []
    },
    "Ext.form.field.Text": {
      "idx": 484,
      "alias": [
        "widget.textfield"
      ],
      "alternates": [
        "Ext.form.TextField",
        "Ext.form.Text"
      ]
    },
    "Ext.form.field.TextArea": {
      "idx": 485,
      "alias": [
        "widget.textarea",
        "widget.textareafield"
      ],
      "alternates": [
        "Ext.form.TextArea"
      ]
    },
    "Ext.form.field.Time": {
      "idx": 540,
      "alias": [
        "widget.timefield"
      ],
      "alternates": [
        "Ext.form.TimeField",
        "Ext.form.Time"
      ]
    },
    "Ext.form.field.Trigger": {
      "idx": 541,
      "alias": [
        "widget.trigger",
        "widget.triggerfield"
      ],
      "alternates": [
        "Ext.form.TriggerField",
        "Ext.form.TwinTriggerField",
        "Ext.form.Trigger"
      ]
    },
    "Ext.form.field.VTypes": {
      "idx": 482,
      "alias": [],
      "alternates": [
        "Ext.form.VTypes"
      ]
    },
    "Ext.form.trigger.Component": {
      "idx": 525,
      "alias": [
        "trigger.component"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Spinner": {
      "idx": 514,
      "alias": [
        "trigger.spinner"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Trigger": {
      "idx": 483,
      "alias": [
        "trigger.trigger"
      ],
      "alternates": []
    },
    "Ext.fx.Anim": {
      "idx": 71,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animation": {
      "idx": 327,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animator": {
      "idx": 66,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.CubicBezier": {
      "idx": 67,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.DrawPath": {
      "idx": 69,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Easing": {
      "idx": 68,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Manager": {
      "idx": 65,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.PropertyHandler": {
      "idx": 70,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Queue": {
      "idx": 64,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Runner": {
      "idx": 330,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.State": {
      "idx": 318,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Abstract": {
      "idx": 319,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Cube": {
      "idx": 331,
      "alias": [
        "animation.cube"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Fade": {
      "idx": 322,
      "alias": [
        "animation.fade",
        "animation.fadeIn"
      ],
      "alternates": [
        "Ext.fx.animation.FadeIn"
      ]
    },
    "Ext.fx.animation.FadeOut": {
      "idx": 323,
      "alias": [
        "animation.fadeOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Flip": {
      "idx": 324,
      "alias": [
        "animation.flip"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Pop": {
      "idx": 325,
      "alias": [
        "animation.pop",
        "animation.popIn"
      ],
      "alternates": [
        "Ext.fx.animation.PopIn"
      ]
    },
    "Ext.fx.animation.PopOut": {
      "idx": 326,
      "alias": [
        "animation.popOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Slide": {
      "idx": 320,
      "alias": [
        "animation.slide",
        "animation.slideIn"
      ],
      "alternates": [
        "Ext.fx.animation.SlideIn"
      ]
    },
    "Ext.fx.animation.SlideOut": {
      "idx": 321,
      "alias": [
        "animation.slideOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Wipe": {
      "idx": 332,
      "alias": [],
      "alternates": [
        "Ext.fx.animation.WipeIn"
      ]
    },
    "Ext.fx.animation.WipeOut": {
      "idx": 333,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Abstract": {
      "idx": 101,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Bounce": {
      "idx": 334,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.BoundMomentum": {
      "idx": 336,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.EaseIn": {
      "idx": 337,
      "alias": [
        "easing.ease-in"
      ],
      "alternates": []
    },
    "Ext.fx.easing.EaseOut": {
      "idx": 338,
      "alias": [
        "easing.ease-out"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Easing": {
      "idx": 339,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Linear": {
      "idx": 102,
      "alias": [
        "easing.linear"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Momentum": {
      "idx": 335,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.Css": {
      "idx": 328,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssAnimation": {
      "idx": 340,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssTransition": {
      "idx": 329,
      "alias": [],
      "alternates": [
        "Ext.Animator"
      ]
    },
    "Ext.fx.target.Component": {
      "idx": 63,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElement": {
      "idx": 59,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElementCSS": {
      "idx": 60,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeSprite": {
      "idx": 62,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Element": {
      "idx": 57,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.ElementCSS": {
      "idx": 58,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Sprite": {
      "idx": 61,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Target": {
      "idx": 56,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellContext": {
      "idx": 542,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellEditor": {
      "idx": 543,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ColumnComponentLayout": {
      "idx": 544,
      "alias": [
        "layout.columncomponent"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnLayout": {
      "idx": 547,
      "alias": [
        "layout.gridcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnManager": {
      "idx": 548,
      "alias": [],
      "alternates": [
        "Ext.grid.ColumnModel"
      ]
    },
    "Ext.grid.NavigationModel": {
      "idx": 549,
      "alias": [
        "view.navigation.grid"
      ],
      "alternates": []
    },
    "Ext.grid.Panel": {
      "idx": 555,
      "alias": [
        "widget.grid",
        "widget.gridpanel"
      ],
      "alternates": [
        "Ext.list.ListView",
        "Ext.ListView",
        "Ext.grid.GridPanel"
      ]
    },
    "Ext.grid.RowContext": {
      "idx": 556,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.RowEditor": {
      "idx": 558,
      "alias": [
        "widget.roweditor"
      ],
      "alternates": []
    },
    "Ext.grid.RowEditorButtons": {
      "idx": 557,
      "alias": [
        "widget.roweditorbuttons"
      ],
      "alternates": []
    },
    "Ext.grid.Scroller": {
      "idx": 559,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ViewDropZone": {
      "idx": 561,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.column.Action": {
      "idx": 569,
      "alias": [
        "widget.actioncolumn"
      ],
      "alternates": [
        "Ext.grid.ActionColumn"
      ]
    },
    "Ext.grid.column.ActionProxy": {
      "idx": 568,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.column.Boolean": {
      "idx": 570,
      "alias": [
        "widget.booleancolumn"
      ],
      "alternates": [
        "Ext.grid.BooleanColumn"
      ]
    },
    "Ext.grid.column.Check": {
      "idx": 571,
      "alias": [
        "widget.checkcolumn"
      ],
      "alternates": [
        "Ext.ux.CheckColumn",
        "Ext.grid.column.CheckColumn"
      ]
    },
    "Ext.grid.column.Column": {
      "idx": 567,
      "alias": [
        "widget.gridcolumn"
      ],
      "alternates": [
        "Ext.grid.Column"
      ]
    },
    "Ext.grid.column.Date": {
      "idx": 572,
      "alias": [
        "widget.datecolumn"
      ],
      "alternates": [
        "Ext.grid.DateColumn"
      ]
    },
    "Ext.grid.column.Number": {
      "idx": 573,
      "alias": [
        "widget.numbercolumn"
      ],
      "alternates": [
        "Ext.grid.NumberColumn"
      ]
    },
    "Ext.grid.column.RowNumberer": {
      "idx": 574,
      "alias": [
        "widget.rownumberer"
      ],
      "alternates": [
        "Ext.grid.RowNumberer"
      ]
    },
    "Ext.grid.column.Template": {
      "idx": 575,
      "alias": [
        "widget.templatecolumn"
      ],
      "alternates": [
        "Ext.grid.TemplateColumn"
      ]
    },
    "Ext.grid.column.Widget": {
      "idx": 576,
      "alias": [
        "widget.widgetcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.feature.AbstractSummary": {
      "idx": 578,
      "alias": [
        "feature.abstractsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Feature": {
      "idx": 577,
      "alias": [
        "feature.feature"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupStore": {
      "idx": 579,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.feature.Grouping": {
      "idx": 580,
      "alias": [
        "feature.grouping"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupingSummary": {
      "idx": 581,
      "alias": [
        "feature.groupingsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.RowBody": {
      "idx": 582,
      "alias": [
        "feature.rowbody"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Summary": {
      "idx": 583,
      "alias": [
        "feature.summary"
      ],
      "alternates": []
    },
    "Ext.grid.filters.Filters": {
      "idx": 596,
      "alias": [
        "plugin.gridfilters"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Base": {
      "idx": 588,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.Boolean": {
      "idx": 590,
      "alias": [
        "grid.filter.boolean"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Date": {
      "idx": 592,
      "alias": [
        "grid.filter.date"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.List": {
      "idx": 593,
      "alias": [
        "grid.filter.list"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.Number": {
      "idx": 594,
      "alias": [
        "grid.filter.number",
        "grid.filter.numeric"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.SingleFilter": {
      "idx": 589,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.filters.filter.String": {
      "idx": 595,
      "alias": [
        "grid.filter.string"
      ],
      "alternates": []
    },
    "Ext.grid.filters.filter.TriFilter": {
      "idx": 591,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.Container": {
      "idx": 566,
      "alias": [
        "widget.headercontainer"
      ],
      "alternates": []
    },
    "Ext.grid.header.DragZone": {
      "idx": 563,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.DropZone": {
      "idx": 564,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.HeaderContainer": {
      "idx": 597,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.Lockable": {
      "idx": 600,
      "alias": [],
      "alternates": [
        "Ext.grid.Lockable"
      ]
    },
    "Ext.grid.locking.RowSynchronizer": {
      "idx": 551,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.View": {
      "idx": 598,
      "alias": [],
      "alternates": [
        "Ext.grid.LockingView"
      ]
    },
    "Ext.grid.plugin.BufferedRenderer": {
      "idx": 601,
      "alias": [
        "plugin.bufferedrenderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.CellEditing": {
      "idx": 603,
      "alias": [
        "plugin.cellediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Clipboard": {
      "idx": 605,
      "alias": [
        "plugin.clipboard"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.DragDrop": {
      "idx": 606,
      "alias": [
        "plugin.gridviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Editing": {
      "idx": 602,
      "alias": [
        "editing.editing"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderReorderer": {
      "idx": 565,
      "alias": [
        "plugin.gridheaderreorderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderResizer": {
      "idx": 562,
      "alias": [
        "plugin.gridheaderresizer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowEditing": {
      "idx": 607,
      "alias": [
        "plugin.rowediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowExpander": {
      "idx": 608,
      "alias": [
        "plugin.rowexpander"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowWidget": {
      "idx": 609,
      "alias": [
        "plugin.rowwidget"
      ],
      "alternates": []
    },
    "Ext.grid.property.Grid": {
      "idx": 610,
      "alias": [
        "widget.propertygrid"
      ],
      "alternates": [
        "Ext.grid.PropertyGrid"
      ]
    },
    "Ext.grid.property.HeaderContainer": {
      "idx": 611,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyColumnModel"
      ]
    },
    "Ext.grid.property.Property": {
      "idx": 612,
      "alias": [],
      "alternates": [
        "Ext.PropGridProperty"
      ]
    },
    "Ext.grid.property.Reader": {
      "idx": 613,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.property.Store": {
      "idx": 614,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyStore"
      ]
    },
    "Ext.grid.selection.Cells": {
      "idx": 616,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Columns": {
      "idx": 617,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Replicator": {
      "idx": 618,
      "alias": [
        "plugin.selectionreplicator"
      ],
      "alternates": []
    },
    "Ext.grid.selection.Rows": {
      "idx": 619,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.Selection": {
      "idx": 615,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.SelectionExtender": {
      "idx": 620,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.selection.SpreadsheetModel": {
      "idx": 621,
      "alias": [
        "selection.spreadsheet"
      ],
      "alternates": []
    },
    "Ext.layout.Context": {
      "idx": 624,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.ContextItem": {
      "idx": 623,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Layout": {
      "idx": 398,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.SizeModel": {
      "idx": 397,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Auto": {
      "idx": 411,
      "alias": [
        "layout.autocomponent"
      ],
      "alternates": []
    },
    "Ext.layout.component.Body": {
      "idx": 626,
      "alias": [
        "layout.body"
      ],
      "alternates": []
    },
    "Ext.layout.component.BoundList": {
      "idx": 511,
      "alias": [
        "layout.boundlist"
      ],
      "alternates": []
    },
    "Ext.layout.component.Component": {
      "idx": 410,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Dock": {
      "idx": 441,
      "alias": [
        "layout.dock"
      ],
      "alternates": [
        "Ext.layout.component.AbstractDock"
      ]
    },
    "Ext.layout.component.FieldSet": {
      "idx": 627,
      "alias": [
        "layout.fieldset"
      ],
      "alternates": []
    },
    "Ext.layout.component.ProgressBar": {
      "idx": 412,
      "alias": [
        "layout.progressbar"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.FieldContainer": {
      "idx": 489,
      "alias": [
        "layout.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.HtmlEditor": {
      "idx": 533,
      "alias": [
        "layout.htmleditor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Absolute": {
      "idx": 628,
      "alias": [
        "layout.absolute"
      ],
      "alternates": [
        "Ext.layout.AbsoluteLayout"
      ]
    },
    "Ext.layout.container.Accordion": {
      "idx": 629,
      "alias": [
        "layout.accordion"
      ],
      "alternates": [
        "Ext.layout.AccordionLayout"
      ]
    },
    "Ext.layout.container.Anchor": {
      "idx": 451,
      "alias": [
        "layout.anchor"
      ],
      "alternates": [
        "Ext.layout.AnchorLayout"
      ]
    },
    "Ext.layout.container.Auto": {
      "idx": 400,
      "alias": [
        "layout.auto",
        "layout.autocontainer"
      ],
      "alternates": []
    },
    "Ext.layout.container.Border": {
      "idx": 631,
      "alias": [
        "layout.border"
      ],
      "alternates": [
        "Ext.layout.BorderLayout"
      ]
    },
    "Ext.layout.container.Box": {
      "idx": 430,
      "alias": [
        "layout.box"
      ],
      "alternates": [
        "Ext.layout.BoxLayout"
      ]
    },
    "Ext.layout.container.Card": {
      "idx": 632,
      "alias": [
        "layout.card"
      ],
      "alternates": [
        "Ext.layout.CardLayout"
      ]
    },
    "Ext.layout.container.Center": {
      "idx": 633,
      "alias": [
        "layout.center",
        "layout.ux.center"
      ],
      "alternates": [
        "Ext.ux.layout.Center"
      ]
    },
    "Ext.layout.container.CheckboxGroup": {
      "idx": 491,
      "alias": [
        "layout.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.layout.container.Column": {
      "idx": 454,
      "alias": [
        "layout.column"
      ],
      "alternates": [
        "Ext.layout.ColumnLayout"
      ]
    },
    "Ext.layout.container.ColumnSplitter": {
      "idx": 458,
      "alias": [
        "widget.columnsplitter"
      ],
      "alternates": []
    },
    "Ext.layout.container.ColumnSplitterTracker": {
      "idx": 457,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.Container": {
      "idx": 399,
      "alias": [
        "layout.container"
      ],
      "alternates": [
        "Ext.layout.ContainerLayout"
      ]
    },
    "Ext.layout.container.Dashboard": {
      "idx": 459,
      "alias": [
        "layout.dashboard"
      ],
      "alternates": []
    },
    "Ext.layout.container.Editor": {
      "idx": 403,
      "alias": [
        "layout.editor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Fit": {
      "idx": 545,
      "alias": [
        "layout.fit"
      ],
      "alternates": [
        "Ext.layout.FitLayout",
        "Ext.layout.Fit"
      ]
    },
    "Ext.layout.container.Form": {
      "idx": 634,
      "alias": [
        "layout.form"
      ],
      "alternates": [
        "Ext.layout.FormLayout"
      ]
    },
    "Ext.layout.container.HBox": {
      "idx": 431,
      "alias": [
        "layout.hbox"
      ],
      "alternates": [
        "Ext.layout.HBoxLayout"
      ]
    },
    "Ext.layout.container.SegmentedButton": {
      "idx": 420,
      "alias": [
        "layout.segmentedbutton"
      ],
      "alternates": []
    },
    "Ext.layout.container.Table": {
      "idx": 445,
      "alias": [
        "layout.table"
      ],
      "alternates": [
        "Ext.layout.TableLayout"
      ]
    },
    "Ext.layout.container.VBox": {
      "idx": 432,
      "alias": [
        "layout.vbox"
      ],
      "alternates": [
        "Ext.layout.VBoxLayout"
      ]
    },
    "Ext.layout.container.border.Region": {
      "idx": 114,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.boxOverflow.Menu": {
      "idx": 535,
      "alias": [
        "box.overflow.Menu",
        "box.overflow.menu"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Menu"
      ]
    },
    "Ext.layout.container.boxOverflow.None": {
      "idx": 426,
      "alias": [
        "box.overflow.None",
        "box.overflow.none"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.None"
      ]
    },
    "Ext.layout.container.boxOverflow.Scroller": {
      "idx": 427,
      "alias": [
        "box.overflow.Scroller",
        "box.overflow.scroller"
      ],
      "alternates": [
        "Ext.layout.boxOverflow.Scroller"
      ]
    },
    "Ext.list.AbstractTreeItem": {
      "idx": 341,
      "alias": [],
      "alternates": []
    },
    "Ext.list.RootTreeItem": {
      "idx": 342,
      "alias": [],
      "alternates": []
    },
    "Ext.list.Tree": {
      "idx": 345,
      "alias": [
        "widget.treelist"
      ],
      "alternates": []
    },
    "Ext.list.TreeItem": {
      "idx": 344,
      "alias": [
        "widget.treelistitem"
      ],
      "alternates": []
    },
    "Ext.menu.Bar": {
      "idx": 635,
      "alias": [
        "widget.menubar"
      ],
      "alternates": []
    },
    "Ext.menu.CheckItem": {
      "idx": 585,
      "alias": [
        "widget.menucheckitem"
      ],
      "alternates": []
    },
    "Ext.menu.ColorPicker": {
      "idx": 636,
      "alias": [
        "widget.colormenu"
      ],
      "alternates": []
    },
    "Ext.menu.DatePicker": {
      "idx": 637,
      "alias": [
        "widget.datemenu"
      ],
      "alternates": []
    },
    "Ext.menu.Item": {
      "idx": 584,
      "alias": [
        "widget.menuitem"
      ],
      "alternates": [
        "Ext.menu.TextItem"
      ]
    },
    "Ext.menu.Manager": {
      "idx": 416,
      "alias": [],
      "alternates": [
        "Ext.menu.MenuMgr"
      ]
    },
    "Ext.menu.Menu": {
      "idx": 587,
      "alias": [
        "widget.menu"
      ],
      "alternates": []
    },
    "Ext.menu.Separator": {
      "idx": 586,
      "alias": [
        "widget.menuseparator"
      ],
      "alternates": []
    },
    "Ext.mixin.Accessible": {
      "idx": 86,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Bindable": {
      "idx": 80,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Bufferable": {
      "idx": 346,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ComponentDelegation": {
      "idx": 81,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ConfigProxy": {
      "idx": 347,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ConfigState": {
      "idx": 348,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Container": {
      "idx": 349,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Dirty": {
      "idx": 192,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Factoryable": {
      "idx": 12,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Focusable": {
      "idx": 85,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.FocusableContainer": {
      "idx": 352,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Hookable": {
      "idx": 353,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Identifiable": {
      "idx": 3,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Inheritable": {
      "idx": 79,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.ItemRippler": {
      "idx": 343,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Keyboard": {
      "idx": 84,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Mashup": {
      "idx": 354,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Observable": {
      "idx": 4,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Pluggable": {
      "idx": 83,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Queryable": {
      "idx": 231,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Responsive": {
      "idx": 355,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Selectable": {
      "idx": 356,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.StoreWatcher": {
      "idx": 357,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.StyleCacher": {
      "idx": 358,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Templatable": {
      "idx": 38,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Traversable": {
      "idx": 359,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Bar": {
      "idx": 422,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.DD": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Header": {
      "idx": 425,
      "alias": [
        "widget.header"
      ],
      "alternates": []
    },
    "Ext.panel.Panel": {
      "idx": 444,
      "alias": [
        "widget.panel"
      ],
      "alternates": [
        "Ext.Panel"
      ]
    },
    "Ext.panel.Pinnable": {
      "idx": 638,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Proxy": {
      "idx": 439,
      "alias": [],
      "alternates": [
        "Ext.dd.PanelProxy"
      ]
    },
    "Ext.panel.Table": {
      "idx": 546,
      "alias": [
        "widget.tablepanel"
      ],
      "alternates": []
    },
    "Ext.panel.Title": {
      "idx": 423,
      "alias": [
        "widget.title"
      ],
      "alternates": []
    },
    "Ext.panel.Tool": {
      "idx": 424,
      "alias": [
        "widget.tool"
      ],
      "alternates": []
    },
    "Ext.parse.Parser": {
      "idx": 211,
      "alias": [],
      "alternates": []
    },
    "Ext.parse.Symbol": {
      "idx": 205,
      "alias": [],
      "alternates": []
    },
    "Ext.parse.Tokenizer": {
      "idx": 204,
      "alias": [],
      "alternates": []
    },
    "Ext.parse.symbol.Constant": {
      "idx": 206,
      "alias": [],
      "alternates": []
    },
    "Ext.parse.symbol.Infix": {
      "idx": 207,
      "alias": [],
      "alternates": []
    },
    "Ext.parse.symbol.InfixRight": {
      "idx": 208,
      "alias": [],
      "alternates": []
    },
    "Ext.parse.symbol.Paren": {
      "idx": 209,
      "alias": [],
      "alternates": []
    },
    "Ext.parse.symbol.Prefix": {
      "idx": 210,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Accumulator": {
      "idx": 360,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Monitor": {
      "idx": 361,
      "alias": [],
      "alternates": [
        "Ext.Perf"
      ]
    },
    "Ext.picker.Color": {
      "idx": 532,
      "alias": [
        "widget.colorpicker"
      ],
      "alternates": [
        "Ext.ColorPalette"
      ]
    },
    "Ext.picker.Date": {
      "idx": 521,
      "alias": [
        "widget.datepicker"
      ],
      "alternates": [
        "Ext.DatePicker"
      ]
    },
    "Ext.picker.Month": {
      "idx": 520,
      "alias": [
        "widget.monthpicker"
      ],
      "alternates": [
        "Ext.MonthPicker"
      ]
    },
    "Ext.picker.Time": {
      "idx": 539,
      "alias": [
        "widget.timepicker"
      ],
      "alternates": []
    },
    "Ext.plugin.Abstract": {
      "idx": 82,
      "alias": [],
      "alternates": [
        "Ext.AbstractPlugin"
      ]
    },
    "Ext.plugin.AbstractClipboard": {
      "idx": 604,
      "alias": [],
      "alternates": []
    },
    "Ext.plugin.LazyItems": {
      "idx": 639,
      "alias": [
        "plugin.lazyitems"
      ],
      "alternates": []
    },
    "Ext.plugin.Manager": {
      "idx": 99,
      "alias": [],
      "alternates": [
        "Ext.PluginManager",
        "Ext.PluginMgr"
      ]
    },
    "Ext.plugin.MouseEnter": {
      "idx": 362,
      "alias": [
        "plugin.mouseenter"
      ],
      "alternates": []
    },
    "Ext.plugin.Responsive": {
      "idx": 448,
      "alias": [
        "plugin.responsive"
      ],
      "alternates": []
    },
    "Ext.plugin.Viewport": {
      "idx": 449,
      "alias": [
        "plugin.viewport"
      ],
      "alternates": []
    },
    "Ext.promise.Consequence": {
      "idx": 7,
      "alias": [],
      "alternates": []
    },
    "Ext.promise.Deferred": {
      "idx": 8,
      "alias": [],
      "alternates": []
    },
    "Ext.promise.Promise": {
      "idx": 9,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.BorderSplitter": {
      "idx": 630,
      "alias": [
        "widget.bordersplitter"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitterTracker": {
      "idx": 640,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Handle": {
      "idx": 641,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.ResizeTracker": {
      "idx": 642,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Resizer": {
      "idx": 643,
      "alias": [],
      "alternates": [
        "Ext.Resizable"
      ]
    },
    "Ext.resizer.Splitter": {
      "idx": 429,
      "alias": [
        "widget.splitter"
      ],
      "alternates": []
    },
    "Ext.resizer.SplitterTracker": {
      "idx": 456,
      "alias": [],
      "alternates": []
    },
    "Ext.route.Action": {
      "idx": 117,
      "alias": [],
      "alternates": []
    },
    "Ext.route.Mixin": {
      "idx": 121,
      "alias": [],
      "alternates": []
    },
    "Ext.route.Route": {
      "idx": 118,
      "alias": [],
      "alternates": []
    },
    "Ext.route.Router": {
      "idx": 120,
      "alias": [],
      "alternates": []
    },
    "Ext.scroll.LockingScroller": {
      "idx": 599,
      "alias": [
        "scroller.locking"
      ],
      "alternates": []
    },
    "Ext.scroll.Scroller": {
      "idx": 106,
      "alias": [
        "scroller.scroller"
      ],
      "alternates": []
    },
    "Ext.scroll.TableScroller": {
      "idx": 553,
      "alias": [
        "scroller.table"
      ],
      "alternates": []
    },
    "Ext.selection.CellModel": {
      "idx": 644,
      "alias": [
        "selection.cellmodel"
      ],
      "alternates": []
    },
    "Ext.selection.CheckboxModel": {
      "idx": 646,
      "alias": [
        "selection.checkboxmodel"
      ],
      "alternates": []
    },
    "Ext.selection.DataViewModel": {
      "idx": 506,
      "alias": [
        "selection.dataviewmodel"
      ],
      "alternates": []
    },
    "Ext.selection.Model": {
      "idx": 505,
      "alias": [
        "selection.abstract"
      ],
      "alternates": [
        "Ext.AbstractSelectionModel"
      ]
    },
    "Ext.selection.RowModel": {
      "idx": 645,
      "alias": [
        "selection.rowmodel"
      ],
      "alternates": []
    },
    "Ext.selection.TreeModel": {
      "idx": 647,
      "alias": [
        "selection.treemodel"
      ],
      "alternates": []
    },
    "Ext.slider.Multi": {
      "idx": 650,
      "alias": [
        "widget.multislider"
      ],
      "alternates": [
        "Ext.slider.MultiSlider"
      ]
    },
    "Ext.slider.Single": {
      "idx": 651,
      "alias": [
        "widget.slider",
        "widget.sliderfield"
      ],
      "alternates": [
        "Ext.Slider",
        "Ext.form.SliderField",
        "Ext.slider.SingleSlider",
        "Ext.slider.Slider"
      ]
    },
    "Ext.slider.Thumb": {
      "idx": 648,
      "alias": [],
      "alternates": []
    },
    "Ext.slider.Tip": {
      "idx": 649,
      "alias": [
        "widget.slidertip"
      ],
      "alternates": []
    },
    "Ext.slider.Widget": {
      "idx": 652,
      "alias": [
        "widget.sliderwidget"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bar": {
      "idx": 371,
      "alias": [
        "widget.sparklinebar"
      ],
      "alternates": []
    },
    "Ext.sparkline.BarBase": {
      "idx": 369,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Base": {
      "idx": 368,
      "alias": [
        "widget.sparkline"
      ],
      "alternates": []
    },
    "Ext.sparkline.Box": {
      "idx": 372,
      "alias": [
        "widget.sparklinebox"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bullet": {
      "idx": 373,
      "alias": [
        "widget.sparklinebullet"
      ],
      "alternates": []
    },
    "Ext.sparkline.CanvasBase": {
      "idx": 364,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.CanvasCanvas": {
      "idx": 365,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Discrete": {
      "idx": 374,
      "alias": [
        "widget.sparklinediscrete"
      ],
      "alternates": []
    },
    "Ext.sparkline.Line": {
      "idx": 375,
      "alias": [
        "widget.sparklineline"
      ],
      "alternates": []
    },
    "Ext.sparkline.Pie": {
      "idx": 376,
      "alias": [
        "widget.sparklinepie"
      ],
      "alternates": []
    },
    "Ext.sparkline.RangeMap": {
      "idx": 370,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Shape": {
      "idx": 363,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.TriState": {
      "idx": 377,
      "alias": [
        "widget.sparklinetristate"
      ],
      "alternates": []
    },
    "Ext.sparkline.VmlCanvas": {
      "idx": 366,
      "alias": [],
      "alternates": []
    },
    "Ext.state.CookieProvider": {
      "idx": 653,
      "alias": [],
      "alternates": []
    },
    "Ext.state.LocalStorageProvider": {
      "idx": 654,
      "alias": [
        "state.localstorage"
      ],
      "alternates": []
    },
    "Ext.state.Manager": {
      "idx": 111,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Provider": {
      "idx": 110,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Stateful": {
      "idx": 112,
      "alias": [],
      "alternates": []
    },
    "Ext.tab.Bar": {
      "idx": 656,
      "alias": [
        "widget.tabbar"
      ],
      "alternates": []
    },
    "Ext.tab.Panel": {
      "idx": 657,
      "alias": [
        "widget.tabpanel"
      ],
      "alternates": [
        "Ext.TabPanel"
      ]
    },
    "Ext.tab.Tab": {
      "idx": 655,
      "alias": [
        "widget.tab"
      ],
      "alternates": []
    },
    "Ext.tip.QuickTip": {
      "idx": 530,
      "alias": [
        "widget.quicktip"
      ],
      "alternates": [
        "Ext.QuickTip"
      ]
    },
    "Ext.tip.QuickTipManager": {
      "idx": 531,
      "alias": [],
      "alternates": [
        "Ext.QuickTips"
      ]
    },
    "Ext.tip.Tip": {
      "idx": 528,
      "alias": [
        "widget.tip"
      ],
      "alternates": [
        "Ext.Tip"
      ]
    },
    "Ext.tip.ToolTip": {
      "idx": 529,
      "alias": [
        "widget.tooltip"
      ],
      "alternates": [
        "Ext.ToolTip"
      ]
    },
    "Ext.toolbar.Breadcrumb": {
      "idx": 658,
      "alias": [
        "widget.breadcrumb"
      ],
      "alternates": []
    },
    "Ext.toolbar.Fill": {
      "idx": 659,
      "alias": [
        "widget.tbfill"
      ],
      "alternates": [
        "Ext.Toolbar.Fill"
      ]
    },
    "Ext.toolbar.Item": {
      "idx": 512,
      "alias": [
        "widget.tbitem"
      ],
      "alternates": [
        "Ext.Toolbar.Item"
      ]
    },
    "Ext.toolbar.Paging": {
      "idx": 517,
      "alias": [
        "widget.pagingtoolbar"
      ],
      "alternates": [
        "Ext.PagingToolbar"
      ]
    },
    "Ext.toolbar.Separator": {
      "idx": 534,
      "alias": [
        "widget.tbseparator"
      ],
      "alternates": [
        "Ext.Toolbar.Separator"
      ]
    },
    "Ext.toolbar.Spacer": {
      "idx": 660,
      "alias": [
        "widget.tbspacer"
      ],
      "alternates": [
        "Ext.Toolbar.Spacer"
      ]
    },
    "Ext.toolbar.TextItem": {
      "idx": 513,
      "alias": [
        "widget.tbtext"
      ],
      "alternates": [
        "Ext.Toolbar.TextItem"
      ]
    },
    "Ext.toolbar.Toolbar": {
      "idx": 433,
      "alias": [
        "widget.toolbar"
      ],
      "alternates": [
        "Ext.Toolbar"
      ]
    },
    "Ext.tree.Column": {
      "idx": 661,
      "alias": [
        "widget.treecolumn"
      ],
      "alternates": []
    },
    "Ext.tree.NavigationModel": {
      "idx": 662,
      "alias": [
        "view.navigation.tree"
      ],
      "alternates": []
    },
    "Ext.tree.Panel": {
      "idx": 664,
      "alias": [
        "widget.treepanel"
      ],
      "alternates": [
        "Ext.tree.TreePanel",
        "Ext.TreePanel"
      ]
    },
    "Ext.tree.View": {
      "idx": 663,
      "alias": [
        "widget.treeview"
      ],
      "alternates": []
    },
    "Ext.tree.ViewDragZone": {
      "idx": 666,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.ViewDropZone": {
      "idx": 667,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.plugin.TreeViewDragDrop": {
      "idx": 668,
      "alias": [
        "plugin.treeviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.util.AbstractMixedCollection": {
      "idx": 51,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Animate": {
      "idx": 72,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Bag": {
      "idx": 183,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Base64": {
      "idx": 378,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSS": {
      "idx": 100,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSV": {
      "idx": 380,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ClickRepeater": {
      "idx": 381,
      "alias": [],
      "alternates": [
        "Ext.util.TapRepeater"
      ]
    },
    "Ext.util.Collection": {
      "idx": 126,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CollectionKey": {
      "idx": 124,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Color": {
      "idx": 367,
      "alias": [],
      "alternates": [
        "Ext.draw.Color"
      ]
    },
    "Ext.util.ComponentDragger": {
      "idx": 477,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Cookies": {
      "idx": 382,
      "alias": [],
      "alternates": []
    },
    "Ext.util.DelimitedValue": {
      "idx": 379,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ElementContainer": {
      "idx": 108,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Event": {
      "idx": 2,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Filter": {
      "idx": 49,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FilterCollection": {
      "idx": 171,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Floating": {
      "idx": 107,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Fly": {
      "idx": 203,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Format": {
      "idx": 90,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Group": {
      "idx": 163,
      "alias": [],
      "alternates": []
    },
    "Ext.util.GroupCollection": {
      "idx": 172,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Grouper": {
      "idx": 125,
      "alias": [],
      "alternates": []
    },
    "Ext.util.HashMap": {
      "idx": 5,
      "alias": [],
      "alternates": []
    },
    "Ext.util.History": {
      "idx": 119,
      "alias": [],
      "alternates": [
        "Ext.History"
      ]
    },
    "Ext.util.Inflector": {
      "idx": 134,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ItemCollection": {
      "idx": 383,
      "alias": [],
      "alternates": [
        "Ext.ItemCollection"
      ]
    },
    "Ext.util.KeyMap": {
      "idx": 350,
      "alias": [],
      "alternates": [
        "Ext.KeyMap"
      ]
    },
    "Ext.util.KeyNav": {
      "idx": 351,
      "alias": [],
      "alternates": [
        "Ext.KeyNav"
      ]
    },
    "Ext.util.LocalStorage": {
      "idx": 384,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LruCache": {
      "idx": 22,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Memento": {
      "idx": 442,
      "alias": [],
      "alternates": []
    },
    "Ext.util.MixedCollection": {
      "idx": 54,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ObjectTemplate": {
      "idx": 128,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Observable": {
      "idx": 50,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Offset": {
      "idx": 32,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PaintMonitor": {
      "idx": 46,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Point": {
      "idx": 34,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable": {
      "idx": 25,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ProtoElement": {
      "idx": 97,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Queue": {
      "idx": 622,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Region": {
      "idx": 33,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Renderable": {
      "idx": 109,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Schedulable": {
      "idx": 194,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Scheduler": {
      "idx": 184,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SizeMonitor": {
      "idx": 42,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sortable": {
      "idx": 53,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sorter": {
      "idx": 52,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SorterCollection": {
      "idx": 170,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Spans": {
      "idx": 385,
      "alias": [],
      "alternates": []
    },
    "Ext.util.StoreHolder": {
      "idx": 408,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TSV": {
      "idx": 386,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TaskManager": {
      "idx": 387,
      "alias": [],
      "alternates": [
        "Ext.TaskManager"
      ]
    },
    "Ext.util.TaskRunner": {
      "idx": 55,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TextMetrics": {
      "idx": 388,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateCompiler": {
      "idx": 93,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateParser": {
      "idx": 92,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.Abstract": {
      "idx": 44,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.CssAnimation": {
      "idx": 45,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.OverflowChange": {
      "idx": 389,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Abstract": {
      "idx": 40,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.OverflowChange": {
      "idx": 390,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Scroll": {
      "idx": 41,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Abstract": {
      "idx": 103,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssPosition": {
      "idx": 391,
      "alias": [
        "translatable.cssposition"
      ],
      "alternates": []
    },
    "Ext.util.translatable.CssTransform": {
      "idx": 392,
      "alias": [
        "translatable.csstransform"
      ],
      "alternates": []
    },
    "Ext.util.translatable.Dom": {
      "idx": 104,
      "alias": [
        "translatable.dom"
      ],
      "alternates": []
    },
    "Ext.util.translatable.ScrollParent": {
      "idx": 393,
      "alias": [
        "translatable.scrollparent"
      ],
      "alternates": []
    },
    "Ext.util.translatable.ScrollPosition": {
      "idx": 105,
      "alias": [
        "translatable.scrollposition"
      ],
      "alternates": []
    },
    "Ext.view.AbstractView": {
      "idx": 508,
      "alias": [],
      "alternates": []
    },
    "Ext.view.BoundList": {
      "idx": 518,
      "alias": [
        "widget.boundlist"
      ],
      "alternates": [
        "Ext.BoundList"
      ]
    },
    "Ext.view.BoundListKeyNav": {
      "idx": 510,
      "alias": [
        "view.navigation.boundlist"
      ],
      "alternates": []
    },
    "Ext.view.DragZone": {
      "idx": 665,
      "alias": [],
      "alternates": []
    },
    "Ext.view.DropZone": {
      "idx": 560,
      "alias": [],
      "alternates": []
    },
    "Ext.view.MultiSelector": {
      "idx": 670,
      "alias": [
        "widget.multiselector"
      ],
      "alternates": []
    },
    "Ext.view.MultiSelectorSearch": {
      "idx": 669,
      "alias": [
        "widget.multiselector-search"
      ],
      "alternates": []
    },
    "Ext.view.NavigationModel": {
      "idx": 507,
      "alias": [
        "view.navigation.default"
      ],
      "alternates": []
    },
    "Ext.view.NodeCache": {
      "idx": 552,
      "alias": [],
      "alternates": []
    },
    "Ext.view.Table": {
      "idx": 554,
      "alias": [
        "widget.gridview",
        "widget.tableview"
      ],
      "alternates": [
        "Ext.grid.View"
      ]
    },
    "Ext.view.TableLayout": {
      "idx": 550,
      "alias": [
        "layout.tableview"
      ],
      "alternates": []
    },
    "Ext.view.TagKeyNav": {
      "idx": 537,
      "alias": [
        "view.navigation.tagfield"
      ],
      "alternates": []
    },
    "Ext.view.View": {
      "idx": 509,
      "alias": [
        "widget.dataview"
      ],
      "alternates": [
        "Ext.DataView"
      ]
    },
    "Ext.window.MessageBox": {
      "idx": 486,
      "alias": [
        "widget.messagebox"
      ],
      "alternates": []
    },
    "Ext.window.Toast": {
      "idx": 671,
      "alias": [
        "widget.toast"
      ],
      "alternates": []
    },
    "Ext.window.Window": {
      "idx": 478,
      "alias": [
        "widget.window"
      ],
      "alternates": [
        "Ext.Window"
      ]
    }
  },
  "packages": {
    "classic": {
      "css": true,
      "included": true,
      "namespace": "Ext",
      "properties": {
        "skip.sass": 1,
        "skip.pkg": 1,
        "skip.slice": 1
      },
      "required": true,
      "requires": [
        "ext",
        "core",
        "classic"
      ],
      "version": "6.5.0"
    },
    "cmd": {
      "version": "6.5.0.180"
    },
    "core": {
      "css": true,
      "included": true,
      "properties": {
        "skip.slice": 1,
        "skip.style": 1,
        "skip.pkg": 1,
        "package.tags.classdefs": "class"
      },
      "required": true,
      "requires": [
        "ext"
      ],
      "version": "6.5.0"
    },
    "ext": {
      "css": true,
      "included": true,
      "license": "commercial",
      "namespace": "Ext",
      "properties": {
        "skip.sass": 1,
        "skip.slice": 1
      },
      "required": true,
      "requires": [],
      "version": "6.5.0.775"
    }
  },
  "bootRelative": true
});
// @tag core
// @define Ext.Boot
var Ext = Ext || {};
//<editor-fold desc="Boot">
/**
 * @class Ext.Boot
 * @singleton
 * @private
 */
Ext.Boot = Ext.Boot || (function(emptyFn) {
    var doc = document,
        _emptyArray = [],
        _config = {
            /**
             * @cfg {Boolean} [disableCaching=true]
             * If `true` current timestamp is added to script URL's to prevent caching.
             * In debug builds, adding a "cache" or "disableCacheBuster" query parameter
             * to the page's URL will set this to `false`.
             */
            disableCaching: (/[?&](?:cache|disableCacheBuster)\b/i.test(location.search) || !(/http[s]?\:/i.test(location.href)) || /(^|[ ;])ext-cache=1/.test(doc.cookie)) ? false : true,
            /**
             * @cfg {String} [disableCachingParam="_dc"]
             * The query parameter name for the cache buster's timestamp.
             */
            disableCachingParam: '_dc',
            /**
             * @cfg {Boolean} loadDelay
             * Millisecond delay between asynchronous script injection (prevents stack
             * overflow on some user agents) 'false' disables delay but potentially
             * increases stack load.
             */
            loadDelay: false,
            /**
             * @cfg {Boolean} preserveScripts
             * `false` to remove asynchronously loaded scripts, `true` to retain script
             * element for browser debugger compatibility and improved load performance.
             */
            preserveScripts: true,
            /**
             * @cfg {String} [charset=UTF-8]
             * Optional charset to specify encoding of dynamic content.
             */
            charset: 'UTF-8'
        },
        _assetConfig = {},
        cssRe = /\.css(?:\?|$)/i,
        resolverEl = doc.createElement('a'),
        isBrowser = typeof window !== 'undefined',
        _environment = {
            browser: isBrowser,
            node: !isBrowser && (typeof require === 'function'),
            phantom: (window && (window._phantom || window.callPhantom)) || /PhantomJS/.test(window.navigator.userAgent)
        },
        _tags = (Ext.platformTags = {}),
        // All calls to _debug are commented out to speed up old browsers a bit;
        // yes that makes a difference because the cost of concatenating strings
        // and passing them into _debug() adds up pretty quickly.
        _debug = function(message) {},
        //console.log(message);
        _apply = function(object, config, defaults) {
            if (defaults) {
                _apply(object, defaults);
            }
            if (object && config && typeof config === 'object') {
                for (var i in config) {
                    object[i] = config[i];
                }
            }
            return object;
        },
        _merge = function() {
            var lowerCase = false,
                obj = Array.prototype.shift.call(arguments),
                index, i, len, value;
            if (typeof arguments[arguments.length - 1] === 'boolean') {
                lowerCase = Array.prototype.pop.call(arguments);
            }
            len = arguments.length;
            for (index = 0; index < len; index++) {
                value = arguments[index];
                if (typeof value === 'object') {
                    for (i in value) {
                        obj[lowerCase ? i.toLowerCase() : i] = value[i];
                    }
                }
            }
            return obj;
        },
        _getKeys = (typeof Object.keys == 'function') ? function(object) {
            if (!object) {
                return [];
            }
            return Object.keys(object);
        } : function(object) {
            var keys = [],
                property;
            for (property in object) {
                if (object.hasOwnProperty(property)) {
                    keys.push(property);
                }
            }
            return keys;
        },
        /*
     * The Boot loader class manages Request objects that contain one or
     * more individual urls that need to be loaded.  Requests can be performed
     * synchronously or asynchronously, but will always evaluate urls in the
     * order specified on the request object.
     */
        Boot = {
            loading: 0,
            loaded: 0,
            apply: _apply,
            env: _environment,
            config: _config,
            /**
             * @cfg {Object} assetConfig
             * A map (url->assetConfig) that contains information about assets loaded by the Microlaoder.
             */
            assetConfig: _assetConfig,
            // Keyed by absolute URL this object holds "true" if that URL is already loaded
            // or an array of callbacks to call once it loads.
            scripts: {},
            /*
                 Entry objects

                 'http://foo.com/bar/baz/Thing.js': {
                 done: true,
                 el: scriptEl || linkEl,
                 preserve: true,
                 requests: [ request1, ... ]
                 }
                 */
            /**
             * contains the current script name being loaded
             * (loadSync or sequential load only)
             */
            currentFile: null,
            suspendedQueue: [],
            currentRequest: null,
            // when loadSync is called, need to cause subsequent load requests to also be loadSync,
            // eg, when Ext.require(...) is called
            syncMode: false,
            /*
             * simple helper method for debugging
             */
            debug: _debug,
            /**
             * enables / disables loading scripts via script / link elements rather
             * than using ajax / eval
             */
            useElements: true,
            listeners: [],
            Request: Request,
            Entry: Entry,
            allowMultipleBrowsers: false,
            browserNames: {
                ie: 'IE',
                firefox: 'Firefox',
                safari: 'Safari',
                chrome: 'Chrome',
                opera: 'Opera',
                dolfin: 'Dolfin',
                edge: 'Edge',
                webosbrowser: 'webOSBrowser',
                chromeMobile: 'ChromeMobile',
                chromeiOS: 'ChromeiOS',
                silk: 'Silk',
                other: 'Other'
            },
            osNames: {
                ios: 'iOS',
                android: 'Android',
                windowsPhone: 'WindowsPhone',
                webos: 'webOS',
                blackberry: 'BlackBerry',
                rimTablet: 'RIMTablet',
                mac: 'MacOS',
                win: 'Windows',
                tizen: 'Tizen',
                linux: 'Linux',
                bada: 'Bada',
                chromeOS: 'ChromeOS',
                other: 'Other'
            },
            browserPrefixes: {
                ie: 'MSIE ',
                edge: 'Edge/',
                firefox: 'Firefox/',
                chrome: 'Chrome/',
                safari: 'Version/',
                opera: 'OPR/',
                dolfin: 'Dolfin/',
                webosbrowser: 'wOSBrowser/',
                chromeMobile: 'CrMo/',
                chromeiOS: 'CriOS/',
                silk: 'Silk/'
            },
            // When a UA reports multiple browsers this list is used to prioritize the 'real' browser
            // lower index number will win
            browserPriority: [
                'edge',
                'opera',
                'dolfin',
                'webosbrowser',
                'silk',
                'chromeiOS',
                'chromeMobile',
                'ie',
                'firefox',
                'safari',
                'chrome'
            ],
            osPrefixes: {
                tizen: '(Tizen )',
                ios: 'i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ',
                android: '(Android |HTC_|Silk/)',
                // Some HTC devices ship with an OSX userAgent by default,
                // so we need to add a direct check for HTC_
                windowsPhone: 'Windows Phone ',
                blackberry: '(?:BlackBerry|BB)(?:.*)Version/',
                rimTablet: 'RIM Tablet OS ',
                webos: '(?:webOS|hpwOS)/',
                bada: 'Bada/',
                chromeOS: 'CrOS '
            },
            fallbackOSPrefixes: {
                windows: 'win',
                mac: 'mac',
                linux: 'linux'
            },
            devicePrefixes: {
                iPhone: 'iPhone',
                iPod: 'iPod',
                iPad: 'iPad'
            },
            maxIEVersion: 12,
            /**
             * The default function that detects various platforms and sets tags
             * in the platform map accordingly.  Examples are iOS, android, tablet, etc.
             * @param tags the set of tags to populate
             */
            detectPlatformTags: function() {
                var me = this,
                    ua = navigator.userAgent,
                    isMobile = /Mobile(\/|\s)/.test(ua),
                    element = document.createElement('div'),
                    isEventSupported = function(name, tag) {
                        if (tag === undefined) {
                            tag = window;
                        }
                        var eventName = 'on' + name.toLowerCase(),
                            isSupported = (eventName in element);
                        if (!isSupported) {
                            if (element.setAttribute && element.removeAttribute) {
                                element.setAttribute(eventName, '');
                                isSupported = typeof element[eventName] === 'function';
                                if (typeof element[eventName] !== 'undefined') {
                                    element[eventName] = undefined;
                                }
                                element.removeAttribute(eventName);
                            }
                        }
                        return isSupported;
                    },
                    // Browser Detection
                    getBrowsers = function() {
                        var browsers = {},
                            maxIEVersion, prefix, value, key, index, len, match, version, matched;
                        // MS Edge browser (and possibly others) can report multiple browsers in the UserAgent
                        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240"
                        // we use this to prioritize the actual browser in this situation
                        len = me.browserPriority.length;
                        for (index = 0; index < len; index++) {
                            key = me.browserPriority[index];
                            if (!matched) {
                                value = me.browserPrefixes[key];
                                match = ua.match(new RegExp('(' + value + ')([\\w\\._]+)'));
                                version = match && match.length > 1 ? parseInt(match[2]) : 0;
                                if (version) {
                                    matched = true;
                                }
                            } else {
                                version = 0;
                            }
                            browsers[key] = version;
                        }
                        //Deal with IE document mode
                        if (browsers.ie) {
                            var mode = document.documentMode;
                            if (mode >= 8) {
                                browsers.ie = mode;
                            }
                        }
                        // Fancy IE greater than and less then quick tags
                        version = browsers.ie || false;
                        maxIEVersion = Math.max(version, me.maxIEVersion);
                        for (index = 8; index <= maxIEVersion; ++index) {
                            prefix = 'ie' + index;
                            browsers[prefix + 'm'] = version ? version <= index : 0;
                            browsers[prefix] = version ? version === index : 0;
                            browsers[prefix + 'p'] = version ? version >= index : 0;
                        }
                        return browsers;
                    },
                    //OS Detection
                    getOperatingSystems = function() {
                        var systems = {},
                            value, key, keys, index, len, match, matched, version, activeCount;
                        keys = _getKeys(me.osPrefixes);
                        len = keys.length;
                        for (index = 0 , activeCount = 0; index < len; index++) {
                            key = keys[index];
                            value = me.osPrefixes[key];
                            match = ua.match(new RegExp('(' + value + ')([^\\s;]+)'));
                            matched = match ? match[1] : null;
                            // This is here because some HTC android devices show an OSX Snow Leopard userAgent by default.
                            // And the Kindle Fire doesn't have any indicator of Android as the OS in its User Agent
                            if (matched && (matched === 'HTC_' || matched === 'Silk/')) {
                                version = 2.3;
                            } else {
                                version = match && match.length > 1 ? parseFloat(match[match.length - 1]) : 0;
                            }
                            if (version) {
                                activeCount++;
                            }
                            systems[key] = version;
                        }
                        keys = _getKeys(me.fallbackOSPrefixes);
                        // If no OS could be found we resort to the fallbacks, otherwise we just
                        // falsify the fallbacks
                        len = keys.length;
                        for (index = 0; index < len; index++) {
                            key = keys[index];
                            // No OS was detected from osPrefixes
                            if (activeCount === 0) {
                                value = me.fallbackOSPrefixes[key];
                                match = ua.toLowerCase().match(new RegExp(value));
                                systems[key] = match ? true : 0;
                            } else {
                                systems[key] = 0;
                            }
                        }
                        return systems;
                    },
                    // Device Detection
                    getDevices = function() {
                        var devices = {},
                            value, key, keys, index, len, match;
                        keys = _getKeys(me.devicePrefixes);
                        len = keys.length;
                        for (index = 0; index < len; index++) {
                            key = keys[index];
                            value = me.devicePrefixes[key];
                            match = ua.match(new RegExp(value));
                            devices[key] = match ? true : 0;
                        }
                        return devices;
                    },
                    browsers = getBrowsers(),
                    systems = getOperatingSystems(),
                    devices = getDevices(),
                    platformParams = Boot.loadPlatformsParam();
                // We apply platformParams from the query here first to allow for forced user valued
                // to be used in calculation of generated tags
                _merge(_tags, browsers, systems, devices, platformParams, true);
                _tags.phone = !!((_tags.iphone || _tags.ipod) || (!_tags.silk && (_tags.android && (_tags.android < 3 || isMobile))) || (_tags.blackberry && isMobile) || (_tags.windowsphone));
                _tags.tablet = !!(!_tags.phone && (_tags.ipad || _tags.android || _tags.silk || _tags.rimtablet || (_tags.ie10 && /; Touch/.test(ua))));
                _tags.touch = // if the browser has touch events we can be reasonably sure the device has
                // a touch screen
                isEventSupported('touchend') || // browsers that use pointer event have maxTouchPoints > 0 if the
                // device supports touch input
                // http://www.w3.org/TR/pointerevents/#widl-Navigator-maxTouchPoints
                navigator.maxTouchPoints || // IE10 uses a vendor-prefixed maxTouchPoints property
                navigator.msMaxTouchPoints;
                _tags.desktop = !_tags.phone && !_tags.tablet;
                _tags.cordova = _tags.phonegap = !!(window.PhoneGap || window.Cordova || window.cordova);
                _tags.webview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)(?!.*FBAN)/i.test(ua);
                _tags.androidstock = (_tags.android <= 4.3) && (_tags.safari || _tags.silk);
                // Re-apply any query params here to allow for user override of generated tags (desktop, touch, tablet, etc)
                _merge(_tags, platformParams, true);
            },
            /**
             * Extracts user supplied platform tags from the "platformTags" query parameter
             * of the form:
             *
             *      ?platformTags=name:state,name:state,...
             *
             * (each tag defaults to true when state is unspecified)
             *
             * Example:
             *
             *      ?platformTags=isTablet,isPhone:false,isDesktop:0,iOS:1,Safari:true, ...
             *
             * @returns {Object} the platform tags supplied by the query string
             */
            loadPlatformsParam: function() {
                // Check if the ?platform parameter is set in the URL
                var paramsString = window.location.search.substr(1),
                    paramsArray = paramsString.split("&"),
                    params = {},
                    i,
                    platforms = {},
                    tmpArray, tmplen, platform, name, enabled;
                for (i = 0; i < paramsArray.length; i++) {
                    tmpArray = paramsArray[i].split("=");
                    params[tmpArray[0]] = tmpArray[1];
                }
                if (params.platformTags) {
                    tmpArray = params.platformTags.split(",");
                    for (tmplen = tmpArray.length , i = 0; i < tmplen; i++) {
                        platform = tmpArray[i].split(":");
                        name = platform[0];
                        enabled = true;
                        if (platform.length > 1) {
                            enabled = platform[1];
                            if (enabled === 'false' || enabled === '0') {
                                enabled = false;
                            }
                        }
                        platforms[name] = enabled;
                    }
                }
                return platforms;
            },
            filterPlatform: function(platform, excludes) {
                platform = _emptyArray.concat(platform || _emptyArray);
                excludes = _emptyArray.concat(excludes || _emptyArray);
                var plen = platform.length,
                    elen = excludes.length,
                    include = (!plen && elen),
                    // default true if only excludes specified
                    i, tag;
                for (i = 0; i < plen && !include; i++) {
                    tag = platform[i];
                    include = !!_tags[tag];
                }
                for (i = 0; i < elen && include; i++) {
                    tag = excludes[i];
                    include = !_tags[tag];
                }
                return include;
            },
            init: function() {
                var scriptEls = doc.getElementsByTagName('script'),
                    script = scriptEls[0],
                    len = scriptEls.length,
                    re = /\/ext(\-[a-z\-]+)?\.js$/,
                    entry, src, state, baseUrl, key, n, origin;
                // No check for script definedness because there always should be at least one
                Boot.hasReadyState = ("readyState" in script);
                Boot.hasAsync = ("async" in script);
                Boot.hasDefer = ("defer" in script);
                Boot.hasOnLoad = ("onload" in script);
                // Feature detecting IE
                Boot.isIE8 = Boot.hasReadyState && !Boot.hasAsync && Boot.hasDefer && !Boot.hasOnLoad;
                Boot.isIE9 = Boot.hasReadyState && !Boot.hasAsync && Boot.hasDefer && Boot.hasOnLoad;
                Boot.isIE10p = Boot.hasReadyState && Boot.hasAsync && Boot.hasDefer && Boot.hasOnLoad;
                Boot.isIE10 = (new Function('/*@cc_on return @_jscript_version @*/')()) === 10;
                Boot.isIE10m = Boot.isIE10 || Boot.isIE9 || Boot.isIE8;
                // IE11 does not support conditional compilation so we detect it by exclusion
                Boot.isIE11 = Boot.isIE10p && !Boot.isIE10;
                // Since we are loading after other scripts, and we needed to gather them
                // anyway, we track them in _scripts so we don't have to ask for them all
                // repeatedly.
                for (n = 0; n < len; n++) {
                    src = (script = scriptEls[n]).src;
                    if (!src) {
                        
                        continue;
                    }
                    state = script.readyState || null;
                    // If we find a script file called "ext-*.js", then the base path is that file's base path.
                    if (!baseUrl && re.test(src)) {
                        baseUrl = src;
                    }
                    if (!Boot.scripts[key = Boot.canonicalUrl(src)]) {
                        //                         _debug("creating entry " + key + " in Boot.init");
                        entry = new Entry({
                            key: key,
                            url: src,
                            done: state === null || // non-IE
                            state === 'loaded' || state === 'complete',
                            // IE only
                            el: script,
                            prop: 'src'
                        });
                    }
                }
                if (!baseUrl) {
                    script = scriptEls[scriptEls.length - 1];
                    baseUrl = script.src;
                }
                Boot.baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
                origin = window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                Boot.origin = origin;
                Boot.detectPlatformTags();
                Ext.filterPlatform = Boot.filterPlatform;
            },
            /**
             * This method returns a canonical URL for the given URL.
             *
             * For example, the following all produce the same canonical URL (which is the
             * last one):
             *
             *      http://foo.com/bar/baz/zoo/derp/../../goo/Thing.js?_dc=12345
             *      http://foo.com/bar/baz/zoo/derp/../../goo/Thing.js
             *      http://foo.com/bar/baz/zoo/derp/../jazz/../../goo/Thing.js
             *      http://foo.com/bar/baz/zoo/../goo/Thing.js
             *      http://foo.com/bar/baz/goo/Thing.js
             *
             * @private
             */
            canonicalUrl: function(url) {
                // *WARNING WARNING WARNING*
                // This method yields the most correct result we can get but it is EXPENSIVE!
                // In ALL browsers! When called multiple times in a sequence, as if when
                // we resolve dependencies for entries, it will cause garbage collection events
                // and overall painful slowness. This is why we try to avoid it as much as we can.
                // 
                // @TODO - see if we need this fallback logic
                // http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
                resolverEl.href = url;
                var ret = resolverEl.href,
                    dc = _config.disableCachingParam,
                    pos = dc ? ret.indexOf(dc + '=') : -1,
                    c, end;
                // If we have a _dc query parameter we need to remove it from the canonical
                // URL.
                if (pos > 0 && ((c = ret.charAt(pos - 1)) === '?' || c === '&')) {
                    end = ret.indexOf('&', pos);
                    end = (end < 0) ? '' : ret.substring(end);
                    if (end && c === '?') {
                        ++pos;
                        // keep the '?'
                        end = end.substring(1);
                    }
                    // remove the '&'
                    ret = ret.substring(0, pos - 1) + end;
                }
                return ret;
            },
            /**
             * Get the config value corresponding to the specified name. If no name is given, will return the config object
             * @param {String} name The config property name
             * @return {Object}
             */
            getConfig: function(name) {
                return name ? Boot.config[name] : Boot.config;
            },
            /**
             * Set the configuration.
             * @param {Object} config The config object to override the default values.
             * @return {Ext.Boot} this
             */
            setConfig: function(name, value) {
                if (typeof name === 'string') {
                    Boot.config[name] = value;
                } else {
                    for (var s in name) {
                        Boot.setConfig(s, name[s]);
                    }
                }
                return Boot;
            },
            getHead: function() {
                return Boot.docHead || (Boot.docHead = doc.head || doc.getElementsByTagName('head')[0]);
            },
            create: function(url, key, cfg) {
                var config = cfg || {};
                config.url = url;
                config.key = key;
                return Boot.scripts[key] = new Entry(config);
            },
            getEntry: function(url, cfg, canonicalPath) {
                var key, entry;
                // Canonicalizing URLs via anchor element href yields the most correct result
                // but is *extremely* resource heavy so we need to avoid it whenever possible
                key = canonicalPath ? url : Boot.canonicalUrl(url);
                entry = Boot.scripts[key];
                if (!entry) {
                    entry = Boot.create(url, key, cfg);
                    if (canonicalPath) {
                        entry.canonicalPath = true;
                    }
                }
                return entry;
            },
            registerContent: function(url, type, content) {
                var cfg = {
                        content: content,
                        loaded: true,
                        css: type === 'css'
                    };
                return Boot.getEntry(url, cfg);
            },
            processRequest: function(request, sync) {
                request.loadEntries(sync);
            },
            load: function(request) {
                //                 _debug("Boot.load called");
                var request = new Request(request);
                if (request.sync || Boot.syncMode) {
                    return Boot.loadSync(request);
                }
                // If there is a request in progress, we must
                // queue this new request to be fired  when the current request completes.
                if (Boot.currentRequest) {
                    //                     _debug("current active request, suspending this request");
                    // trigger assignment of entries now to ensure that overlapping
                    // entries with currently running requests will synchronize state
                    // with this pending one as they complete
                    request.getEntries();
                    Boot.suspendedQueue.push(request);
                } else {
                    Boot.currentRequest = request;
                    Boot.processRequest(request, false);
                }
                return Boot;
            },
            loadSync: function(request) {
                //                 _debug("Boot.loadSync called");
                var request = new Request(request);
                Boot.syncMode++;
                Boot.processRequest(request, true);
                Boot.syncMode--;
                return Boot;
            },
            loadBasePrefix: function(request) {
                request = new Request(request);
                request.prependBaseUrl = true;
                return Boot.load(request);
            },
            loadSyncBasePrefix: function(request) {
                request = new Request(request);
                request.prependBaseUrl = true;
                return Boot.loadSync(request);
            },
            requestComplete: function(request) {
                var next;
                if (Boot.currentRequest === request) {
                    Boot.currentRequest = null;
                    while (Boot.suspendedQueue.length > 0) {
                        next = Boot.suspendedQueue.shift();
                        if (!next.done) {
                            //                             _debug("resuming suspended request");
                            Boot.load(next);
                            break;
                        }
                    }
                }
                if (!Boot.currentRequest && Boot.suspendedQueue.length == 0) {
                    Boot.fireListeners();
                }
            },
            isLoading: function() {
                return !Boot.currentRequest && Boot.suspendedQueue.length == 0;
            },
            fireListeners: function() {
                var listener;
                while (Boot.isLoading() && (listener = Boot.listeners.shift())) {
                    listener();
                }
            },
            onBootReady: function(listener) {
                if (!Boot.isLoading()) {
                    listener();
                } else {
                    Boot.listeners.push(listener);
                }
            },
            /**
             * this is a helper function used by Ext.Loader to flush out
             * 'uses' arrays for classes in some Ext versions
             */
            getPathsFromIndexes: function(indexMap, loadOrder) {
                // In older versions indexMap was an object instead of a sparse array
                if (!('length' in indexMap)) {
                    var indexArray = [],
                        index;
                    for (index in indexMap) {
                        if (!isNaN(+index)) {
                            indexArray[+index] = indexMap[index];
                        }
                    }
                    indexMap = indexArray;
                }
                return Request.prototype.getPathsFromIndexes(indexMap, loadOrder);
            },
            createLoadOrderMap: function(loadOrder) {
                return Request.prototype.createLoadOrderMap(loadOrder);
            },
            fetch: function(url, complete, scope, async) {
                async = (async === undefined) ? !!complete : async;
                var xhr = new XMLHttpRequest(),
                    result, status, content,
                    exception = false,
                    readyStateChange = function() {
                        if (xhr && xhr.readyState == 4) {
                            status = (xhr.status === 1223) ? 204 : (xhr.status === 0 && ((self.location || {}).protocol === 'file:' || (self.location || {}).protocol === 'ionp:')) ? 200 : xhr.status;
                            content = xhr.responseText;
                            result = {
                                content: content,
                                status: status,
                                exception: exception
                            };
                            if (complete) {
                                complete.call(scope, result);
                            }
                            xhr.onreadystatechange = emptyFn;
                            xhr = null;
                        }
                    };
                if (async) {
                    xhr.onreadystatechange = readyStateChange;
                }
                try {
                    //                     _debug("fetching " + url + " " + (async ? "async" : "sync"));
                    xhr.open('GET', url, async);
                    xhr.send(null);
                } catch (err) {
                    exception = err;
                    readyStateChange();
                    return result;
                }
                if (!async) {
                    readyStateChange();
                }
                return result;
            },
            notifyAll: function(entry) {
                entry.notifyRequests();
            }
        };
    function Request(cfg) {
        //The request class encapsulates a series of Entry objects
        //and provides notification around the completion of all Entries
        //in this request.
        if (cfg.$isRequest) {
            return cfg;
        }
        var cfg = cfg.url ? cfg : {
                url: cfg
            },
            url = cfg.url,
            urls = url.charAt ? [
                url
            ] : url,
            charset = cfg.charset || Boot.config.charset;
        _apply(this, cfg);
        delete this.url;
        this.urls = urls;
        this.charset = charset;
    }
    
    Request.prototype = {
        $isRequest: true,
        createLoadOrderMap: function(loadOrder) {
            var len = loadOrder.length,
                loadOrderMap = {},
                i, element;
            for (i = 0; i < len; i++) {
                element = loadOrder[i];
                loadOrderMap[element.path] = element;
            }
            return loadOrderMap;
        },
        getLoadIndexes: function(item, indexMap, loadOrder, includeUses, skipLoaded) {
            var resolved = [],
                queue = [
                    item
                ],
                itemIndex = item.idx,
                queue, entry, dependencies, depIndex, i, len;
            if (indexMap[itemIndex]) {
                // prevent cycles
                return resolved;
            }
            // Both indexMap and resolved are sparse arrays keyed by indexes.
            // This gives us a naturally sorted sequence of indexes later on
            // when we need to convert them to paths.
            // indexMap is the map of all indexes we have visited at least once
            // per the current expandUrls() invocation, and resolved is the map
            // of all dependencies for the current item that are not included
            // in indexMap.
            indexMap[itemIndex] = resolved[itemIndex] = true;
            while (item = queue.shift()) {
                // Canonicalizing URLs is expensive, we try to avoid it
                if (item.canonicalPath) {
                    entry = Boot.getEntry(item.path, null, true);
                } else {
                    entry = Boot.getEntry(this.prepareUrl(item.path));
                }
                if (!(skipLoaded && entry.done)) {
                    if (includeUses && item.uses && item.uses.length) {
                        dependencies = item.requires.concat(item.uses);
                    } else {
                        dependencies = item.requires;
                    }
                    for (i = 0 , len = dependencies.length; i < len; i++) {
                        depIndex = dependencies[i];
                        if (!indexMap[depIndex]) {
                            indexMap[depIndex] = resolved[depIndex] = true;
                            queue.push(loadOrder[depIndex]);
                        }
                    }
                }
            }
            return resolved;
        },
        getPathsFromIndexes: function(indexes, loadOrder) {
            var paths = [],
                index, len;
            // indexes is a sparse array with values being true for defined indexes
            for (index = 0 , len = indexes.length; index < len; index++) {
                if (indexes[index]) {
                    paths.push(loadOrder[index].path);
                }
            }
            return paths;
        },
        expandUrl: function(url, loadOrder, loadOrderMap, indexMap, includeUses, skipLoaded) {
            var item, resolved;
            if (loadOrder) {
                item = loadOrderMap[url];
                if (item) {
                    resolved = this.getLoadIndexes(item, indexMap, loadOrder, includeUses, skipLoaded);
                    if (resolved.length) {
                        return this.getPathsFromIndexes(resolved, loadOrder);
                    }
                }
            }
            return [
                url
            ];
        },
        expandUrls: function(urls, includeUses) {
            var me = this,
                loadOrder = me.loadOrder,
                expanded = [],
                expandMap = {},
                indexMap = [],
                loadOrderMap, tmpExpanded, i, len, t, tlen, tUrl;
            if (typeof urls === "string") {
                urls = [
                    urls
                ];
            }
            if (loadOrder) {
                loadOrderMap = me.loadOrderMap;
                if (!loadOrderMap) {
                    loadOrderMap = me.loadOrderMap = me.createLoadOrderMap(loadOrder);
                }
            }
            for (i = 0 , len = urls.length; i < len; i++) {
                // We don't want to skip loaded entries (last argument === false).
                // There are some overrides that get loaded before their respective classes,
                // and when the class dependencies are processed we don't want to skip over
                // the overrides' dependencies just because they were loaded first.
                tmpExpanded = this.expandUrl(urls[i], loadOrder, loadOrderMap, indexMap, includeUses, false);
                for (t = 0 , tlen = tmpExpanded.length; t < tlen; t++) {
                    tUrl = tmpExpanded[t];
                    if (!expandMap[tUrl]) {
                        expandMap[tUrl] = true;
                        expanded.push(tUrl);
                    }
                }
            }
            if (expanded.length === 0) {
                expanded = urls;
            }
            return expanded;
        },
        expandLoadOrder: function() {
            var me = this,
                urls = me.urls,
                expanded;
            if (!me.expanded) {
                expanded = this.expandUrls(urls, true);
                me.expanded = true;
            } else {
                expanded = urls;
            }
            me.urls = expanded;
            // if we added some urls to the request to honor the indicated
            // load order, the request needs to be sequential
            if (urls.length != expanded.length) {
                me.sequential = true;
            }
            return me;
        },
        getUrls: function() {
            this.expandLoadOrder();
            return this.urls;
        },
        prepareUrl: function(url) {
            if (this.prependBaseUrl) {
                return Boot.baseUrl + url;
            }
            return url;
        },
        getEntries: function() {
            var me = this,
                entries = me.entries,
                loadOrderMap, item, i, entry, urls, url;
            if (!entries) {
                entries = [];
                urls = me.getUrls();
                // If we have loadOrder array then the map will be expanded by now
                if (me.loadOrder) {
                    loadOrderMap = me.loadOrderMap;
                }
                for (i = 0; i < urls.length; i++) {
                    url = me.prepareUrl(urls[i]);
                    if (loadOrderMap) {
                        item = loadOrderMap[url];
                    }
                    entry = Boot.getEntry(url, {
                        buster: me.buster,
                        charset: me.charset
                    }, item && item.canonicalPath);
                    entry.requests.push(me);
                    entries.push(entry);
                }
                me.entries = entries;
            }
            return entries;
        },
        loadEntries: function(sync) {
            var me = this,
                entries = me.getEntries(),
                len = entries.length,
                start = me.loadStart || 0,
                continueLoad, entries, entry, i;
            if (sync !== undefined) {
                me.sync = sync;
            }
            me.loaded = me.loaded || 0;
            me.loading = me.loading || len;
            for (i = start; i < len; i++) {
                entry = entries[i];
                if (!entry.loaded) {
                    continueLoad = entries[i].load(me.sync);
                } else {
                    continueLoad = true;
                }
                if (!continueLoad) {
                    me.loadStart = i;
                    entry.onDone(function() {
                        me.loadEntries(sync);
                    });
                    break;
                }
            }
            me.processLoadedEntries();
        },
        processLoadedEntries: function() {
            var me = this,
                entries = me.getEntries(),
                len = entries.length,
                start = me.startIndex || 0,
                i, entry;
            if (!me.done) {
                for (i = start; i < len; i++) {
                    entry = entries[i];
                    if (!entry.loaded) {
                        me.startIndex = i;
                        return;
                    }
                    if (!entry.evaluated) {
                        entry.evaluate();
                    }
                    if (entry.error) {
                        me.error = true;
                    }
                }
                me.notify();
            }
        },
        notify: function() {
            var me = this;
            if (!me.done) {
                var error = me.error,
                    fn = me[error ? 'failure' : 'success'],
                    delay = ('delay' in me) ? me.delay : (error ? 1 : Boot.config.chainDelay),
                    scope = me.scope || me;
                me.done = true;
                if (fn) {
                    if (delay === 0 || delay > 0) {
                        // Free the stack (and defer the next script)
                        setTimeout(function() {
                            fn.call(scope, me);
                        }, delay);
                    } else {
                        fn.call(scope, me);
                    }
                }
                me.fireListeners();
                Boot.requestComplete(me);
            }
        },
        onDone: function(listener) {
            var me = this,
                listeners = me.listeners || (me.listeners = []);
            if (me.done) {
                listener(me);
            } else {
                listeners.push(listener);
            }
        },
        fireListeners: function() {
            var listeners = this.listeners,
                listener;
            if (listeners) {
                //                 _debug("firing request listeners");
                while ((listener = listeners.shift())) {
                    listener(this);
                }
            }
        }
    };
    function Entry(cfg) {
        //The Entry class is a token to manage the load and evaluation
        //state of a particular url.  It is used to notify all Requests
        //interested in this url that the content is available.
        if (cfg.$isEntry) {
            return cfg;
        }
        //         _debug("creating entry for " + cfg.url);
        var charset = cfg.charset || Boot.config.charset,
            manifest = Ext.manifest,
            loader = manifest && manifest.loader,
            cache = (cfg.cache !== undefined) ? cfg.cache : (loader && loader.cache),
            buster, busterParam;
        if (Boot.config.disableCaching) {
            if (cache === undefined) {
                cache = !Boot.config.disableCaching;
            }
            if (cache === false) {
                buster = +new Date();
            } else if (cache !== true) {
                buster = cache;
            }
            if (buster) {
                busterParam = (loader && loader.cacheParam) || Boot.config.disableCachingParam;
                buster = busterParam + "=" + buster;
            }
        }
        _apply(this, cfg);
        this.charset = charset;
        this.buster = buster;
        this.requests = [];
    }
    
    Entry.prototype = {
        $isEntry: true,
        done: false,
        evaluated: false,
        loaded: false,
        isCrossDomain: function() {
            var me = this;
            if (me.crossDomain === undefined) {
                //                 _debug("checking " + me.getLoadUrl() + " for prefix " + Boot.origin);
                me.crossDomain = (me.getLoadUrl().indexOf(Boot.origin) !== 0);
            }
            return me.crossDomain;
        },
        isCss: function() {
            var me = this;
            if (me.css === undefined) {
                if (me.url) {
                    var assetConfig = Boot.assetConfig[me.url];
                    me.css = assetConfig ? assetConfig.type === "css" : cssRe.test(me.url);
                } else {
                    me.css = false;
                }
            }
            return this.css;
        },
        getElement: function(tag) {
            var me = this,
                el = me.el;
            if (!el) {
                //                 _debug("creating element for " + me.url);
                if (me.isCss()) {
                    tag = tag || "link";
                    el = doc.createElement(tag);
                    if (tag == "link") {
                        el.rel = 'stylesheet';
                        me.prop = 'href';
                    } else {
                        me.prop = "textContent";
                    }
                    el.type = "text/css";
                } else {
                    tag = tag || "script";
                    el = doc.createElement(tag);
                    el.type = 'text/javascript';
                    me.prop = 'src';
                    if (me.charset) {
                        el.charset = me.charset;
                    }
                    if (Boot.hasAsync) {
                        el.async = false;
                    }
                }
                me.el = el;
            }
            return el;
        },
        getLoadUrl: function() {
            var me = this,
                url;
            url = me.canonicalPath ? me.url : Boot.canonicalUrl(me.url);
            if (!me.loadUrl) {
                me.loadUrl = !!me.buster ? (url + (url.indexOf('?') === -1 ? '?' : '&') + me.buster) : url;
            }
            return me.loadUrl;
        },
        fetch: function(req) {
            var url = this.getLoadUrl(),
                async = !!req.async,
                complete = req.complete;
            Boot.fetch(url, complete, this, async);
        },
        onContentLoaded: function(response) {
            var me = this,
                status = response.status,
                content = response.content,
                exception = response.exception,
                url = this.getLoadUrl();
            me.loaded = true;
            if ((exception || status === 0) && !_environment.phantom) {
                me.error = ("Failed loading synchronously via XHR: '" + url + "'. It's likely that the file is either being loaded from a " + "different domain or from the local file system where cross " + "origin requests are not allowed for security reasons. Try " + "asynchronous loading instead.") || true;
                me.evaluated = true;
            } else if ((status >= 200 && status < 300) || status === 304 || _environment.phantom || (status === 0 && content.length > 0)) {
                me.content = content;
            } else {
                me.error = ("Failed loading synchronously via XHR: '" + url + "'. Please verify that the file exists. XHR status code: " + status) || true;
                me.evaluated = true;
            }
        },
        createLoadElement: function(callback) {
            var me = this,
                el = me.getElement();
            me.preserve = true;
            el.onerror = function() {
                me.error = true;
                if (callback) {
                    callback();
                    callback = null;
                }
            };
            if (Boot.isIE10m) {
                el.onreadystatechange = function() {
                    if (this.readyState === 'loaded' || this.readyState === 'complete') {
                        if (callback) {
                            callback();
                            callback = this.onreadystatechange = this.onerror = null;
                        }
                    }
                };
            } else {
                el.onload = function() {
                    callback();
                    callback = this.onload = this.onerror = null;
                };
            }
            // IE starts loading here
            el[me.prop] = me.getLoadUrl();
        },
        onLoadElementReady: function() {
            Boot.getHead().appendChild(this.getElement());
            this.evaluated = true;
        },
        inject: function(content, asset) {
            //             _debug("injecting content for " + this.url);
            var me = this,
                head = Boot.getHead(),
                url = me.url,
                key = me.key,
                base, el, ieMode, basePath;
            if (me.isCss()) {
                me.preserve = true;
                basePath = key.substring(0, key.lastIndexOf("/") + 1);
                base = doc.createElement('base');
                base.href = basePath;
                if (head.firstChild) {
                    head.insertBefore(base, head.firstChild);
                } else {
                    head.appendChild(base);
                }
                // reset the href attribute to cuase IE to pick up the change
                base.href = base.href;
                if (url) {
                    content += "\n/*# sourceURL=" + key + " */";
                }
                // create element after setting base
                el = me.getElement("style");
                ieMode = ('styleSheet' in el);
                head.appendChild(base);
                if (ieMode) {
                    head.appendChild(el);
                    el.styleSheet.cssText = content;
                } else {
                    el.textContent = content;
                    head.appendChild(el);
                }
                head.removeChild(base);
            } else {
                // Debugger friendly, file names are still shown even though they're
                // eval'ed code. Breakpoints work on both Firebug and Chrome's Web
                // Inspector.
                if (url) {
                    content += "\n//# sourceURL=" + key;
                }
                Ext.globalEval(content);
            }
            return me;
        },
        loadCrossDomain: function() {
            var me = this,
                complete = function() {
                    me.el.onerror = me.el.onload = emptyFn;
                    me.el = null;
                    me.loaded = me.evaluated = me.done = true;
                    me.notifyRequests();
                };
            me.createLoadElement(function() {
                complete();
            });
            me.evaluateLoadElement();
            // at this point, we need sequential evaluation,
            // which means we can't advance the load until
            // this entry has fully completed
            return false;
        },
        loadElement: function() {
            var me = this,
                complete = function() {
                    me.el.onerror = me.el.onload = emptyFn;
                    me.el = null;
                    me.loaded = me.evaluated = me.done = true;
                    me.notifyRequests();
                };
            me.createLoadElement(function() {
                complete();
            });
            me.evaluateLoadElement();
            return true;
        },
        loadSync: function() {
            var me = this;
            me.fetch({
                async: false,
                complete: function(response) {
                    me.onContentLoaded(response);
                }
            });
            me.evaluate();
            me.notifyRequests();
        },
        load: function(sync) {
            var me = this;
            if (!me.loaded) {
                if (me.loading) {
                    // if we're calling back through load and we're loading but haven't
                    // yet loaded, then we should be in a sequential, cross domain
                    // load scenario which means we can't continue the load on the
                    // request until this entry has fully evaluated, which will mean
                    // loaded = evaluated = done = true in one step.  For css files, this
                    // will happen immediately upon <link> element creation / insertion,
                    // but <script> elements will set this upon load notification
                    return false;
                }
                me.loading = true;
                // for async modes, we have some options
                if (!sync) {
                    // if cross domain, just inject the script tag and let the onload
                    // events drive the progression.
                    // IE10 also needs sequential loading because of a bug that makes it
                    // fire readystate event prematurely:
                    // https://connect.microsoft.com/IE/feedback/details/729164/ie10-dynamic-script-element-fires-loaded-readystate-prematurely
                    if (Boot.isIE10 || me.isCrossDomain()) {
                        return me.loadCrossDomain();
                    }
                    // for IE, use the readyStateChange allows us to load scripts in parallel
                    // but serialize the evaluation by appending the script node to the
                    // document
                    else if (!me.isCss() && Boot.hasReadyState) {
                        me.createLoadElement(function() {
                            me.loaded = true;
                            me.notifyRequests();
                        });
                    } else if (Boot.useElements && // older webkit, phantomjs included, won't fire load for link elements
                    !(me.isCss() && _environment.phantom)) {
                        return me.loadElement();
                    } else // for other browsers, just ajax the content down in parallel, and use
                    // globalEval to serialize evaluation
                    {
                        me.fetch({
                            async: !sync,
                            complete: function(response) {
                                me.onContentLoaded(response);
                                me.notifyRequests();
                            }
                        });
                    }
                } else // for sync mode in js, global eval FTW.  IE won't honor the comment
                // paths in the debugger, so eventually we need a sync mode for IE that
                // uses the readyStateChange mechanism
                {
                    me.loadSync();
                }
            }
            // signal that the load process can continue
            return true;
        },
        evaluateContent: function() {
            this.inject(this.content);
            this.content = null;
        },
        evaluateLoadElement: function() {
            Boot.getHead().appendChild(this.getElement());
        },
        evaluate: function() {
            var me = this;
            if (!me.evaluated) {
                if (me.evaluating) {
                    return;
                }
                me.evaluating = true;
                if (me.content !== undefined) {
                    me.evaluateContent();
                } else if (!me.error) {
                    me.evaluateLoadElement();
                }
                me.evaluated = me.done = true;
                me.cleanup();
            }
        },
        cleanup: function() {
            var me = this,
                el = me.el,
                prop;
            if (!el) {
                return;
            }
            if (!me.preserve) {
                me.el = null;
                el.parentNode.removeChild(el);
                // Remove, since its useless now
                for (prop in el) {
                    try {
                        if (prop !== me.prop) {
                            // If we set the src property to null IE
                            // will try and request a script at './null'
                            el[prop] = null;
                        }
                        delete el[prop];
                    } // and prepare for GC
                    catch (cleanEx) {}
                }
            }
            //ignore
            // Setting to null can cause exceptions if IE ever needs to call these
            // again (like onreadystatechange). This emptyFn has nothing locked in
            // closure scope so it is about as safe as null for memory leaks.
            el.onload = el.onerror = el.onreadystatechange = emptyFn;
        },
        notifyRequests: function() {
            var requests = this.requests,
                len = requests.length,
                i, request;
            for (i = 0; i < len; i++) {
                request = requests[i];
                request.processLoadedEntries();
            }
            if (this.done) {
                this.fireListeners();
            }
        },
        onDone: function(listener) {
            var me = this,
                listeners = me.listeners || (me.listeners = []);
            if (me.done) {
                listener(me);
            } else {
                listeners.push(listener);
            }
        },
        fireListeners: function() {
            var listeners = this.listeners,
                listener;
            if (listeners && listeners.length > 0) {
                //                 _debug("firing event listeners for url " + this.url);
                while ((listener = listeners.shift())) {
                    listener(this);
                }
            }
        }
    };
    /**
     * Turns on or off the "cache buster" applied to dynamically loaded scripts. Normally
     * dynamically loaded scripts have an extra query parameter appended to avoid stale
     * cached scripts. This method can be used to disable this mechanism, and is primarily
     * useful for testing. This is done using a cookie.
     * @param {Boolean} disable True to disable the cache buster.
     * @param {String} [path="/"] An optional path to scope the cookie.
     */
    Ext.disableCacheBuster = function(disable, path) {
        var date = new Date();
        date.setTime(date.getTime() + (disable ? 10 * 365 : -1) * 24 * 60 * 60 * 1000);
        date = date.toGMTString();
        doc.cookie = 'ext-cache=1; expires=' + date + '; path=' + (path || '/');
    };
    Boot.init();
    return Boot;
}(// NOTE: We run the eval at global scope to protect the body of the function and allow
// compressors to still process it.
function() {}));
//(eval("/*@cc_on!@*/!1"));
/**
 * This method evaluates the given code free of any local variable. This
 * will be at global scope, in others it will be in a function.
 * @param {String} code The code to evaluate.
 * @private
 * @method
 * @member Ext
 */
Ext.globalEval = Ext.globalEval || (this.execScript ? function(code) {
    execScript(code);
} : function($$code) {
    eval.call(window, $$code);
});
/*
 * Only IE8 & IE/Quirks lack Function.prototype.bind so we polyfill that here.
 */
if (!Function.prototype.bind) {
    (function() {
        var slice = Array.prototype.slice,
            // To reduce overhead on call of the bound fn we have two flavors based on
            // whether we have args to prepend or not:
            bind = function(me) {
                var args = slice.call(arguments, 1),
                    method = this;
                if (args.length) {
                    return function() {
                        var t = arguments;
                        // avoid the slice/concat if the caller does not supply args
                        return method.apply(me, t.length ? args.concat(slice.call(t)) : args);
                    };
                }
                // this is the majority use case - just fn.bind(this) and no args
                args = null;
                return function() {
                    return method.apply(me, arguments);
                };
            };
        Function.prototype.bind = bind;
        bind.$extjs = true;
    }());
}
// to detect this polyfill if one want to improve it
//</editor-fold>
Ext.setResourcePath = function(poolName, path) {
    var manifest = Ext.manifest || (Ext.manifest = {}),
        paths = manifest.resources || (manifest.resources = {});
    if (manifest) {
        if (typeof poolName !== 'string') {
            Ext.apply(paths, poolName);
        } else {
            paths[poolName] = path;
        }
        manifest.resources = paths;
    }
};
Ext.getResourcePath = function(path, poolName, packageName) {
    if (typeof path !== 'string') {
        poolName = path.pool;
        packageName = path.packageName;
        path = path.path;
    }
    var manifest = Ext.manifest,
        paths = manifest && manifest.resources,
        poolPath = paths[poolName],
        output = [];
    if (poolPath == null) {
        poolPath = paths.path;
        if (poolPath == null) {
            poolPath = 'resources';
        }
    }
    if (poolPath) {
        output.push(poolPath);
    }
    if (packageName) {
        output.push(packageName);
    }
    output.push(path);
    return output.join('/');
};

// @tag core
/**
 * @class Ext
 *
 * The Ext namespace (global object) encapsulates all classes, singletons, and
 * utility methods provided by Sencha's libraries.
 *
 * Most user interface Components are at a lower level of nesting in the namespace,
 * but many common utility functions are provided as direct properties of the Ext namespace.
 *
 * Also many frequently used methods from other classes are provided as shortcuts
 * within the Ext namespace. For example {@link Ext#getCmp Ext.getCmp} aliases
 * {@link Ext.ComponentManager#get Ext.ComponentManager.get}.
 *
 * Many applications are initiated with {@link Ext#application Ext.application} which is
 * called once the DOM is ready. This ensures all scripts have been loaded, preventing
 * dependency issues. For example:
 *
 *      Ext.application({
 *          name: 'MyApp',
 *
 *          launch: function () {
 *              Ext.Msg.alert(this.name, 'Ready to go!');
 *          }
 *      });
 *
 * <b><a href="http://www.sencha.com/products/sencha-cmd/">Sencha Cmd</a></b> is a free tool
 * for helping you generate and build Ext JS (and Sencha Touch) applications. See
 * `{@link Ext.app.Application Application}` for more information about creating an app.
 *
 * A lower-level technique that does not use the `Ext.app.Application` architecture is
 * {@link Ext#onReady Ext.onReady}.
 *
 * You can also discuss concepts and issues with others on the
 * <a href="http://www.sencha.com/forum/">Sencha Forums</a>.
 *
 * @singleton
 */
var Ext = Ext || {};
// jshint ignore:line
// @define Ext
(function() {
    var global = this,
        objectPrototype = Object.prototype,
        toString = objectPrototype.toString,
        enumerables = [
            //'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
            'valueOf',
            'toLocaleString',
            'toString',
            'constructor'
        ],
        emptyFn = function() {},
        privateFn = function() {},
        identityFn = function(o) {
            return o;
        },
        // This is the "$previous" method of a hook function on an instance. When called, it
        // calls through the class prototype by the name of the called method.
        callOverrideParent = function() {
            var method = callOverrideParent.caller.caller;
            // skip callParent (our caller)
            return method.$owner.prototype[method.$name].apply(this, arguments);
        },
        manifest = Ext.manifest || {},
        i,
        iterableRe = /\[object\s*(?:Array|Arguments|\w*Collection|\w*List|HTML\s+document\.all\s+class)\]/,
        MSDateRe = /^\\?\/Date\(([-+])?(\d+)(?:[+-]\d{4})?\)\\?\/$/;
    Ext.global = global;
    Ext.$nextIid = 0;
    /**
     * Returns the current timestamp.
     * @return {Number} Milliseconds since UNIX epoch.
     * @method now
     * @member Ext
     */
    Ext.now = Date.now || (Date.now = function() {
        return +new Date();
    });
    /**
     * Returns the current high-resolution timestamp.
     * @return {Number} Milliseconds ellapsed since arbitrary epoch.
     * @method ticks
     * @member Ext
     * @since 6.0.1
     */
    Ext.ticks = (global.performance && global.performance.now) ? function() {
        return performance.now();
    } : // jshint ignore:line
    Ext.now;
    Ext._startTime = Ext.ticks();
    // Mark these special fn's for easy identification:
    emptyFn.$nullFn = identityFn.$nullFn = emptyFn.$emptyFn = identityFn.$identityFn = privateFn.$nullFn = true;
    privateFn.$privacy = 'framework';
    // We also want to prevent these functions from being cleaned up on destroy
    emptyFn.$noClearOnDestroy = identityFn.$noClearOnDestroy = true;
    privateFn.$noClearOnDestroy = true;
    // These are emptyFn's in core and are redefined only in Ext JS (we use this syntax
    // so Cmd does not detect them):
    Ext['suspendLayouts'] = Ext['resumeLayouts'] = emptyFn;
    // jshint ignore:line
    for (i in {
        toString: 1
    }) {
        enumerables = null;
    }
    /**
     * An array containing extra enumerables for old browsers
     * @property {String[]}
     */
    Ext.enumerables = enumerables;
    /**
     * Copies all the properties of `config` to the specified `object`. There are two levels
     * of defaulting supported:
     * 
     *      Ext.apply(obj, { a: 1 }, { a: 2 });
     *      //obj.a === 1
     * 
     *      Ext.apply(obj, {  }, { a: 2 });
     *      //obj.a === 2
     * 
     * Note that if recursive merging and cloning without referencing the original objects
     * or arrays is needed, use {@link Ext.Object#merge} instead.
     * 
     * @param {Object} object The receiver of the properties.
     * @param {Object} config The primary source of the properties.
     * @param {Object} [defaults] An object that will also be applied for default values.
     * @return {Object} returns `object`.
     */
    Ext.apply = function(object, config, defaults) {
        if (object) {
            if (defaults) {
                Ext.apply(object, defaults);
            }
            if (config && typeof config === 'object') {
                var i, j, k;
                for (i in config) {
                    object[i] = config[i];
                }
                if (enumerables) {
                    for (j = enumerables.length; j--; ) {
                        k = enumerables[j];
                        if (config.hasOwnProperty(k)) {
                            object[k] = config[k];
                        }
                    }
                }
            }
        }
        return object;
    };
    // Used by Ext.override
    function addInstanceOverrides(target, owner, overrides) {
        var name, value;
        for (name in overrides) {
            if (overrides.hasOwnProperty(name)) {
                value = overrides[name];
                if (typeof value === 'function') {
                    if (owner.$className) {
                        value.name = owner.$className + '#' + name;
                    }
                    value.$name = name;
                    value.$owner = owner;
                    value.$previous = target.hasOwnProperty(name) ? target[name] : // already hooked, so call previous hook
                    callOverrideParent;
                }
                // calls by name on prototype
                target[name] = value;
            }
        }
    }
    Ext.buildSettings = Ext.apply({
        baseCSSPrefix: 'x-'
    }, Ext.buildSettings || {});
    Ext.apply(Ext, {
        /**
         * @private
         */
        idSeed: 0,
        /**
         * @private
         */
        idPrefix: 'ext-',
        /**
         * @property {Boolean} isSecure
         * True if the page is running over SSL
         * @readonly
         */
        isSecure: /^https/i.test(window.location.protocol),
        /**
         * `true` to automatically uncache orphaned Ext.Elements periodically. If set to
         * `false`, the application will be required to clean up orphaned Ext.Elements and
         * it's listeners as to not cause memory leakage.
         */
        enableGarbageCollector: false,
        /**
         * True to automatically purge event listeners during garbageCollection.
         */
        enableListenerCollection: true,
        /**
         * @property {String} [name='Ext']
         * <p>The name of the property in the global namespace (The <code>window</code> in browser environments) which refers to the current instance of Ext.</p>
         * <p>This is usually <code>"Ext"</code>, but if a sandboxed build of ExtJS is being used, this will be an alternative name.</p>
         * <p>If code is being generated for use by <code>eval</code> or to create a <code>new Function</code>, and the global instance
         * of Ext must be referenced, this is the name that should be built into the code.</p>
         */
        name: Ext.sandboxName || 'Ext',
        /**
         * @property {Function}
         * A reusable empty function for use as `privates` members.
         *
         *      Ext.define('MyClass', {
         *          nothing: Ext.emptyFn,
         *
         *          privates: {
         *              privateNothing: Ext.privateFn
         *          }
         *      });
         *
         */
        privateFn: privateFn,
        /**
         * @property {Function}
         * A reusable empty function.
         */
        emptyFn: emptyFn,
        /**
         * @property {Function}
         * A reusable identity function that simply returns its first argument.
         */
        identityFn: identityFn,
        /**
         * This indicate the start timestamp of current cycle.
         * It is only reliable during dom-event-initiated cycles and
         * {@link Ext.draw.Animator} initiated cycles.
         */
        frameStartTime: Ext.now(),
        /**
         * This object is initialized prior to loading the framework
         * and contains settings and other information describing the application.
         *
         * For applications built using Sencha Cmd, this is produced from the `"app.json"`
         * file with information extracted from all of the required packages' `"package.json"`
         * files. This can be set to a string when your application is using the
         * (microloader)[#/guide/microloader]. In this case, the string of "foo" will be
         * requested as `"foo.json"` and the object in that JSON file will parsed and set
         * as this object.
         *
         * @cfg {String/Ext.Manifest} manifest
         * @since 5.0.0
         */
        manifest: manifest,
        /**
         * @cfg {Object} [debugConfig]
         * This object is used to enable or disable debugging for classes or namespaces. The
         * default instance looks like this:
         *
         *      Ext.debugConfig = {
         *          hooks: {
         *              '*': true
         *          }
         *      };
         *
         * Typically applications will set this in their `"app.json"` like so:
         *
         *      {
         *          "debug": {
         *              "hooks": {
         *                  // Default for all namespaces:
         *                  '*': true,
         *
         *                  // Except for Ext namespace which is disabled
         *                  'Ext': false,
         *
         *                  // Except for Ext.layout namespace which is enabled
         *                  'Ext.layout': true
         *              }
         *          }
         *      }
         *
         * Alternatively, because this property is consumed very early in the load process of
         * the framework, this can be set in a `script` tag that is defined prior to loading
         * the framework itself.
         *
         * For example, to enable debugging for the `Ext.layout` namespace only:
         *
         *      var Ext = Ext || {};
         *      Ext.debugConfig = {
         *          hooks: {
         *              //...
         *          }
         *      };
         *
         * For any class declared, the longest matching namespace specified determines if its
         * `debugHooks` will be enabled. The default setting is specified by the '*' property.
         *
         * **NOTE:** This option only applies to debug builds. All debugging is disabled in
         * production builds.
         */
        debugConfig: Ext.debugConfig || manifest.debug || {
            hooks: {
                '*': true
            }
        },
        /**
         * @property {Boolean} [enableAria=true] This property is provided for backward
         * compatibility with previous versions of Ext JS. Accessibility is always enabled
         * in Ext JS 6.0+.
         *
         * This property is deprecated. To disable WAI-ARIA compatibility warnings,
         * override `Ext.ariaWarn` function in your application startup code:
         *
         *      Ext.application({
         *          launch: function() {
         *              Ext.ariaWarn = Ext.emptyFn;
         *          }
         *      });
         *
         * For stricter compatibility with WAI-ARIA requirements, replace `Ext.ariaWarn`
         * with a function that will raise an error instead:
         *
         *      Ext.application({
         *          launch: function() {
         *              Ext.ariaWarn = function(target, msg) {
         *                  Ext.raise({
         *                      msg: msg,
         *                      component: target
         *                  });
         *              };
         *          }
         *      });
         *
         * @since 6.0.0
         * @deprecated 6.0.2
         */
        enableAria: true,
        startsWithHashRe: /^#/,
        /**
         * @property {RegExp}
         * @private
         * Regular expression used for validating identifiers.
         */
        validIdRe: /^[a-z_][a-z0-9\-_]*$/i,
        /**
         * @property {String} BLANK_IMAGE_URL
         * URL to a 1x1 transparent gif image used by Ext to create inline icons with
         * CSS background images.
         */
        BLANK_IMAGE_URL: 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
        /**
         * Converts an id (`'foo'`) into an id selector (`'#foo'`).  This method is used
         * internally by the framework whenever an id needs to be converted into a selector
         * and is provided as a hook for those that need to escape IDs selectors since,
         * as of Ext 5.0, the framework no longer escapes IDs by default.
         * @private
         * @param {String} id
         * @return {String}
         */
        makeIdSelector: function(id) {
            if (!Ext.validIdRe.test(id)) {
                Ext.raise('Invalid id selector: "' + id + '"');
            }
            return '#' + id;
        },
        /**
        * Generates unique ids. If the object/element is passes and it already has an `id`, it is unchanged.
        * @param {Object} [o] The object to generate an id for.
        * @param {String} [prefix=ext-gen] (optional) The `id` prefix.
        * @return {String} The generated `id`.
        */
        id: function(o, prefix) {
            if (o && o.id) {
                return o.id;
            }
            var id = (prefix || Ext.idPrefix) + (++Ext.idSeed);
            if (o) {
                o.id = id;
            }
            return id;
        },
        /**
         * A reusable function which returns the value of `getId()` called upon a single passed parameter.
         * Useful when creating a {@link Ext.util.MixedCollection} of objects keyed by an identifier returned from a `getId` method.
         */
        returnId: function(o) {
            return o.getId();
        },
        /**
         * A reusable function which returns `true`.
         */
        returnTrue: function() {
            return true;
        },
        /**
         * A zero length string which will pass a truth test. Useful for passing to methods
         * which use a truth test to reject <i>falsy</i> values where a string value must be cleared.
         */
        emptyString: new String(),
        // jshint ignore:line
        /**
         * @property {String} [baseCSSPrefix='x-']
         * The base prefix to use for all `Ext` components. To configure this property, you should use the
         * Ext.buildSettings object before the framework is loaded:
         *
         *     Ext.buildSettings = {
         *         baseCSSPrefix : 'abc-'
         *     };
         *
         * or you can change it before any components are rendered:
         *
         *     Ext.baseCSSPrefix = Ext.buildSettings.baseCSSPrefix = 'abc-';
         *
         * This will change what CSS classes components will use and you should
         * then recompile the SASS changing the `$prefix` SASS variable to match.
         */
        baseCSSPrefix: Ext.buildSettings.baseCSSPrefix,
        /**
         * @property {Object} $eventNameMap
         * A map of event names which contained the lower-cased versions of any mixed
         * case event names.
         * @private
         */
        $eventNameMap: {},
        // Vendor-specific events do not work if lower-cased.  This regex specifies event
        // prefixes for names that should NOT be lower-cased by Ext.canonicalEventName()
        $vendorEventRe: /^(DOMMouse|Moz.+|MS.+|webkit.+)/,
        // TODO: inlinable function - SDKTOOLS-686
        /**
         * @private
         * @inline
         */
        canonicalEventName: function(name) {
            return Ext.$eventNameMap[name] || (Ext.$eventNameMap[name] = (Ext.$vendorEventRe.test(name) ? name : name.toLowerCase()));
        },
        /**
         * Copies all the properties of config to object if they don't already exist.
         * @param {Object} object The receiver of the properties
         * @param {Object} config The source of the properties
         * @return {Object} returns obj
         */
        applyIf: function(object, config) {
            if (object && config && typeof config === 'object') {
                for (var property in config) {
                    if (object[property] === undefined) {
                        object[property] = config[property];
                    }
                }
            }
            return object;
        },
        /**
         * Destroys all of the given objects. If arrays are passed, the elements of these
         * are destroyed recursively.
         *
         * What it means to "destroy" an object depends on the type of object.
         *
         *  * `Array`: Each element of the array is destroyed recursively.
         *  * `Object`: Any object with a `destroy` method will have that method called.
         *
         * @param {Mixed...} args Any number of objects or arrays.
         */
        destroy: function() {
            var ln = arguments.length,
                i, arg;
            for (i = 0; i < ln; i++) {
                arg = arguments[i];
                if (arg) {
                    if (Ext.isArray(arg)) {
                        this.destroy.apply(this, arg);
                    } else if (Ext.isFunction(arg.destroy) && !arg.destroyed) {
                        arg.destroy();
                    }
                }
            }
            return null;
        },
        /**
         * Destroys the specified named members of the given object using `Ext.destroy`. These
         * properties will be set to `null`.
         * @param {Object} object The object who's properties you wish to destroy.
         * @param {String...} args One or more names of the properties to destroy and remove from the object.
         */
        destroyMembers: function(object) {
            for (var ref, name,
                i = 1,
                a = arguments,
                len = a.length; i < len; i++) {
                ref = object[name = a[i]];
                // Avoid adding the property if it does not already exist
                if (ref != null) {
                    object[name] = Ext.destroy(ref);
                }
            }
        },
        /**
         * Overrides members of the specified `target` with the given values.
         *
         * If the `target` is a class declared using {@link Ext#define Ext.define}, the
         * `override` method of that class is called (see {@link Ext.Base#override}) given
         * the `overrides`.
         *
         * If the `target` is a function, it is assumed to be a constructor and the contents
         * of `overrides` are applied to its `prototype` using {@link Ext#apply Ext.apply}.
         *
         * If the `target` is an instance of a class declared using {@link Ext#define Ext.define},
         * the `overrides` are applied to only that instance. In this case, methods are
         * specially processed to allow them to use {@link Ext.Base#callParent}.
         *
         *      var panel = new Ext.Panel({ ... });
         *
         *      Ext.override(panel, {
         *          initComponent: function () {
         *              // extra processing...
         *
         *              this.callParent();
         *          }
         *      });
         *
         * If the `target` is none of these, the `overrides` are applied to the `target`
         * using {@link Ext#apply Ext.apply}.
         *
         * Please refer to {@link Ext#define Ext.define} and {@link Ext.Base#override} for
         * further details.
         *
         * @param {Object} target The target to override.
         * @param {Object} overrides The properties to add or replace on `target`.
         * @method override
         */
        override: function(target, overrides) {
            if (target.$isClass) {
                target.override(overrides);
            } else if (typeof target === 'function') {
                Ext.apply(target.prototype, overrides);
            } else {
                var owner = target.self,
                    privates;
                if (owner && owner.$isClass) {
                    // if (instance of Ext.define'd class)
                    privates = overrides.privates;
                    if (privates) {
                        overrides = Ext.apply({}, overrides);
                        delete overrides.privates;
                        addInstanceOverrides(target, owner, privates);
                    }
                    addInstanceOverrides(target, owner, overrides);
                } else {
                    Ext.apply(target, overrides);
                }
            }
            return target;
        },
        /**
         * Returns the given value itself if it's not empty, as described in {@link Ext#isEmpty}; returns the default
         * value (second argument) otherwise.
         *
         * @param {Object} value The value to test.
         * @param {Object} defaultValue The value to return if the original value is empty.
         * @param {Boolean} [allowBlank=false] `true` to allow zero length strings to qualify as non-empty.
         * @return {Object} value, if non-empty, else defaultValue.
         */
        valueFrom: function(value, defaultValue, allowBlank) {
            return Ext.isEmpty(value, allowBlank) ? defaultValue : value;
        },
        /**
         * Returns true if the passed value is empty, false otherwise. The value is deemed to be empty if it is either:
         *
         * - `null`
         * - `undefined`
         * - a zero-length array
         * - a zero-length string (Unless the `allowEmptyString` parameter is set to `true`)
         *
         * @param {Object} value The value to test.
         * @param {Boolean} [allowEmptyString=false] `true` to allow empty strings.
         * @return {Boolean}
         */
        isEmpty: function(value, allowEmptyString) {
            return (value == null) || (!allowEmptyString ? value === '' : false) || (Ext.isArray(value) && value.length === 0);
        },
        /**
         * Returns `true` if the passed value is a JavaScript Array, `false` otherwise.
         *
         * @param {Object} target The target to test.
         * @return {Boolean}
         * @method
         */
        isArray: ('isArray' in Array) ? Array.isArray : function(value) {
            return toString.call(value) === '[object Array]';
        },
        /**
         * Returns `true` if the passed value is a JavaScript Date object, `false` otherwise.
         * @param {Object} object The object to test.
         * @return {Boolean}
         */
        isDate: function(value) {
            return toString.call(value) === '[object Date]';
        },
        /**
         * Returns 'true' if the passed value is a String that matches the MS Date JSON
         * encoding format.
         * @param {String} value The string to test.
         * @return {Boolean}
         */
        isMSDate: function(value) {
            if (!Ext.isString(value)) {
                return false;
            }
            return MSDateRe.test(value);
        },
        /**
         * Returns `true` if the passed value is a JavaScript Object, `false` otherwise.
         * @param {Object} value The value to test.
         * @return {Boolean}
         * @method
         */
        isObject: (toString.call(null) === '[object Object]') ? function(value) {
            // check ownerDocument here as well to exclude DOM nodes
            return value != null && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
        } : function(value) {
            return toString.call(value) === '[object Object]';
        },
        /**
         * @private
         */
        isSimpleObject: function(value) {
            return value instanceof Object && value.constructor === Object;
        },
        /**
         * Returns `true` if the passed value is a JavaScript 'primitive', a string, number
         * or boolean.
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isPrimitive: function(value) {
            var type = typeof value;
            return type === 'string' || type === 'number' || type === 'boolean';
        },
        /**
         * Returns `true` if the passed value is a JavaScript Function, `false` otherwise.
         * @param {Object} value The value to test.
         * @return {Boolean}
         * @method
         */
        isFunction: // Safari 3.x and 4.x returns 'function' for typeof <NodeList>, hence we need to fall back to using
        // Object.prototype.toString (slower)
        (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function(value) {
            return !!value && toString.call(value) === '[object Function]';
        } : function(value) {
            return !!value && typeof value === 'function';
        },
        /**
         * Returns `true` if the passed value is a number. Returns `false` for non-finite numbers.
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },
        /**
         * Validates that a value is numeric.
         * @param {Object} value Examples: 1, '1', '2.34'
         * @return {Boolean} True if numeric, false otherwise
         */
        isNumeric: function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },
        /**
         * Returns `true `if the passed value is a string.
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isString: function(value) {
            return typeof value === 'string';
        },
        /**
         * Returns `true` if the passed value is a boolean.
         *
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },
        /**
         * Returns `true` if the passed value is an HTMLElement
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isElement: function(value) {
            return value ? value.nodeType === 1 : false;
        },
        /**
         * Returns `true` if the passed value is a TextNode
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isTextNode: function(value) {
            return value ? value.nodeName === "#text" : false;
        },
        /**
         * Returns `true` if the passed value is defined.
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isDefined: function(value) {
            return typeof value !== 'undefined';
        },
        /**
         * Returns `true` if the passed value is iterable, that is, if elements of it are addressable using array
         * notation with numeric indices, `false` otherwise.
         *
         * Arrays and function `arguments` objects are iterable. Also HTML collections such as `NodeList` and `HTMLCollection'
         * are iterable.
         *
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isIterable: function(value) {
            // To be iterable, the object must have a numeric length property and must not be a string or function.
            if (!value || typeof value.length !== 'number' || typeof value === 'string' || Ext.isFunction(value)) {
                return false;
            }
            // Certain "standard" collections in IE (such as document.images) do not offer the correct
            // Javascript Object interface; specifically, they lack the propertyIsEnumerable method.
            // And the item property while it does exist is not typeof "function"
            if (!value.propertyIsEnumerable) {
                return !!value.item;
            }
            // If it is a regular, interrogatable JS object (not an IE ActiveX object), then...
            // If it has its own property called "length", but not enumerable, it's iterable
            if (value.hasOwnProperty('length') && !value.propertyIsEnumerable('length')) {
                return true;
            }
            // Test against whitelist which includes known iterable collection types
            return iterableRe.test(toString.call(value));
        },
        /**
         * This method returns `true` if debug is enabled for the specified class. This is
         * done by checking the `Ext.debugConfig.hooks` config for the closest match to the
         * given `className`.
         * @param {String} className The name of the class.
         * @return {Boolean} `true` if debug is enabled for the specified class.
         */
        isDebugEnabled: function(className, defaultEnabled) {
            var debugConfig = Ext.debugConfig.hooks;
            if (debugConfig.hasOwnProperty(className)) {
                return debugConfig[className];
            }
            var enabled = debugConfig['*'],
                prefixLength = 0;
            if (defaultEnabled !== undefined) {
                enabled = defaultEnabled;
            }
            if (!className) {
                return enabled;
            }
            for (var prefix in debugConfig) {
                var value = debugConfig[prefix];
                // if prefix=='Ext' match 'Ext.foo.Bar' but not 'Ext4.foo.Bar'
                if (className.charAt(prefix.length) === '.') {
                    if (className.substring(0, prefix.length) === prefix) {
                        if (prefixLength < prefix.length) {
                            prefixLength = prefix.length;
                            enabled = value;
                        }
                    }
                }
            }
            return enabled;
        } || emptyFn,
        /**
         * Clone simple variables including array, {}-like objects, DOM nodes and Date without keeping the old reference.
         * A reference for the object itself is returned if it's not a direct descendant of Object. For model cloning,
         * see {@link Ext.data.Model#copy Model.copy}.
         *
         * @param {Object} item The variable to clone
         * @param {Boolean} [cloneDom=true] `true` to clone DOM nodes.
         * @return {Object} clone
         */
        clone: function(item, cloneDom) {
            if (item == null) {
                return item;
            }
            // DOM nodes
            // TODO proxy this to Ext.Element.clone to handle automatic id attribute changing
            // recursively
            if (cloneDom !== false && item.nodeType && item.cloneNode) {
                return item.cloneNode(true);
            }
            var type = toString.call(item),
                i, j, k, clone, key;
            // Date
            if (type === '[object Date]') {
                return new Date(item.getTime());
            }
            // Array
            if (type === '[object Array]') {
                i = item.length;
                clone = [];
                while (i--) {
                    clone[i] = Ext.clone(item[i], cloneDom);
                }
            }
            // Object
            else if (type === '[object Object]' && item.constructor === Object) {
                clone = {};
                for (key in item) {
                    clone[key] = Ext.clone(item[key], cloneDom);
                }
                if (enumerables) {
                    for (j = enumerables.length; j--; ) {
                        k = enumerables[j];
                        if (item.hasOwnProperty(k)) {
                            clone[k] = item[k];
                        }
                    }
                }
            }
            return clone || item;
        },
        /**
         * @private
         * Generate a unique reference of Ext in the global scope, useful for sandboxing
         */
        getUniqueGlobalNamespace: function() {
            var uniqueGlobalNamespace = this.uniqueGlobalNamespace,
                i;
            if (uniqueGlobalNamespace === undefined) {
                i = 0;
                do {
                    uniqueGlobalNamespace = 'ExtBox' + (++i);
                } while (global[uniqueGlobalNamespace] !== undefined);
                global[uniqueGlobalNamespace] = Ext;
                this.uniqueGlobalNamespace = uniqueGlobalNamespace;
            }
            return uniqueGlobalNamespace;
        },
        /**
         * @private
         */
        functionFactoryCache: {},
        cacheableFunctionFactory: function() {
            var me = this,
                args = Array.prototype.slice.call(arguments),
                cache = me.functionFactoryCache,
                idx, fn, ln;
            if (Ext.isSandboxed) {
                ln = args.length;
                if (ln > 0) {
                    ln--;
                    args[ln] = 'var Ext=window.' + Ext.name + ';' + args[ln];
                }
            }
            idx = args.join('');
            fn = cache[idx];
            if (!fn) {
                fn = Function.prototype.constructor.apply(Function.prototype, args);
                cache[idx] = fn;
            }
            return fn;
        },
        functionFactory: function() {
            var args = Array.prototype.slice.call(arguments),
                ln;
            if (Ext.isSandboxed) {
                ln = args.length;
                if (ln > 0) {
                    ln--;
                    args[ln] = 'var Ext=window.' + Ext.name + ';' + args[ln];
                }
            }
            return Function.prototype.constructor.apply(Function.prototype, args);
        },
        /**
         * @private
         */
        Logger: {
            log: function(message, priority) {
                if (message && global.console) {
                    if (!priority || !(priority in global.console)) {
                        priority = 'log';
                    }
                    message = '[' + priority.toUpperCase() + '] ' + message;
                    global.console[priority](message);
                }
            },
            verbose: function(message) {
                this.log(message, 'verbose');
            },
            info: function(message) {
                this.log(message, 'info');
            },
            warn: function(message) {
                this.log(message, 'warn');
            },
            error: function(message) {
                throw new Error(message);
            },
            deprecate: function(message) {
                this.log(message, 'warn');
            }
        } || {
            verbose: emptyFn,
            log: emptyFn,
            info: emptyFn,
            warn: emptyFn,
            error: function(message) {
                throw new Error(message);
            },
            deprecate: emptyFn
        },
        ariaWarn: function(target, msg) {
            // The checks still can be disabled by setting Ext.enableAria to false;
            // this is for backwards compatibility. Also make sure we're not running
            // under the slicer, warnings are pointless in that case.
            if (Ext.enableAria && !Ext.slicer) {
                if (!Ext.ariaWarn.first) {
                    Ext.ariaWarn.first = true;
                    Ext.log.warn("WAI-ARIA compatibility warnings can be suppressed " + "by adding the following to application startup code:");
                    Ext.log.warn("    Ext.ariaWarn = Ext.emptyFn;");
                }
                Ext.log.warn({
                    msg: msg,
                    dump: target
                });
            }
        },
        /**
         * @private
         */
        getElementById: function(id) {
            return document.getElementById(id);
        },
        /**
         * @member Ext
         * @private
         */
        splitAndUnescape: (function() {
            var cache = {};
            return function(origin, delimiter) {
                if (!origin) {
                    return [];
                } else if (!delimiter) {
                    return [
                        origin
                    ];
                }
                var replaceRe = cache[delimiter] || (cache[delimiter] = new RegExp('\\\\' + delimiter, 'g')),
                    result = [],
                    parts, part;
                parts = origin.split(delimiter);
                while ((part = parts.shift()) !== undefined) {
                    // If any of the parts ends with the delimiter that means
                    // the delimiter was escaped and the split was invalid. Roll back.
                    while (part.charAt(part.length - 1) === '\\' && parts.length > 0) {
                        part = part + delimiter + parts.shift();
                    }
                    // Now that we have split the parts, unescape the delimiter char
                    part = part.replace(replaceRe, delimiter);
                    result.push(part);
                }
                return result;
            };
        })(),
        /**
         * @private
         */
        getExpando: function(target, id) {
            var expandos = target.$expandos;
            return expandos && expandos[id] || null;
        },
        /**
         * @private
         */
        setExpando: function(target, id, value) {
            var expandos = target.$expandos;
            if (value !== undefined) {
                (expandos || (target.$expandos = {}))[id] = value;
            } else if (expandos) {
                delete expandos[id];
            }
        }
    });
    // Ext.apply(Ext
    Ext.returnTrue.$nullFn = Ext.returnId.$nullFn = true;
}());

// @override Ext
// This file is order extremely early (typically right after Ext.js) due to the
// above Cmd directive. This ensures that the "modern" and "classic" platform tags
// are properly set up as soon as possible.
Ext.platformTags.modern = !(Ext.platformTags.classic = Ext.isClassic = true);

/**
 * A helper class for the native JavaScript Error object that adds a few useful capabilities for handling
 * errors in an application. When you use Ext.Error to {@link #raise} an error from within any class that
 * uses the Class System, the Error class can automatically add the source class and method from which
 * the error was raised. It also includes logic to automatically log the error to the console, if available,
 * with additional metadata about the error. In all cases, the error will always be thrown at the end so that
 * execution will halt.
 *
 * Ext.Error also offers a global error {@link #handle handling} method that can be overridden in order to
 * handle application-wide errors in a single spot. You can optionally {@link #ignore} errors altogether,
 * although in a real application it's usually a better idea to override the handling function and perform
 * logging or some other method of reporting the errors in a way that is meaningful to the application.
 *
 * At its simplest you can simply raise an error as a simple string from within any code:
 *
 * Example usage:
 *
 *     Ext.raise('Something bad happened!');
 *
 * If raised from plain JavaScript code, the error will be logged to the console (if available) and the message
 * displayed. In most cases however you'll be raising errors from within a class, and it may often be useful to add
 * additional metadata about the error being raised.  The {@link #raise} method can also take a config object.
 * In this form the `msg` attribute becomes the error description, and any other data added to the config gets
 * added to the error object and, if the console is available, logged to the console for inspection.
 *
 * Example usage:
 *
 *     Ext.define('Ext.Foo', {
 *         doSomething: function(option){
 *             if (someCondition === false) {
 *                 Ext.raise({
 *                     msg: 'You cannot do that!',
 *                     option: option,   // whatever was passed into the method
 *                     'error code': 100 // other arbitrary info
 *                 });
 *             }
 *         }
 *     });
 *
 * If a console is available (that supports the `console.dir` function) you'll see console output like:
 *
 *     An error was raised with the following data:
 *     option:         Object { foo: "bar"}
 *         foo:        "bar"
 *     error code:     100
 *     msg:            "You cannot do that!"
 *     sourceClass:   "Ext.Foo"
 *     sourceMethod:  "doSomething"
 *
 *     uncaught exception: You cannot do that!
 *
 * As you can see, the error will report exactly where it was raised and will include as much information as the
 * raising code can usefully provide.
 *
 * If you want to handle all application errors globally you can simply override the static {@link #handle} method
 * and provide whatever handling logic you need. If the method returns true then the error is considered handled
 * and will not be thrown to the browser. If anything but true is returned then the error will be thrown normally.
 *
 * Example usage:
 *
 *     Ext.Error.handle = function(err) {
 *         if (err.someProperty == 'NotReallyAnError') {
 *             // maybe log something to the application here if applicable
 *             return true;
 *         }
 *         // any non-true return value (including none) will cause the error to be thrown
 *     }
 *
 * @class Ext.Error
 */
(function() {
    // @define Ext.lang.Error
    // @define Ext.Error
    // @require Ext
    function toString() {
        var me = this,
            cls = me.sourceClass,
            method = me.sourceMethod,
            msg = me.msg;
        if (method) {
            if (msg) {
                method += '(): ';
                method += msg;
            } else {
                method += '()';
            }
        }
        if (cls) {
            method = method ? (cls + '.' + method) : cls;
        }
        return method || msg || '';
    }
    Ext.Error = function(config) {
        if (Ext.isString(config)) {
            config = {
                msg: config
            };
        }
        var error = new Error();
        Ext.apply(error, config);
        error.message = error.message || error.msg;
        // 'message' is standard ('msg' is non-standard)
        // note: the above does not work in old WebKit (me.message is readonly) (Safari 4)
        error.toString = toString;
        return error;
    };
    Ext.apply(Ext.Error, {
        /**
         * @property {Boolean} ignore
         * Static flag that can be used to globally disable error reporting to the browser if set to true
         * (defaults to false). Note that if you ignore Ext errors it's likely that some other code may fail
         * and throw a native JavaScript error thereafter, so use with caution. In most cases it will probably
         * be preferable to supply a custom error {@link #handle handling} function instead.
         *
         * Example usage:
         *
         *     Ext.Error.ignore = true;
         *
         * @static
         */
        ignore: false,
        /**
         * This method is called internally by {@link Ext#raise}. Application code should
         * call {@link Ext#raise} instead of calling this method directly.
         *
         * @static
         * @deprecated 6.0.0 Use {@link Ext#raise} instead.
         */
        raise: function(err) {
            err = err || {};
            if (Ext.isString(err)) {
                err = {
                    msg: err
                };
            }
            var me = this,
                method = me.raise.caller,
                msg, name;
            if (method === Ext.raise) {
                method = method.caller;
            }
            if (method) {
                if (!err.sourceMethod && (name = method.$name)) {
                    err.sourceMethod = name;
                }
                if (!err.sourceClass && (name = method.$owner) && (name = name.$className)) {
                    err.sourceClass = name;
                }
            }
            if (me.handle(err) !== true) {
                msg = toString.call(err);
                Ext.log({
                    msg: msg,
                    level: 'error',
                    dump: err,
                    stack: true
                });
                throw new Ext.Error(err);
            }
        },
        /**
         * Globally handle any Ext errors that may be raised, optionally providing custom logic to
         * handle different errors individually. Return true from the function to bypass throwing the
         * error to the browser, otherwise the error will be thrown and execution will halt.
         *
         * Example usage:
         *
         *     Ext.Error.handle = function(err) {
         *         if (err.someProperty == 'NotReallyAnError') {
         *             // maybe log something to the application here if applicable
         *             return true;
         *         }
         *         // any non-true return value (including none) will cause the error to be thrown
         *     }
         *
         * @param {Object} err The error being raised. It will contain any attributes that were originally
         * raised with it, plus properties about the method and class from which the error originated
         * (if raised from a class that uses the Class System).
         * @static
         */
        handle: function() {
            return this.ignore;
        }
    });
})();
/**
 * Create a function that will throw an error if called (in debug mode) with a message that
 * indicates the method has been removed.
 * @param {String} suggestion Optional text to include in the message (a workaround perhaps).
 * @return {Function} The generated function.
 * @private
 */
Ext.deprecated = function(suggestion) {
    if (!suggestion) {
        suggestion = '';
    }
    function fail() {
        Ext.raise('The method "' + fail.$owner.$className + '.' + fail.$name + '" has been removed. ' + suggestion);
    }
    return fail;
    return Ext.emptyFn;
};
/**
 * Raise an error that can include additional data and supports automatic console logging
 * if available. You can pass a string error message or an object with the `msg` attribute
 * which will be used as the error message. The object can contain any other name-value
 * attributes (or objects) to be logged along with the error.
 *
 * Note that after displaying the error message a JavaScript error will ultimately be
 * thrown so that execution will halt.
 *
 * Example usage:
 *
 *     Ext.raise('A simple string error message');
 *
 *     // or...
 *
 *     Ext.define('Ext.Foo', {
 *         doSomething: function(option){
 *             if (someCondition === false) {
 *                 Ext.raise({
 *                     msg: 'You cannot do that!',
 *                     option: option,   // whatever was passed into the method
 *                     code: 100 // other arbitrary info
 *                 });
 *             }
 *         }
 *     });
 *
 * @param {String/Object} err The error message string, or an object containing the
 * attribute "msg" that will be used as the error message. Any other data included in the
 * object will also be logged to the browser console, if available.
 * @method raise
 * @member Ext
 */
Ext.raise = function() {
    Ext.Error.raise.apply(Ext.Error, arguments);
};
/*
 * This mechanism is used to notify the user of the first error encountered on the page. In
 * most cases errors go unobserved especially on IE. This mechanism pushes this information
 * to the status bar so that users don't miss it.
 */
(function() {
    if (typeof window === 'undefined') {
        return;
    }
    // build system or some such environment...
    var last = 0,
        // This method is called to notify the user of the current error status.
        notify = function() {
            var cnt = Ext.log && Ext.log.counters,
                n = cnt && (cnt.error + cnt.warn + cnt.info + cnt.log),
                msg;
            // Put log counters to the status bar (for most browsers):
            if (n && last !== n) {
                msg = [];
                if (cnt.error) {
                    msg.push('Errors: ' + cnt.error);
                }
                if (cnt.warn) {
                    msg.push('Warnings: ' + cnt.warn);
                }
                if (cnt.info) {
                    msg.push('Info: ' + cnt.info);
                }
                if (cnt.log) {
                    msg.push('Log: ' + cnt.log);
                }
                window.status = '*** ' + msg.join(' -- ');
                last = n;
            }
        };
    // Allow unit tests to skip this when checking for dangling timers
    notify.$skipTimerCheck = true;
    // window.onerror sounds ideal but it prevents the built-in error dialog from doing
    // its (better) thing.
    setInterval(notify, 1000);
}());

/**
 * @class Ext.Array
 * @singleton
 *
 * A set of useful static methods to deal with arrays; provide missing methods for
 * older browsers.
 */
Ext.Array = (function() {
    // @define Ext.lang.Array
    // @define Ext.Array
    // @require Ext
    // @require Ext.lang.Error
    var arrayPrototype = Array.prototype,
        slice = arrayPrototype.slice,
        supportsSplice = (function() {
            var array = [],
                lengthBefore,
                j = 20;
            if (!array.splice) {
                return false;
            }
            // This detects a bug in IE8 splice method:
            // see http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/6e946d03-e09f-4b22-a4dd-cd5e276bf05a/
            while (j--) {
                array.push("A");
            }
            array.splice(15, 0, "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F");
            lengthBefore = array.length;
            //41
            array.splice(13, 0, "XXX");
            // add one element
            if (lengthBefore + 1 !== array.length) {
                return false;
            }
            // end IE8 bug
            return true;
        }()),
        supportsIndexOf = 'indexOf' in arrayPrototype,
        supportsSliceOnNodeList = true;
    // Sort an array using the comparator, but if the comparator returns zero, use the objects' original indices to tiebreak
    // This results in a stable sort.
    function stableSort(array, userComparator) {
        var len = array.length,
            indices = new Array(len),
            i;
        // generate 0-n index map from original array
        for (i = 0; i < len; i++) {
            indices[i] = i;
        }
        // Sort indices array using a comparator which compares the original values at the two indices, and uses those indices as a tiebreaker
        indices.sort(function(index1, index2) {
            return userComparator(array[index1], array[index2]) || (index1 - index2);
        });
        // Reconsitute a sorted array using the array that the indices have been sorted into
        for (i = 0; i < len; i++) {
            indices[i] = array[indices[i]];
        }
        // Rebuild the original array
        for (i = 0; i < len; i++) {
            array[i] = indices[i];
        }
        return array;
    }
    try {
        // IE 6 - 8 will throw an error when using Array.prototype.slice on NodeList
        if (typeof document !== 'undefined') {
            slice.call(document.getElementsByTagName('body'));
        }
    } catch (e) {
        supportsSliceOnNodeList = false;
    }
    var fixArrayIndex = function(array, index) {
            return (index < 0) ? Math.max(0, array.length + index) : Math.min(array.length, index);
        },
        /*
    Does the same work as splice, but with a slightly more convenient signature. The splice
    method has bugs in IE8, so this is the implementation we use on that platform.

    The rippling of items in the array can be tricky. Consider two use cases:

                  index=2
                  removeCount=2
                 /=====\
        +---+---+---+---+---+---+---+---+
        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
        +---+---+---+---+---+---+---+---+
                         /  \/  \/  \/  \
                        /   /\  /\  /\   \
                       /   /  \/  \/  \   +--------------------------+
                      /   /   /\  /\   +--------------------------+   \
                     /   /   /  \/  +--------------------------+   \   \
                    /   /   /   /+--------------------------+   \   \   \
                   /   /   /   /                             \   \   \   \
                  v   v   v   v                               v   v   v   v
        +---+---+---+---+---+---+       +---+---+---+---+---+---+---+---+---+
        | 0 | 1 | 4 | 5 | 6 | 7 |       | 0 | 1 | a | b | c | 4 | 5 | 6 | 7 |
        +---+---+---+---+---+---+       +---+---+---+---+---+---+---+---+---+
        A                               B        \=========/
                                                 insert=[a,b,c]

    In case A, it is obvious that copying of [4,5,6,7] must be left-to-right so
    that we don't end up with [0,1,6,7,6,7]. In case B, we have the opposite; we
    must go right-to-left or else we would end up with [0,1,a,b,c,4,4,4,4].
    */
        replaceSim = function(array, index, removeCount, insert) {
            var add = insert ? insert.length : 0,
                length = array.length,
                pos = fixArrayIndex(array, index);
            // we try to use Array.push when we can for efficiency...
            if (pos === length) {
                if (add) {
                    array.push.apply(array, insert);
                }
            } else {
                var remove = Math.min(removeCount, length - pos),
                    tailOldPos = pos + remove,
                    tailNewPos = tailOldPos + add - remove,
                    tailCount = length - tailOldPos,
                    lengthAfterRemove = length - remove,
                    i;
                if (tailNewPos < tailOldPos) {
                    // case A
                    for (i = 0; i < tailCount; ++i) {
                        array[tailNewPos + i] = array[tailOldPos + i];
                    }
                } else if (tailNewPos > tailOldPos) {
                    // case B
                    for (i = tailCount; i--; ) {
                        array[tailNewPos + i] = array[tailOldPos + i];
                    }
                }
                // else, add == remove (nothing to do)
                if (add && pos === lengthAfterRemove) {
                    array.length = lengthAfterRemove;
                    // truncate array
                    array.push.apply(array, insert);
                } else {
                    array.length = lengthAfterRemove + add;
                    // reserves space
                    for (i = 0; i < add; ++i) {
                        array[pos + i] = insert[i];
                    }
                }
            }
            return array;
        },
        replaceNative = function(array, index, removeCount, insert) {
            if (insert && insert.length) {
                // Inserting at index zero with no removing: use unshift
                if (index === 0 && !removeCount) {
                    array.unshift.apply(array, insert);
                }
                // Inserting/replacing in middle of array
                else if (index < array.length) {
                    array.splice.apply(array, [
                        index,
                        removeCount
                    ].concat(insert));
                } else // Appending to array
                {
                    array.push.apply(array, insert);
                }
            } else {
                array.splice(index, removeCount);
            }
            return array;
        },
        eraseSim = function(array, index, removeCount) {
            return replaceSim(array, index, removeCount);
        },
        eraseNative = function(array, index, removeCount) {
            array.splice(index, removeCount);
            return array;
        },
        spliceSim = function(array, index, removeCount) {
            var len = arguments.length,
                pos = fixArrayIndex(array, index),
                removed;
            if (len < 3) {
                removeCount = array.length - pos;
            }
            removed = array.slice(index, fixArrayIndex(array, pos + removeCount));
            if (len < 4) {
                replaceSim(array, pos, removeCount);
            } else {
                replaceSim(array, pos, removeCount, slice.call(arguments, 3));
            }
            return removed;
        },
        spliceNative = function(array) {
            return array.splice.apply(array, slice.call(arguments, 1));
        },
        erase = supportsSplice ? eraseNative : eraseSim,
        replace = supportsSplice ? replaceNative : replaceSim,
        splice = supportsSplice ? spliceNative : spliceSim,
        // NOTE: from here on, use erase, replace or splice (not native methods)...
        ExtArray = {
            /**
         * This method returns the index that a given item would be inserted into the
         * given (sorted) `array`. Note that the given `item` may or may not be in the
         * array. This method will return the index of where the item *should* be.
         *
         * For example:
         *
         *      var array = [ 'A', 'D', 'G', 'K', 'O', 'R', 'X' ];
         *      var index = Ext.Array.binarySearch(array, 'E');
         *
         *      console.log('index: ' + index);
         *      // logs "index: 2"
         *
         *      array.splice(index, 0, 'E');
         *
         *      console.log('array : ' + array.join(''));
         *      // logs "array: ADEGKORX"
         *
         * @param {Object[]} array The array to search.
         * @param {Object} item The item that you want to insert into the `array`.
         * @param {Number} [begin=0] The first index in the `array` to consider.
         * @param {Number} [end=array.length] The index that marks the end of the range
         * to consider. The item at this index is *not* considered.
         * @param {Function} [compareFn] The comparison function that matches the sort
         * order of the `array`. The default `compareFn` compares items using less-than
         * and greater-than operators.
         * @return {Number} The index for the given item in the given array based on
         * the current sorters.
         */
            binarySearch: function(array, item, begin, end, compareFn) {
                var length = array.length,
                    middle, comparison;
                if (begin instanceof Function) {
                    compareFn = begin;
                    begin = 0;
                    end = length;
                } else if (end instanceof Function) {
                    compareFn = end;
                    end = length;
                } else {
                    if (begin === undefined) {
                        begin = 0;
                    }
                    if (end === undefined) {
                        end = length;
                    }
                    compareFn = compareFn || ExtArray.lexicalCompare;
                }
                --end;
                while (begin <= end) {
                    middle = (begin + end) >> 1;
                    comparison = compareFn(item, array[middle]);
                    if (comparison >= 0) {
                        begin = middle + 1;
                    } else if (comparison < 0) {
                        end = middle - 1;
                    }
                }
                return begin;
            },
            defaultCompare: function(lhs, rhs) {
                return (lhs < rhs) ? -1 : ((lhs > rhs) ? 1 : 0);
            },
            // Default comparator to use when no comparator is specified for the sort method.
            // Javascript sort does LEXICAL comparison.
            lexicalCompare: function(lhs, rhs) {
                lhs = String(lhs);
                rhs = String(rhs);
                return (lhs < rhs) ? -1 : ((lhs > rhs) ? 1 : 0);
            },
            /**
         * Iterates an array or an iterable value and invoke the given callback function for each item.
         *
         *     var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];
         *
         *     Ext.Array.each(countries, function(name, index, countriesItSelf) {
         *         console.log(name);
         *     });
         *
         *     var sum = function() {
         *         var sum = 0;
         *
         *         Ext.Array.each(arguments, function(value) {
         *             sum += value;
         *         });
         *
         *         return sum;
         *     };
         *
         *     sum(1, 2, 3); // returns 6
         *
         * The iteration can be stopped by returning `false` from the callback function.  
         * Returning `undefined` (i.e `return;`) will only exit the callback function and 
         * proceed with the next iteration of the loop.
         *
         *     Ext.Array.each(countries, function(name, index, countriesItSelf) {
         *         if (name === 'Singapore') {
         *             return false; // break here
         *         }
         *     });
         *
         * {@link Ext#each Ext.each} is alias for {@link Ext.Array#each Ext.Array.each}
         *
         * @param {Array/NodeList/Object} iterable The value to be iterated. If this
         * argument is not iterable, the callback function is called once.
         * @param {Function} fn The callback function. If it returns `false`, the iteration
         * stops and this method returns the current `index`. Returning `undefined` (i.e 
         * `return;`) will only exit the callback function and proceed with the next iteration 
         * in the loop.
         * @param {Object} fn.item The item at the current `index` in the passed `array`
         * @param {Number} fn.index The current `index` within the `array`
         * @param {Array} fn.allItems The `array` itself which was passed as the first argument
         * @param {Boolean} fn.return Return `false` to stop iteration.
         * @param {Object} [scope] The scope (`this` reference) in which the specified function is executed.
         * @param {Boolean} [reverse=false] Reverse the iteration order (loop from the end to the beginning).
         * @return {Boolean} See description for the `fn` parameter.
         */
            each: function(array, fn, scope, reverse) {
                array = ExtArray.from(array);
                var i,
                    ln = array.length;
                if (reverse !== true) {
                    for (i = 0; i < ln; i++) {
                        if (fn.call(scope || array[i], array[i], i, array) === false) {
                            return i;
                        }
                    }
                } else {
                    for (i = ln - 1; i > -1; i--) {
                        if (fn.call(scope || array[i], array[i], i, array) === false) {
                            return i;
                        }
                    }
                }
                return true;
            },
            /*
         * Calculates the the insertion index of a passed object into the passed Array according
         * to the passed comparator function. Note that the passed Array *MUST* already be ordered.
         * @param {Object} item The item to calculate the insertion index for.
         * @param {Array} The array into which the item is to be inserted.
         * @param {Function} comparatorFn The comparison function. Must return -1 or 0 or 1.
         * @param {Object} comparatorFn.lhs The left object to compare.
         * @param {Object} comparatorFn.rhs The right object to compare.
         * @param {Number} index The possible correct index to try first before a binary
         * search is instigated.
         */
            findInsertionIndex: function(item, items, comparatorFn, index) {
                var len = items.length,
                    beforeCheck, afterCheck;
                comparatorFn = comparatorFn || ExtArray.lexicalCompare;
                if (index < len) {
                    beforeCheck = index > 0 ? comparatorFn(items[index - 1], item) : 0;
                    afterCheck = index < len - 1 ? comparatorFn(item, items[index]) : 0;
                    if (beforeCheck < 1 && afterCheck < 1) {
                        return index;
                    }
                }
                return ExtArray.binarySearch(items, item, comparatorFn);
            },
            /**
         * @method
         * Iterates an array and invoke the given callback function for each item. Note that this will simply
         * delegate to the native `Array.prototype.forEach` method if supported. It doesn't support stopping the
         * iteration by returning `false` in the callback function like {@link Ext.Array#each}. However, performance
         * could be much better in modern browsers comparing with {@link Ext.Array#each}
         *
         * @param {Array} array The array to iterate.
         * @param {Function} fn The callback function.
         * @param {Object} fn.item The item at the current `index` in the passed `array`.
         * @param {Number} fn.index The current `index` within the `array`.
         * @param {Array}  fn.allItems The `array` itself which was passed as the first argument.
         * @param {Object} scope (Optional) The execution scope (`this`) in which the
         * specified function is executed.
         */
            forEach: ('forEach' in arrayPrototype) ? function(array, fn, scope) {
                return array.forEach(fn, scope);
            } : function(array, fn, scope) {
                for (var i = 0,
                    ln = array.length; i < ln; i++) {
                    fn.call(scope, array[i], i, array);
                }
            },
            /**
         * @method
         * Get the index of the provided `item` in the given `array`, a supplement for the
         * missing arrayPrototype.indexOf in Internet Explorer.
         *
         * @param {Array} array The array to check.
         * @param {Object} item The item to find.
         * @param {Number} from (Optional) The index at which to begin the search.
         * @return {Number} The index of item in the array (or -1 if it is not found).
         */
            indexOf: supportsIndexOf ? function(array, item, from) {
                // May be called with no array which causes an error.
                return array ? arrayPrototype.indexOf.call(array, item, from) : -1;
            } : function(array, item, from) {
                var i,
                    length = array ? array.length : 0;
                for (i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
                    if (array[i] === item) {
                        return i;
                    }
                }
                return -1;
            },
            /**
         * @method
         * Checks whether or not the given `array` contains the specified `item`.
         *
         * @param {Array} array The array to check.
         * @param {Object} item The item to find.
         * @return {Boolean} `true` if the array contains the item, `false` otherwise.
         */
            contains: supportsIndexOf ? function(array, item) {
                return arrayPrototype.indexOf.call(array, item) !== -1;
            } : function(array, item) {
                var i, ln;
                for (i = 0 , ln = array.length; i < ln; i++) {
                    if (array[i] === item) {
                        return true;
                    }
                }
                return false;
            },
            /**
         * Converts any iterable (numeric indices and a length property) into a true array.
         *
         *     function test() {
         *         var args = Ext.Array.toArray(arguments),
         *             fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);
         *
         *         alert(args.join(' '));
         *         alert(fromSecondToLastArgs.join(' '));
         *     }
         *
         *     test('just', 'testing', 'here'); // alerts 'just testing here';
         *                                      // alerts 'testing here';
         *
         *     Ext.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array
         *     Ext.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']
         *     Ext.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l']
         *
         * {@link Ext#toArray Ext.toArray} is alias for {@link Ext.Array#toArray Ext.Array.toArray}
         *
         * @param {Object} iterable the iterable object to be turned into a true Array.
         * @param {Number} [start=0] a zero-based index that specifies the start of extraction.
         * @param {Number} [end=-1] a 1-based index that specifies the end of extraction.
         * @return {Array}
         */
            toArray: function(iterable, start, end) {
                if (!iterable || !iterable.length) {
                    return [];
                }
                if (typeof iterable === 'string') {
                    iterable = iterable.split('');
                }
                if (supportsSliceOnNodeList) {
                    return slice.call(iterable, start || 0, end || iterable.length);
                }
                var array = [],
                    i;
                start = start || 0;
                end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;
                for (i = start; i < end; i++) {
                    array.push(iterable[i]);
                }
                return array;
            },
            /**
         * Plucks the value of a property from each item in the Array. Example:
         *
         *     Ext.Array.pluck(Ext.query("p"), "className"); // [el1.className, el2.className, ..., elN.className]
         *
         * @param {Array/NodeList} array The Array of items to pluck the value from.
         * @param {String} propertyName The property name to pluck from each element.
         * @return {Array} The value from each item in the Array.
         */
            pluck: function(array, propertyName) {
                var ret = [],
                    i, ln, item;
                for (i = 0 , ln = array.length; i < ln; i++) {
                    item = array[i];
                    ret.push(item[propertyName]);
                }
                return ret;
            },
            /**
         * @method
         * Creates a new array with the results of calling a provided function on every element in this array.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item.
         * @param {Mixed} fn.item Current item.
         * @param {Number} fn.index Index of the item.
         * @param {Array} fn.array The whole array that's being iterated.
         * @param {Object} [scope] Callback function scope
         * @return {Array} results
         */
            map: ('map' in arrayPrototype) ? function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.map must have a callback function passed as second argument.');
                return array.map(fn, scope);
            } : function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.map must have a callback function passed as second argument.');
                var len = array.length,
                    results = new Array(len),
                    i;
                for (i = 0; i < len; i++) {
                    results[i] = fn.call(scope, array[i], i, array);
                }
                return results;
            },
            /**
         * @method
         * Executes the specified function for each array element until the function returns a falsy value.
         * If such an item is found, the function will return `false` immediately.
         * Otherwise, it will return `true`.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item.
         * @param {Mixed} fn.item Current item.
         * @param {Number} fn.index Index of the item.
         * @param {Array} fn.array The whole array that's being iterated.
         * @param {Object} scope Callback function scope.
         * @return {Boolean} `treu` if no false value is returned by the callback function.
         */
            every: ('every' in arrayPrototype) ? function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.every must have a callback function passed as second argument.');
                return array.every(fn, scope);
            } : function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.every must have a callback function passed as second argument.');
                var i = 0,
                    ln = array.length;
                for (; i < ln; ++i) {
                    if (!fn.call(scope, array[i], i, array)) {
                        return false;
                    }
                }
                return true;
            },
            /**
         * @method
         * Executes the specified function for each array element until the function returns a truthy value.
         * If such an item is found, the function will return `true` immediately. Otherwise, it will return `false`.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item.
         * @param {Mixed} fn.item Current item.
         * @param {Number} fn.index Index of the item.
         * @param {Array} fn.array The whole array that's being iterated.
         * @param {Object} scope Callback function scope.
         * @return {Boolean} `true` if the callback function returns a truthy value.
         */
            some: ('some' in arrayPrototype) ? function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.some must have a callback function passed as second argument.');
                return array.some(fn, scope);
            } : function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.some must have a callback function passed as second argument.');
                var i = 0,
                    ln = array.length;
                for (; i < ln; ++i) {
                    if (fn.call(scope, array[i], i, array)) {
                        return true;
                    }
                }
                return false;
            },
            /**
         * Shallow compares the contents of 2 arrays using strict equality.
         * @param {Array} array1
         * @param {Array} array2
         * @return {Boolean} `true` if the arrays are equal.
         */
            equals: function(array1, array2) {
                var len1 = array1.length,
                    len2 = array2.length,
                    i;
                // Short circuit if the same array is passed twice
                if (array1 === array2) {
                    return true;
                }
                if (len1 !== len2) {
                    return false;
                }
                for (i = 0; i < len1; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            },
            /**
         * Filter through an array and remove empty item as defined in {@link Ext#isEmpty Ext.isEmpty}.
         *
         * See {@link Ext.Array#filter}
         *
         * @param {Array} array
         * @return {Array} results
         */
            clean: function(array) {
                var results = [],
                    i = 0,
                    ln = array.length,
                    item;
                for (; i < ln; i++) {
                    item = array[i];
                    if (!Ext.isEmpty(item)) {
                        results.push(item);
                    }
                }
                return results;
            },
            /**
         * Returns a new array with unique items.
         *
         * @param {Array} array
         * @return {Array} results
         */
            unique: function(array) {
                var clone = [],
                    i = 0,
                    ln = array.length,
                    item;
                for (; i < ln; i++) {
                    item = array[i];
                    if (ExtArray.indexOf(clone, item) === -1) {
                        clone.push(item);
                    }
                }
                return clone;
            },
            /**
         * @method
         * Creates a new array with all of the elements of this array for which
         * the provided filtering function returns a truthy value.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item.
         * @param {Mixed} fn.item Current item.
         * @param {Number} fn.index Index of the item.
         * @param {Array} fn.array The whole array that's being iterated.
         * @param {Object} scope Callback function scope.
         * @return {Array} results
         */
            filter: ('filter' in arrayPrototype) ? function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.filter must have a filter function passed as second argument.');
                return array.filter(fn, scope);
            } : function(array, fn, scope) {
                Ext.Assert.isFunction(fn, 'Ext.Array.filter must have a filter function passed as second argument.');
                var results = [],
                    i = 0,
                    ln = array.length;
                for (; i < ln; i++) {
                    if (fn.call(scope, array[i], i, array)) {
                        results.push(array[i]);
                    }
                }
                return results;
            },
            /**
         * Returns the first item in the array which elicits a truthy return value from the
         * passed selection function.
         * @param {Array} array The array to search
         * @param {Function} fn The selection function to execute for each item.
         * @param {Mixed} fn.item The array item.
         * @param {Number} fn.index The index of the array item.
         * @param {Object} scope (optional) The scope (<code>this</code> reference) in which the
         * function is executed. Defaults to the array
         * @return {Object} The first item in the array which returned true from the selection
         * function, or null if none was found.
         */
            findBy: function(array, fn, scope) {
                var i = 0,
                    len = array.length;
                for (; i < len; i++) {
                    if (fn.call(scope || array, array[i], i)) {
                        return array[i];
                    }
                }
                return null;
            },
            /**
         * Converts a value to an array if it's not already an array; returns:
         *
         * - An empty array if given value is `undefined` or `null`
         * - Itself if given value is already an array
         * - An array copy if given value is {@link Ext#isIterable iterable} (arguments, NodeList and alike)
         * - An array with one item which is the given value, otherwise
         *
         * @param {Object} value The value to convert to an array if it's not already is an array.
         * @param {Boolean} [newReference] `true` to clone the given array and return a new reference if necessary.
         * @return {Array} array
         */
            from: function(value, newReference) {
                if (value === undefined || value === null) {
                    return [];
                }
                if (Ext.isArray(value)) {
                    return (newReference) ? slice.call(value) : value;
                }
                var type = typeof value;
                // Both strings and functions will have a length property. In phantomJS, NodeList
                // instances report typeof=='function' but don't have an apply method...
                if (value && value.length !== undefined && type !== 'string' && (type !== 'function' || !value.apply)) {
                    return ExtArray.toArray(value);
                }
                return [
                    value
                ];
            },
            /**
         * Removes the specified item from the array if it exists.
         *
         * @param {Array} array The array.
         * @param {Object} item The item to remove.
         * @return {Array} The passed array.
         */
            remove: function(array, item) {
                var index = ExtArray.indexOf(array, item);
                if (index !== -1) {
                    erase(array, index, 1);
                }
                return array;
            },
            /**
         * Removes item/s at the specified index.
         * 
         * @param {Array} array The array.
         * @param {Number} index The index of the item to be removed.
         * @param {Number} [count=1] The number of items to be removed.
         * @return {Array} The passed array.
         */
            removeAt: function(array, index, count) {
                var len = array.length;
                if (index >= 0 && index < len) {
                    count = count || 1;
                    count = Math.min(count, len - index);
                    erase(array, index, count);
                }
                return array;
            },
            /**
         * Push an item into the array only if the array doesn't contain it yet.
         *
         * @param {Array} array The array.
         * @param {Object} item The item to include.
         */
            include: function(array, item) {
                if (!ExtArray.contains(array, item)) {
                    array.push(item);
                }
            },
            /**
         * Clone a flat array without referencing the previous one. Note that this is different
         * from `Ext.clone` since it doesn't handle recursive cloning. It's simply a convenient, easy-to-remember method
         * for `Array.prototype.slice.call(array)`.
         *
         * @param {Array} array The array.
         * @return {Array} The clone array.
         */
            clone: function(array) {
                return slice.call(array);
            },
            /**
         * Merge multiple arrays into one with unique items.
         *
         * {@link Ext.Array#union} is alias for {@link Ext.Array#merge}
         *
         * @param {Array} array1
         * @param {Array} array2
         * @param {Array} etc
         * @return {Array} merged
         */
            merge: function() {
                var args = slice.call(arguments),
                    array = [],
                    i, ln;
                for (i = 0 , ln = args.length; i < ln; i++) {
                    array = array.concat(args[i]);
                }
                return ExtArray.unique(array);
            },
            /**
         * Merge multiple arrays into one with unique items that exist in all of the arrays.
         *
         * @param {Array} array1
         * @param {Array} array2
         * @param {Array} etc
         * @return {Array} intersect
         */
            intersect: function() {
                var intersection = [],
                    arrays = slice.call(arguments),
                    arraysLength, array, arrayLength, minArray, minArrayIndex, minArrayCandidate, minArrayLength, element, elementCandidate, elementCount, i, j, k;
                if (!arrays.length) {
                    return intersection;
                }
                // Find the smallest array
                arraysLength = arrays.length;
                for (i = minArrayIndex = 0; i < arraysLength; i++) {
                    minArrayCandidate = arrays[i];
                    if (!minArray || minArrayCandidate.length < minArray.length) {
                        minArray = minArrayCandidate;
                        minArrayIndex = i;
                    }
                }
                minArray = ExtArray.unique(minArray);
                erase(arrays, minArrayIndex, 1);
                // Use the smallest unique'd array as the anchor loop. If the other array(s) do contain
                // an item in the small array, we're likely to find it before reaching the end
                // of the inner loop and can terminate the search early.
                minArrayLength = minArray.length;
                arraysLength = arrays.length;
                for (i = 0; i < minArrayLength; i++) {
                    element = minArray[i];
                    elementCount = 0;
                    for (j = 0; j < arraysLength; j++) {
                        array = arrays[j];
                        arrayLength = array.length;
                        for (k = 0; k < arrayLength; k++) {
                            elementCandidate = array[k];
                            if (element === elementCandidate) {
                                elementCount++;
                                break;
                            }
                        }
                    }
                    if (elementCount === arraysLength) {
                        intersection.push(element);
                    }
                }
                return intersection;
            },
            /**
         * Perform a set difference A-B by subtracting all items in array B from array A.
         *
         * @param {Array} arrayA
         * @param {Array} arrayB
         * @return {Array} difference
         */
            difference: function(arrayA, arrayB) {
                var clone = slice.call(arrayA),
                    ln = clone.length,
                    i, j, lnB;
                for (i = 0 , lnB = arrayB.length; i < lnB; i++) {
                    for (j = 0; j < ln; j++) {
                        if (clone[j] === arrayB[i]) {
                            erase(clone, j, 1);
                            j--;
                            ln--;
                        }
                    }
                }
                return clone;
            },
            /**
         * This method applies the `reduceFn` function against an accumulator and each
         * value of the `array` (from left-to-right) to reduce it to a single value.
         *
         * If no `initialValue` is specified, the first element of the array is used as
         * the initial value. For example:
         *
         *      function reducer (previous, value, index) {
         *          console.log('[' + index + ']: (' + previous + ',' + value + '}');
         *          return previous * 10 + value;
         *      }
         *
         *      v = Ext.Array.reduce([2, 3, 4], reducer);
         *      console.log('v = ' + v);
         *
         *      > [1]: (2, 3)
         *      > [2]: (23, 4)
         *      > v = 234
         *
         *      v = Ext.Array.reduce([2, 3, 4], reducer, 1);
         *      console.log('v = ' + v);
         *
         *      > [0]: (1, 2)
         *      > [1]: (12, 3)
         *      > [2]: (123, 4)
         *      > v = 1234
         *
         * @param {Array} array The array to process.
         * @param {Function} reduceFn The reducing callback function.
         * @param {Mixed} reduceFn.previous The previous value.
         * @param {Mixed} reduceFn.value The current value.
         * @param {Number} reduceFn.index The index in the array of the current `value`.
         * @param {Array} reduceFn.array The array to being processed.
         * @param {Mixed} [initialValue] The starting value.
         * @return {Mixed} The reduced value.
         * @method reduce
         * @since 6.0.0
         */
            reduce: Array.prototype.reduce ? function(array, reduceFn, initialValue) {
                if (arguments.length === 3) {
                    return Array.prototype.reduce.call(array, reduceFn, initialValue);
                }
                return Array.prototype.reduce.call(array, reduceFn);
            } : function(array, reduceFn, initialValue) {
                array = Object(array);
                if (!Ext.isFunction(reduceFn)) {
                    Ext.raise('Invalid parameter: expected a function.');
                }
                var index = 0,
                    length = array.length >>> 0,
                    reduced = initialValue;
                if (arguments.length < 3) {
                    while (true) {
                        if (index in array) {
                            reduced = array[index++];
                            break;
                        }
                        if (++index >= length) {
                            throw new TypeError('Reduce of empty array with no initial value');
                        }
                    }
                }
                for (; index < length; ++index) {
                    if (index in array) {
                        reduced = reduceFn(reduced, array[index], index, array);
                    }
                }
                return reduced;
            },
            /**
         * Returns a shallow copy of a part of an array. This is equivalent to the native
         * call `Array.prototype.slice.call(array, begin, end)`. This is often used when "array"
         * is "arguments" since the arguments object does not supply a slice method but can
         * be the context object to `Array.prototype.slice`.
         *
         * @param {Array} array The array (or arguments object).
         * @param {Number} begin The index at which to begin. Negative values are offsets from
         * the end of the array.
         * @param {Number} end The index at which to end. The copied items do not include
         * end. Negative values are offsets from the end of the array. If end is omitted,
         * all items up to the end of the array are copied.
         * @return {Array} The copied piece of the array.
         * @method slice
         */
            // Note: IE8 will return [] on slice.call(x, undefined).
            slice: ([
                1,
                2
            ].slice(1, undefined).length ? function(array, begin, end) {
                return slice.call(array, begin, end);
            } : function(array, begin, end) {
                // see http://jsperf.com/slice-fix
                if (typeof begin === 'undefined') {
                    return slice.call(array);
                }
                if (typeof end === 'undefined') {
                    return slice.call(array, begin);
                }
                return slice.call(array, begin, end);
            }),
            /**
         * Sorts the elements of an Array in a stable manner (equivalently keyed values do not move relative to each other).
         * By default, this method sorts the elements alphabetically and ascending.
         * **Note:** This method modifies the passed array, in the same manner as the
         * native javascript Array.sort. 
         *
         * @param {Array} array The array to sort.
         * @param {Function} [sortFn] The comparison function.
         * @param {Mixed} sortFn.a The first item to compare.
         * @param {Mixed} sortFn.b The second item to compare.
         * @param {Number} sortFn.return `-1` if a < b, `1` if a > b, otherwise `0`.
         * @return {Array} The sorted array.
         */
            sort: function(array, sortFn) {
                return stableSort(array, sortFn || ExtArray.lexicalCompare);
            },
            /**
         * Recursively flattens into 1-d Array. Injects Arrays inline.
         *
         * @param {Array} array The array to flatten
         * @return {Array} The 1-d array.
         */
            flatten: function(array) {
                var worker = [];
                function rFlatten(a) {
                    var i, ln, v;
                    for (i = 0 , ln = a.length; i < ln; i++) {
                        v = a[i];
                        if (Ext.isArray(v)) {
                            rFlatten(v);
                        } else {
                            worker.push(v);
                        }
                    }
                    return worker;
                }
                return rFlatten(array);
            },
            /**
         * Returns the minimum value in the Array.
         *
         * @param {Array/NodeList} array The Array from which to select the minimum value.
         * @param {Function} comparisonFn (optional) a function to perform the comparison which determines minimization.
         * If omitted the "<" operator will be used.
         * __Note:__ gt = 1; eq = 0; lt = -1
         * @param {Mixed} comparisonFn.min Current minimum value.
         * @param {Mixed} comparisonFn.item The value to compare with the current minimum.
         * @return {Object} minValue The minimum value.
         */
            min: function(array, comparisonFn) {
                var min = array[0],
                    i, ln, item;
                for (i = 0 , ln = array.length; i < ln; i++) {
                    item = array[i];
                    if (comparisonFn) {
                        if (comparisonFn(min, item) === 1) {
                            min = item;
                        }
                    } else {
                        if (item < min) {
                            min = item;
                        }
                    }
                }
                return min;
            },
            /**
         * Returns the maximum value in the Array.
         *
         * @param {Array/NodeList} array The Array from which to select the maximum value.
         * @param {Function} comparisonFn (optional) a function to perform the comparison which determines maximization.
         * If omitted the ">" operator will be used.
         * __Note:__ gt = 1; eq = 0; lt = -1
         * @param {Mixed} comparisonFn.max Current maximum value.
         * @param {Mixed} comparisonFn.item The value to compare with the current maximum.
         * @return {Object} maxValue The maximum value.
         */
            max: function(array, comparisonFn) {
                var max = array[0],
                    i, ln, item;
                for (i = 0 , ln = array.length; i < ln; i++) {
                    item = array[i];
                    if (comparisonFn) {
                        if (comparisonFn(max, item) === -1) {
                            max = item;
                        }
                    } else {
                        if (item > max) {
                            max = item;
                        }
                    }
                }
                return max;
            },
            /**
         * Calculates the mean of all items in the array.
         *
         * @param {Array} array The Array to calculate the mean value of.
         * @return {Number} The mean.
         */
            mean: function(array) {
                return array.length > 0 ? ExtArray.sum(array) / array.length : undefined;
            },
            /**
         * Calculates the sum of all items in the given array.
         *
         * @param {Array} array The Array to calculate the sum value of.
         * @return {Number} The sum.
         */
            sum: function(array) {
                var sum = 0,
                    i, ln, item;
                for (i = 0 , ln = array.length; i < ln; i++) {
                    item = array[i];
                    sum += item;
                }
                return sum;
            },
            /**
         * Creates a map (object) keyed by the elements of the given array. The values in
         * the map are the index+1 of the array element. For example:
         * 
         *      var map = Ext.Array.toMap(['a','b','c']);
         *
         *      // map = { a: 1, b: 2, c: 3 };
         * 
         * Or a key property can be specified:
         * 
         *      var map = Ext.Array.toMap([
         *              { name: 'a' },
         *              { name: 'b' },
         *              { name: 'c' }
         *          ], 'name');
         *
         *      // map = { a: 1, b: 2, c: 3 };
         * 
         * Lastly, a key extractor can be provided:
         * 
         *      var map = Ext.Array.toMap([
         *              { name: 'a' },
         *              { name: 'b' },
         *              { name: 'c' }
         *          ], function (obj) { return obj.name.toUpperCase(); });
         *
         *      // map = { A: 1, B: 2, C: 3 };
         * 
         * @param {Array} array The Array to create the map from.
         * @param {String/Function} [getKey] Name of the object property to use
         * as a key or a function to extract the key.
         * @param {Object} [scope] Value of `this` inside callback specified for `getKey`.
         * @return {Object} The resulting map.
         */
            toMap: function(array, getKey, scope) {
                var map = {},
                    i = array.length;
                if (!getKey) {
                    while (i--) {
                        map[array[i]] = i + 1;
                    }
                } else if (typeof getKey === 'string') {
                    while (i--) {
                        map[array[i][getKey]] = i + 1;
                    }
                } else {
                    while (i--) {
                        map[getKey.call(scope, array[i])] = i + 1;
                    }
                }
                return map;
            },
            /**
         * Creates a map (object) keyed by a property of elements of the given array. The values in
         * the map are the array element. For example:
         * 
         *      var map = Ext.Array.toValueMap(['a','b','c']);
         *
         *      // map = { a: 'a', b: 'b', c: 'c' };
         * 
         * Or a key property can be specified:
         * 
         *      var map = Ext.Array.toValueMap([
         *              { name: 'a' },
         *              { name: 'b' },
         *              { name: 'c' }
         *          ], 'name');
         *
         *      // map = { a: {name: 'a'}, b: {name: 'b'}, c: {name: 'c'} };
         * 
         * Lastly, a key extractor can be provided:
         * 
         *      var map = Ext.Array.toValueMap([
         *              { name: 'a' },
         *              { name: 'b' },
         *              { name: 'c' }
         *          ], function (obj) { return obj.name.toUpperCase(); });
         *
         *      // map = { A: {name: 'a'}, B: {name: 'b'}, C: {name: 'c'} };
         *
         * @param {Array} array The Array to create the map from.
         * @param {String/Function} [getKey] Name of the object property to use
         * as a key or a function to extract the key.
         * @param {Object} [scope] Value of this inside callback. This parameter is only
         * passed when `getKey` is a function. If `getKey` is not a function, the 3rd
         * argument is `arrayify`.
         * @param {Number} [arrayify] Pass `1` to create arrays for all map entries
         * or `2` to create arrays for map entries that have 2 or more items with the
         * same key. This only applies when `getKey` is specified. By default the map will
         * hold the last entry with a given key.
         * @return {Object} The resulting map.
         */
            toValueMap: function(array, getKey, scope, arrayify) {
                var map = {},
                    i = array.length,
                    autoArray, alwaysArray, entry, fn, key, value;
                if (!getKey) {
                    while (i--) {
                        value = array[i];
                        map[value] = value;
                    }
                } else {
                    if (!(fn = (typeof getKey !== 'string'))) {
                        arrayify = scope;
                    }
                    alwaysArray = arrayify === 1;
                    autoArray = arrayify === 2;
                    while (i--) {
                        value = array[i];
                        key = fn ? getKey.call(scope, value) : value[getKey];
                        if (alwaysArray) {
                            if (key in map) {
                                map[key].push(value);
                            } else {
                                map[key] = [
                                    value
                                ];
                            }
                        } else if (autoArray && (key in map)) {
                            if ((entry = map[key]) instanceof Array) {
                                entry.push(value);
                            } else {
                                map[key] = [
                                    entry,
                                    value
                                ];
                            }
                        } else {
                            map[key] = value;
                        }
                    }
                }
                return map;
            },
            _replaceSim: replaceSim,
            // for unit testing
            _spliceSim: spliceSim,
            /**
         * Removes items from an array. This is functionally equivalent to the splice method
         * of Array, but works around bugs in IE8's splice method and does not copy the
         * removed elements in order to return them (because very often they are ignored).
         *
         * @param {Array} array The Array on which to replace.
         * @param {Number} index The index in the array at which to operate.
         * @param {Number} removeCount The number of items to remove at index.
         * @return {Array} The array passed.
         * @method
         */
            erase: erase,
            /**
         * Inserts items in to an array.
         *
         * @param {Array} array The Array in which to insert.
         * @param {Number} index The index in the array at which to operate.
         * @param {Array} items The array of items to insert at index.
         * @return {Array} The array passed.
         */
            insert: function(array, index, items) {
                return replace(array, index, 0, items);
            },
            move: function(array, fromIdx, toIdx) {
                if (toIdx === fromIdx) {
                    return;
                }
                var item = array[fromIdx],
                    incr = toIdx > fromIdx ? 1 : -1,
                    i;
                for (i = fromIdx; i != toIdx; i += incr) {
                    array[i] = array[i + incr];
                }
                array[toIdx] = item;
            },
            /**
         * Replaces items in an array. This is functionally equivalent to the splice method
         * of Array, but works around bugs in IE8's splice method and is often more convenient
         * to call because it accepts an array of items to insert rather than use a variadic
         * argument list.
         *
         * @param {Array} array The Array on which to replace.
         * @param {Number} index The index in the array at which to operate.
         * @param {Number} removeCount The number of items to remove at index (can be 0).
         * @param {Array} insert (optional) An array of items to insert at index.
         * @return {Array} The array passed.
         * @method
         */
            replace: replace,
            /**
         * Replaces items in an array. This is equivalent to the splice method of Array, but
         * works around bugs in IE8's splice method. The signature is exactly the same as the
         * splice method except that the array is the first argument. All arguments following
         * removeCount are inserted in the array at index.
         *
         * @param {Array} array The Array on which to replace.
         * @param {Number} index The index in the array at which to operate.
         * @param {Number} removeCount The number of items to remove at index (can be 0).
         * @param {Object...} elements The elements to add to the array. If you don't specify
         * any elements, splice simply removes elements from the array.
         * @return {Array} An array containing the removed items.
         * @method
         */
            splice: splice,
            /**
         * Pushes new items onto the end of an Array.
         *
         * Passed parameters may be single items, or arrays of items. If an Array is found in the argument list, all its
         * elements are pushed into the end of the target Array.
         *
         * @param {Array} target The Array onto which to push new items
         * @param {Object...} elements The elements to add to the array. Each parameter may
         * be an Array, in which case all the elements of that Array will be pushed into the end of the
         * destination Array.
         * @return {Array} An array containing all the new items push onto the end.
         *
         */
            push: function(target) {
                var len = arguments.length,
                    i = 1,
                    newItem;
                if (target === undefined) {
                    target = [];
                } else if (!Ext.isArray(target)) {
                    target = [
                        target
                    ];
                }
                for (; i < len; i++) {
                    newItem = arguments[i];
                    Array.prototype.push[Ext.isIterable(newItem) ? 'apply' : 'call'](target, newItem);
                }
                return target;
            },
            /**
         * A function used to sort an array by numeric value. By default, javascript array values
         * are coerced to strings when sorting, which can be problematic when using numeric values. To
         * ensure that the values are sorted numerically, this method can be passed to the sort method:
         * 
         *     Ext.Array.sort(myArray, Ext.Array.numericSortFn);
         */
            numericSortFn: function(a, b) {
                return a - b;
            }
        };
    /**
     * @method each
     * @member Ext
     * @inheritdoc Ext.Array#each
     */
    Ext.each = ExtArray.each;
    /**
     * @method union
     * @member Ext.Array
     * @inheritdoc Ext.Array#merge
     */
    ExtArray.union = ExtArray.merge;
    /**
     * Old alias to {@link Ext.Array#min}
     * @deprecated 4.0.0 Use {@link Ext.Array#min} instead
     * @method min
     * @member Ext
     * @inheritdoc Ext.Array#min
     */
    Ext.min = ExtArray.min;
    /**
     * Old alias to {@link Ext.Array#max}
     * @deprecated 4.0.0 Use {@link Ext.Array#max} instead
     * @method max
     * @member Ext
     * @inheritdoc Ext.Array#max
     */
    Ext.max = ExtArray.max;
    /**
     * Old alias to {@link Ext.Array#sum}
     * @deprecated 4.0.0 Use {@link Ext.Array#sum} instead
     * @method sum
     * @member Ext
     * @inheritdoc Ext.Array#sum
     */
    Ext.sum = ExtArray.sum;
    /**
     * Old alias to {@link Ext.Array#mean}
     * @deprecated 4.0.0 Use {@link Ext.Array#mean} instead
     * @method mean
     * @member Ext
     * @inheritdoc Ext.Array#mean
     */
    Ext.mean = ExtArray.mean;
    /**
     * Old alias to {@link Ext.Array#flatten}
     * @deprecated 4.0.0 Use {@link Ext.Array#flatten} instead
     * @method flatten
     * @member Ext
     * @inheritdoc Ext.Array#flatten
     */
    Ext.flatten = ExtArray.flatten;
    /**
     * Old alias to {@link Ext.Array#clean}
     * @deprecated 4.0.0 Use {@link Ext.Array#clean} instead
     * @method clean
     * @member Ext
     * @inheritdoc Ext.Array#clean
     */
    Ext.clean = ExtArray.clean;
    /**
     * Old alias to {@link Ext.Array#unique}
     * @deprecated 4.0.0 Use {@link Ext.Array#unique} instead
     * @method unique
     * @member Ext
     * @inheritdoc Ext.Array#unique
     */
    Ext.unique = ExtArray.unique;
    /**
     * Old alias to {@link Ext.Array#pluck Ext.Array.pluck}
     * @deprecated 4.0.0 Use {@link Ext.Array#pluck Ext.Array.pluck} instead
     * @method pluck
     * @member Ext
     * @inheritdoc Ext.Array#pluck
     */
    Ext.pluck = ExtArray.pluck;
    /**
     * @method toArray
     * @member Ext
     * @inheritdoc Ext.Array#toArray
     */
    Ext.toArray = function() {
        return ExtArray.toArray.apply(ExtArray, arguments);
    };
    return ExtArray;
}());

// @define Ext.lang.Assert
// @define Ext.Assert
// @require Ext.lang.Error
/**
 * @class Ext.Assert
 * This class provides help value testing methods useful for diagnostics. These are often
 * used in `debugHooks`:
 * 
 *      Ext.define('Foo.bar.Class', {
 *
 *          debugHooks: {
 *              method: function (a) {
 *                  Ext.Assert.truthy(a, 'Expected "a" to be truthy');
 *              },
 *
 *              foo: function (object) {
 *                  Ext.Assert.isFunctionProp(object, 'doSomething');
 *              }
 *          }
 *      });
 * 
 * **NOTE:** This class is entirely removed in production builds so all uses of it should
 * be either in `debug` conditional comments or `debugHooks`.
 * 
 * The following type detection methods from the `Ext` object are wrapped as assertions
 * by this class:
 * 
 *  * `isEmpty`
 *  * `isArray`
 *  * `isDate`
 *  * `isObject`
 *  * `isSimpleObject`
 *  * `isPrimitive`
 *  * `isFunction`
 *  * `isNumber`
 *  * `isNumeric`
 *  * `isString`
 *  * `isBoolean`
 *  * `isElement`
 *  * `isTextNode`
 *  * `isDefined`
 *  * `isIterable`
 * 
 * These appear both their exact name and with a "Prop" suffix for checking a property on
 * an object. For example, these are almost identical:
 * 
 *      Ext.Assert.isFunction(object.foo);
 *
 *      Ext.Assert.isFunctionProp(object, 'foo');
 *
 * The difference is the default error message generated is better in the second use case
 * than the first.
 * 
 * The above list are also expanded for "Not" flavors (and "Not...Prop"):
 * 
 *  * `isNotEmpty`
 *  * `isNotArray`
 *  * `isNotDate`
 *  * `isNotObject`
 *  * `isNotSimpleObject`
 *  * `isNotPrimitive`
 *  * `isNotFunction`
 *  * `isNotNumber`
 *  * `isNotNumeric`
 *  * `isNotString`
 *  * `isNotBoolean`
 *  * `isNotElement`
 *  * `isNotTextNode`
 *  * `isNotDefined`
 *  * `isNotIterable`
 */
Ext.Assert = {
    /**
     * Checks that the first argument is falsey and throws an `Error` if it is not.
     */
    falsey: function(b, msg) {
        if (b) {
            Ext.raise(msg || ('Expected a falsey value but was ' + b));
        }
    },
    /**
     * Checks that the first argument is falsey and throws an `Error` if it is not.
     */
    falseyProp: function(object, property) {
        Ext.Assert.truthy(object);
        var b = object[property];
        if (b) {
            if (object.$className) {
                property = object.$className + '#' + property;
            }
            Ext.raise('Expected a falsey value for ' + property + ' but was ' + b);
        }
    },
    /**
     * Checks that the first argument is truthy and throws an `Error` if it is not.
     */
    truthy: function(b, msg) {
        if (!b) {
            Ext.raise(msg || ('Expected a truthy value but was ' + typeof b));
        }
    },
    /**
     * Checks that the first argument is truthy and throws an `Error` if it is not.
     */
    truthyProp: function(object, property) {
        Ext.Assert.truthy(object);
        var b = object[property];
        if (!b) {
            if (object.$className) {
                property = object.$className + '#' + property;
            }
            Ext.raise('Expected a truthy value for ' + property + ' but was ' + typeof b);
        }
    }
};
(function() {
    function makeAssert(name, kind) {
        var testFn = Ext[name],
            def;
        return function(value, msg) {
            if (!testFn(value)) {
                Ext.raise(msg || def || (def = 'Expected value to be ' + kind));
            }
        };
    }
    function makeAssertProp(name, kind) {
        var testFn = Ext[name],
            def;
        return function(object, prop) {
            Ext.Assert.truthy(object);
            if (!testFn(object[prop])) {
                Ext.raise(def || (def = 'Expected ' + (object.$className ? object.$className + '#' : '') + prop + ' to be ' + kind));
            }
        };
    }
    function makeNotAssert(name, kind) {
        var testFn = Ext[name],
            def;
        return function(value, msg) {
            if (testFn(value)) {
                Ext.raise(msg || def || (def = 'Expected value to NOT be ' + kind));
            }
        };
    }
    function makeNotAssertProp(name, kind) {
        var testFn = Ext[name],
            def;
        return function(object, prop) {
            Ext.Assert.truthy(object);
            if (testFn(object[prop])) {
                Ext.raise(def || (def = 'Expected ' + (object.$className ? object.$className + '#' : '') + prop + ' to NOT be ' + kind));
            }
        };
    }
    for (var name in Ext) {
        if (name.substring(0, 2) == "is" && Ext.isFunction(Ext[name])) {
            var kind = name.substring(2);
            Ext.Assert[name] = makeAssert(name, kind);
            Ext.Assert[name + 'Prop'] = makeAssertProp(name, kind);
            Ext.Assert['isNot' + kind] = makeNotAssert(name, kind);
            Ext.Assert['isNot' + kind + 'Prop'] = makeNotAssertProp(name, kind);
        }
    }
}());

/**
 * @class Ext.String
 *
 * A collection of useful static methods to deal with strings.
 * @singleton
 */
Ext.String = (function() {
    // @define Ext.lang.String
    // @define Ext.String
    // @require Ext
    // @require Ext.lang.Array
    var trimRegex = /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,
        escapeRe = /('|\\)/g,
        escapeRegexRe = /([-.*+?\^${}()|\[\]\/\\])/g,
        basicTrimRe = /^\s+|\s+$/g,
        whitespaceRe = /\s+/,
        varReplace = /(^[^a-z]*|[^\w])/gi,
        charToEntity, entityToChar, charToEntityRegex, entityToCharRegex,
        htmlEncodeReplaceFn = function(match, capture) {
            return charToEntity[capture];
        },
        htmlDecodeReplaceFn = function(match, capture) {
            return (capture in entityToChar) ? entityToChar[capture] : String.fromCharCode(parseInt(capture.substr(2), 10));
        },
        boundsCheck = function(s, other) {
            if (s === null || s === undefined || other === null || other === undefined) {
                return false;
            }
            return other.length <= s.length;
        },
        fromCharCode = String.fromCharCode,
        ExtString;
    return ExtString = {
        /**
         * Creates a string created by using the specified sequence of code points.
         * @param {Number...} codePoint Codepoints from which to build the string.
         * @return {String} A string built from the sequence of code points passed.
         */
        fromCodePoint: String.fromCodePoint || function() {
            var codePoint,
                result = '',
                codeUnits = [],
                index = -1,
                length = arguments.length;
            while (++index < length) {
                codePoint = Number(arguments[index]);
                if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                codePoint < 0 || // not a valid Unicode code point
                codePoint > 1114111 || // not a valid Unicode code point
                Math.floor(codePoint) !== codePoint) // not an integer
                {
                    Ext.raise('Invalid code point: ' + codePoint);
                }
                if (codePoint <= 65535) {
                    // BMP code point
                    codeUnits.push(codePoint);
                } else {
                    // Astral code point; split in surrogate halves
                    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    codePoint -= 65536;
                    codeUnits.push((codePoint >> 10) + 55296, (codePoint % 1024) + 56320);
                }
                if (index + 1 === length) {
                    result += fromCharCode(codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        },
        /**
         * Inserts a substring into a string.
         * @param {String} s The original string.
         * @param {String} value The substring to insert.
         * @param {Number} index The index to insert the substring. Negative indexes will insert from the end of
         * the string. Example: 
         *
         *     Ext.String.insert("abcdefg", "h", -1); // abcdefhg
         *
         * @return {String} The value with the inserted substring
         */
        insert: function(s, value, index) {
            if (!s) {
                return value;
            }
            if (!value) {
                return s;
            }
            var len = s.length;
            if (!index && index !== 0) {
                index = len;
            }
            if (index < 0) {
                index *= -1;
                if (index >= len) {
                    // negative overflow, insert at start
                    index = 0;
                } else {
                    index = len - index;
                }
            }
            if (index === 0) {
                s = value + s;
            } else if (index >= s.length) {
                s += value;
            } else {
                s = s.substr(0, index) + value + s.substr(index);
            }
            return s;
        },
        /**
         * Checks if a string starts with a substring
         * @param {String} s The original string
         * @param {String} start The substring to check
         * @param {Boolean} [ignoreCase=false] True to ignore the case in the comparison
         */
        startsWith: function(s, start, ignoreCase) {
            var result = boundsCheck(s, start);
            if (result) {
                if (ignoreCase) {
                    s = s.toLowerCase();
                    start = start.toLowerCase();
                }
                result = s.lastIndexOf(start, 0) === 0;
            }
            return result;
        },
        /**
         * Checks if a string ends with a substring
         * @param {String} s The original string
         * @param {String} end The substring to check
         * @param {Boolean} [ignoreCase=false] True to ignore the case in the comparison
         */
        endsWith: function(s, end, ignoreCase) {
            var result = boundsCheck(s, end);
            if (result) {
                if (ignoreCase) {
                    s = s.toLowerCase();
                    end = end.toLowerCase();
                }
                result = s.indexOf(end, s.length - end.length) !== -1;
            }
            return result;
        },
        /**
         * Converts a string of characters into a legal, parse-able JavaScript `var` name as long as the passed
         * string contains at least one alphabetic character. Non alphanumeric characters, and *leading* non alphabetic
         * characters will be removed.
         * @param {String} s A string to be converted into a `var` name.
         * @return {String} A legal JavaScript `var` name.
         */
        createVarName: function(s) {
            return s.replace(varReplace, '');
        },
        /**
         * Convert certain characters (&, <, >, ', and ") to their HTML character equivalents for literal display in web pages.
         * @param {String} value The string to encode.
         * @return {String} The encoded text.
         * @method
         */
        htmlEncode: function(value) {
            return (!value) ? value : String(value).replace(charToEntityRegex, htmlEncodeReplaceFn);
        },
        /**
         * Convert certain characters (&, <, >, ', and ") from their HTML character equivalents.
         * @param {String} value The string to decode.
         * @return {String} The decoded text.
         * @method
         */
        htmlDecode: function(value) {
            return (!value) ? value : String(value).replace(entityToCharRegex, htmlDecodeReplaceFn);
        },
        /**
         * Checks if a string has values needing to be html encoded.
         * @private
         * @param {String} s The string to test
         * @return {Boolean} `true` if the string contains HTML characters
         */
        hasHtmlCharacters: function(s) {
            return charToEntityRegex.test(s);
        },
        /**
         * Adds a set of character entity definitions to the set used by
         * {@link Ext.String#htmlEncode} and {@link Ext.String#htmlDecode}.
         *
         * This object should be keyed by the entity name sequence,
         * with the value being the textual representation of the entity.
         *
         *      Ext.String.addCharacterEntities({
         *          '&amp;Uuml;':'Ü',
         *          '&amp;ccedil;':'ç',
         *          '&amp;ntilde;':'ñ',
         *          '&amp;egrave;':'è'
         *      });
         *      var s = Ext.String.htmlEncode("A string with entities: èÜçñ");
         *
         * __Note:__ the values of the character entities defined on this object are expected
         * to be single character values.  As such, the actual values represented by the
         * characters are sensitive to the character encoding of the JavaScript source
         * file when defined in string literal form. Script tags referencing server
         * resources with character entities must ensure that the 'charset' attribute
         * of the script node is consistent with the actual character encoding of the
         * server resource.
         *
         * The set of character entities may be reset back to the default state by using
         * the {@link Ext.String#resetCharacterEntities} method
         *
         * @param {Object} newEntities The set of character entities to add to the current
         * definitions.
         */
        addCharacterEntities: function(newEntities) {
            var charKeys = [],
                entityKeys = [],
                key, echar;
            for (key in newEntities) {
                echar = newEntities[key];
                entityToChar[key] = echar;
                charToEntity[echar] = key;
                charKeys.push(echar);
                entityKeys.push(key);
            }
            charToEntityRegex = new RegExp('(' + charKeys.join('|') + ')', 'g');
            entityToCharRegex = new RegExp('(' + entityKeys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');
        },
        /**
         * Resets the set of character entity definitions used by
         * {@link Ext.String#htmlEncode} and {@link Ext.String#htmlDecode} back to the
         * default state.
         */
        resetCharacterEntities: function() {
            charToEntity = {};
            entityToChar = {};
            // add the default set
            this.addCharacterEntities({
                '&amp;': '&',
                '&gt;': '>',
                '&lt;': '<',
                '&quot;': '"',
                '&#39;': "'"
            });
        },
        /**
         * Appends content to the query string of a URL, handling logic for whether to place
         * a question mark or ampersand.
         * @param {String} url The URL to append to.
         * @param {String} string The content to append to the URL.
         * @return {String} The resulting URL
         */
        urlAppend: function(url, string) {
            if (!Ext.isEmpty(string)) {
                return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
            }
            return url;
        },
        /**
         * Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:
         *
         *     var s = '  foo bar  ';
         *     alert('-' + s + '-');                   //alerts "- foo bar -"
         *     alert('-' + Ext.String.trim(s) + '-');  //alerts "-foo bar-"
         *
         * @param {String} string The string to trim.
         * @return {String} The trimmed string.
         */
        trim: function(string) {
            if (string) {
                string = string.replace(trimRegex, "");
            }
            return string || '';
        },
        /**
         * Capitalize the first letter of the given string.
         * @param {String} string
         * @return {String}
         */
        capitalize: function(string) {
            if (string) {
                string = string.charAt(0).toUpperCase() + string.substr(1);
            }
            return string || '';
        },
        /**
         * Uncapitalize the first letter of a given string.
         * @param {String} string
         * @return {String}
         */
        uncapitalize: function(string) {
            if (string) {
                string = string.charAt(0).toLowerCase() + string.substr(1);
            }
            return string || '';
        },
        /**
         * Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length.
         * @param {String} value The string to truncate.
         * @param {Number} length The maximum length to allow before truncating.
         * @param {Boolean} [word=false] `true` to try to find a common word break.
         * @return {String} The converted text.
         */
        ellipsis: function(value, length, word) {
            if (value && value.length > length) {
                if (word) {
                    var vs = value.substr(0, length - 2),
                        index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));
                    if (index !== -1 && index >= (length - 15)) {
                        return vs.substr(0, index) + "...";
                    }
                }
                return value.substr(0, length - 3) + "...";
            }
            return value;
        },
        /**
         * Escapes the passed string for use in a regular expression.
         * @param {String} string The string to escape.
         * @return {String} The escaped string.
         */
        escapeRegex: function(string) {
            return string.replace(escapeRegexRe, "\\$1");
        },
        /**
         * Creates a `RegExp` given a string `value` and optional flags. For example, the
         * following two regular expressions are equivalent.
         *
         *      var regex1 = Ext.String.createRegex('hello');
         *
         *      var regex2 = /^hello$/i;
         *
         * The following two regular expressions are also equivalent:
         *
         *      var regex1 = Ext.String.createRegex('world', false, false, false);
         *
         *      var regex2 = /world/;
         *
         * @param {String/RegExp} value The String to convert to a `RegExp`.
         * @param {Boolean} [startsWith=true] Pass `false` to allow a match to start 
         * anywhere in the string. By default the `value` will match only at the start 
         * of the string.
         * @param {Boolean} [endsWith=true] Pass `false` to allow the match to end before
         * the end of the string. By default the `value` will match only at the end of the
         * string.
         * @param {Boolean} [ignoreCase=true] Pass `false` to make the `RegExp` case
         * sensitive (removes the 'i' flag).
         * @since 5.0.0
         * @return {RegExp}
         */
        createRegex: function(value, startsWith, endsWith, ignoreCase) {
            var ret = value;
            if (value != null && !value.exec) {
                // not a regex
                ret = ExtString.escapeRegex(String(value));
                if (startsWith !== false) {
                    ret = '^' + ret;
                }
                if (endsWith !== false) {
                    ret += '$';
                }
                ret = new RegExp(ret, (ignoreCase !== false) ? 'i' : '');
            }
            return ret;
        },
        /**
         * Escapes the passed string for ' and \.
         * @param {String} string The string to escape.
         * @return {String} The escaped string.
         */
        escape: function(string) {
            return string.replace(escapeRe, "\\$1");
        },
        /**
         * Utility function that allows you to easily switch a string between two alternating values.  The passed value
         * is compared to the current string, and if they are equal, the other value that was passed in is returned.  If
         * they are already different, the first value passed in is returned.  Note that this method returns the new value
         * but does not change the current string.
         *
         *     // alternate sort directions
         *     sort = Ext.String.toggle(sort, 'ASC', 'DESC');
         *
         *     // instead of conditional logic:
         *     sort = (sort === 'ASC' ? 'DESC' : 'ASC');
         *
         * @param {String} string The current string.
         * @param {String} value The value to compare to the current string.
         * @param {String} other The new value to use if the string already equals the first value passed in.
         * @return {String} The new value.
         */
        toggle: function(string, value, other) {
            return string === value ? other : value;
        },
        /**
         * Pads the left side of a string with a specified character.  This is especially useful
         * for normalizing number and date strings.  Example usage:
         *
         *     var s = Ext.String.leftPad('123', 5, '0');
         *     // s now contains the string: '00123'
         *
         * @param {String} string The original string.
         * @param {Number} size The total length of the output string.
         * @param {String} [character=' '] (optional) The character with which to pad the original string.
         * @return {String} The padded string.
         */
        leftPad: function(string, size, character) {
            var result = String(string);
            character = character || " ";
            while (result.length < size) {
                result = character + result;
            }
            return result;
        },
        /**
         * Returns a string with a specified number of repetitions a given string pattern.
         * The pattern be separated by a different string.
         *
         *      var s = Ext.String.repeat('---', 4); // = '------------'
         *      var t = Ext.String.repeat('--', 3, '/'); // = '--/--/--'
         *
         * @param {String} pattern The pattern to repeat.
         * @param {Number} count The number of times to repeat the pattern (may be 0).
         * @param {String} sep An option string to separate each pattern.
         */
        repeat: function(pattern, count, sep) {
            if (count < 1) {
                count = 0;
            }
            for (var buf = [],
                i = count; i--; ) {
                buf.push(pattern);
            }
            return buf.join(sep || '');
        },
        /**
         * Splits a string of space separated words into an array, trimming as needed. If the
         * words are already an array, it is returned.
         *
         * @param {String/Array} words
         */
        splitWords: function(words) {
            if (words && typeof words == 'string') {
                return words.replace(basicTrimRe, '').split(whitespaceRe);
            }
            return words || [];
        }
    };
}());
// initialize the default encode / decode entities
Ext.String.resetCharacterEntities();
/**
 * @method htmlEncode
 * @member Ext
 * @inheritdoc Ext.String#htmlEncode
 */
Ext.htmlEncode = Ext.String.htmlEncode;
/**
 * @method htmlDecode
 * @member Ext
 * @inheritdoc Ext.String#htmlDecode
 */
Ext.htmlDecode = Ext.String.htmlDecode;
/**
 * @method urlAppend
 * @member Ext
 * @inheritdoc Ext.String#urlAppend
 */
Ext.urlAppend = Ext.String.urlAppend;

/**
 * @class Ext.Date
 * This class defines some basic methods for handling dates.
 *
 * The date parsing and formatting syntax contains a subset of
 * [PHP's `date()` function](http://www.php.net/date), and the formats that are
 * supported will provide results equivalent to their PHP versions.
 *
 * The following is a list of all currently supported formats:
 *
 *      Format      Description                                                               Example returned values
 *      ------      -----------------------------------------------------------------------   -----------------------
 *        d         Day of the month, 2 digits with leading zeros                             01 to 31
 *        D         A short textual representation of the day of the week                     Mon to Sun
 *        j         Day of the month without leading zeros                                    1 to 31
 *        l         A full textual representation of the day of the week                      Sunday to Saturday
 *        N         ISO-8601 numeric representation of the day of the week                    1 (for Monday) through 7 (for Sunday)
 *        S         English ordinal suffix for the day of the month, 2 characters             st, nd, rd or th. Works well with j
 *        w         Numeric representation of the day of the week                             0 (for Sunday) to 6 (for Saturday)
 *        z         The day of the year (starting from 0)                                     0 to 364 (365 in leap years)
 *        W         ISO-8601 week number of year, weeks starting on Monday                    01 to 53
 *        F         A full textual representation of a month, such as January or March        January to December
 *        m         Numeric representation of a month, with leading zeros                     01 to 12
 *        M         A short textual representation of a month                                 Jan to Dec
 *        n         Numeric representation of a month, without leading zeros                  1 to 12
 *        t         Number of days in the given month                                         28 to 31
 *        L         Whether it&#39;s a leap year                                                  1 if it is a leap year, 0 otherwise.
 *        o         ISO-8601 year number (identical to (Y), but if the ISO week number (W)    Examples: 1998 or 2004
 *                  belongs to the previous or next year, that year is used instead)
 *        Y         A full numeric representation of a year, 4 digits                         Examples: 1999 or 2003
 *        y         A two digit representation of a year                                      Examples: 99 or 03
 *        a         Lowercase Ante meridiem and Post meridiem                                 am or pm
 *        A         Uppercase Ante meridiem and Post meridiem                                 AM or PM
 *        g         12-hour format of an hour without leading zeros                           1 to 12
 *        G         24-hour format of an hour without leading zeros                           0 to 23
 *        h         12-hour format of an hour with leading zeros                              01 to 12
 *        H         24-hour format of an hour with leading zeros                              00 to 23
 *        i         Minutes, with leading zeros                                               00 to 59
 *        s         Seconds, with leading zeros                                               00 to 59
 *        u         Decimal fraction of a second                                              Examples:
 *                  (minimum 1 digit, arbitrary number of digits allowed)                     001 (i.e. 0.001s) or
 *                                                                                            100 (i.e. 0.100s) or
 *                                                                                            999 (i.e. 0.999s) or
 *                                                                                            999876543210 (i.e. 0.999876543210s)
 *        O         Difference to Greenwich time (GMT) in hours and minutes                   Example: +1030
 *        P         Difference to Greenwich time (GMT) with colon between hours and minutes   Example: -08:00
 *        T         Timezone abbreviation of the machine running the code                     Examples: EST, MDT, PDT ...
 *        Z         Timezone offset in seconds (negative if west of UTC, positive if east)    -43200 to 50400
 *        c         ISO 8601 date represented as the local time with an offset to UTC appended.
 *                  Notes:                                                                    Examples:
 *                  1) If unspecified, the month / day defaults to the current month / day,   1991 or
 *                     the time defaults to midnight, while the timezone defaults to the      1992-10 or
 *                     browser's timezone. If a time is specified, it must include both hours 1993-09-20 or
 *                     and minutes. The "T" delimiter, seconds, milliseconds and timezone     1994-08-19T16:20+01:00 or
 *                     are optional.                                                          1995-07-18T17:21:28-02:00 or
 *                  2) The decimal fraction of a second, if specified, must contain at        1996-06-17T18:22:29.98765+03:00 or
 *                     least 1 digit (there is no limit to the maximum number                 1997-05-16T19:23:30,12345-0400 or
 *                     of digits allowed), and may be delimited by either a '.' or a ','      1998-04-15T20:24:31.2468Z or
 *                  Refer to the examples on the right for the various levels of              1999-03-14T20:24:32Z or
 *                  date-time granularity which are supported, or see                         2000-02-13T21:25:33
 *                  http://www.w3.org/TR/NOTE-datetime for more info.                         2001-01-12 22:26:34
 *        C         An ISO date string as implemented by the native Date object's             1962-06-17T09:21:34.125Z
 *                  [Date.toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
 *                  method. This outputs the numeric part with *UTC* hour and minute
 *                  values, and indicates this by appending the `'Z'` timezone
 *                  identifier.
 *        U         Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)                1193432466 or -2138434463
 *        MS        Microsoft AJAX serialized dates                                           \/Date(1238606590509)\/ (i.e. UTC milliseconds since epoch) or
 *                                                                                            \/Date(1238606590509+0800)\/
 *        time      A javascript millisecond timestamp                                        1350024476440
 *        timestamp A UNIX timestamp (same as U)                                              1350024866            
 *
 * Example usage (note that you must escape format specifiers with '\\' to render them as character literals):
 *
 *     // Sample date:
 *     // 'Wed Jan 10 2007 15:05:01 GMT-0600 (Central Standard Time)'
 *     
 *     var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
 *     console.log(Ext.Date.format(dt, 'Y-m-d'));                          // 2007-01-10
 *     console.log(Ext.Date.format(dt, 'F j, Y, g:i a'));                  // January 10, 2007, 3:05 pm
 *     console.log(Ext.Date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A')); // Wednesday, the 10th of January 2007 03:05:01 PM
 *
 * Here are some standard date/time patterns that you might find helpful.  They
 * are not part of the source of Ext.Date, but to use them you can simply copy this
 * block of code into any script that is included after Ext.Date and they will also become
 * globally available on the Date object.  Feel free to add or remove patterns as needed in your code.
 *
 *     Ext.Date.patterns = {
 *         ISO8601Long:"Y-m-d H:i:s",
 *         ISO8601Short:"Y-m-d",
 *         ShortDate: "n/j/Y",
 *         LongDate: "l, F d, Y",
 *         FullDateTime: "l, F d, Y g:i:s A",
 *         MonthDay: "F d",
 *         ShortTime: "g:i A",
 *         LongTime: "g:i:s A",
 *         SortableDateTime: "Y-m-d\\TH:i:s",
 *         UniversalSortableDateTime: "Y-m-d H:i:sO",
 *         YearMonth: "F, Y"
 *     };
 *
 * Example usage:
 *
 *     var dt = new Date();
 *     console.log(Ext.Date.format(dt, Ext.Date.patterns.ShortDate));
 *
 * Developer-written, custom formats may be used by supplying both a formatting and a parsing function
 * which perform to specialized requirements. The functions are stored in {@link #parseFunctions} and {@link #formatFunctions}.
 * @singleton
 */
Ext.Date = (function() {
    // @define Ext.lang.Date
    // @define Ext.Date
    // @require Ext
    // @require Ext.lang.String
    var utilDate,
        nativeDate = Date,
        stripEscapeRe = /(\\.)/g,
        hourInfoRe = /([gGhHisucUOPZ]|MS)/,
        dateInfoRe = /([djzmnYycU]|MS)/,
        slashRe = /\\/gi,
        numberTokenRe = /\{(\d+)\}/g,
        MSFormatRe = new RegExp('\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/'),
        pad = Ext.String.leftPad,
        monthInfo = {
            F: true,
            m: true,
            M: true,
            n: true
        },
        yearInfo = {
            o: true,
            Y: true,
            y: true
        },
        // Most of the date-formatting functions below are the excellent work of Baron Schwartz.
        // (see http://www.xaprb.com/blog/2005/12/12/javascript-closures-for-runtime-efficiency/)
        // They generate precompiled functions from format patterns instead of parsing and
        // processing each pattern every time a date is formatted.
        code = [
            // date calculations (note: the code below creates a dependency on Ext.Number.from())
            "var me = this, dt, y, m, d, h, i, s, ms, o, O, z, zz, u, v, W, year, jan4, week1monday, daysInMonth, dayMatched,",
            "def = me.defaults,",
            "from = Ext.Number.from,",
            "results = String(input).match(me.parseRegexes[{0}]);",
            // either null, or an array of matched strings
            "if(results){",
            "{1}",
            "if(u != null){",
            // i.e. unix time is defined
            "v = new Date(u * 1000);",
            // give top priority to UNIX time
            "}else{",
            // create Date object representing midnight of the current day;
            // this will provide us with our date defaults
            // (note: clearTime() handles Daylight Saving Time automatically)
            "dt = me.clearTime(new Date);",
            "y = from(y, from(def.y, dt.getFullYear()));",
            "m = from(m, from(def.m - 1, dt.getMonth()));",
            "dayMatched = d !== undefined;",
            "d = from(d, from(def.d, dt.getDate()));",
            // Attempt to validate the day. Since it defaults to today, it may go out
            // of range, for example parsing m/Y where the value is 02/2000 on the 31st of May.
            // It will attempt to parse 2000/02/31, which will overflow to March and end up
            // returning 03/2000. We only do this when we default the day. If an invalid day value
            // was set to be parsed by the user, continue on and either let it overflow or return null
            // depending on the strict value. This will be in line with the normal Date behaviour.
            "if (!dayMatched) {",
            "dt.setDate(1);",
            "dt.setMonth(m);",
            "dt.setFullYear(y);",
            "daysInMonth = me.getDaysInMonth(dt);",
            "if (d > daysInMonth) {",
            "d = daysInMonth;",
            "}",
            "}",
            "h  = from(h, from(def.h, dt.getHours()));",
            "i  = from(i, from(def.i, dt.getMinutes()));",
            "s  = from(s, from(def.s, dt.getSeconds()));",
            "ms = from(ms, from(def.ms, dt.getMilliseconds()));",
            "if(z >= 0 && y >= 0){",
            // both the year and zero-based day of year are defined and >= 0.
            // these 2 values alone provide sufficient info to create a full date object
            // create Date object representing January 1st for the given year
            // handle years < 100 appropriately
            "v = me.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);",
            // then add day of year, checking for Date "rollover" if necessary
            "v = !strict? v : (strict === true && (z <= 364 || (me.isLeapYear(v) && z <= 365))? me.add(v, me.DAY, z) : null);",
            "}else if(strict === true && !me.isValid(y, m + 1, d, h, i, s, ms)){",
            // check for Date "rollover"
            "v = null;",
            // invalid date, so return null
            "}else{",
            "if (W) {",
            // support ISO-8601
            // http://en.wikipedia.org/wiki/ISO_week_date
            //
            // Mutually equivalent definitions for week 01 are:
            // a. the week starting with the Monday which is nearest in time to 1 January
            // b. the week with 4 January in it
            // ... there are many others ...
            //
            // We'll use letter b above to determine the first week of the year.
            //
            // So, first get a Date object for January 4th of whatever calendar year is desired.
            //
            // Then, the first Monday of the year can easily be determined by (operating on this Date):
            // 1. Getting the day of the week.
            // 2. Subtracting that by one.
            // 3. Multiplying that by 86400000 (one day in ms).
            // 4. Subtracting this number of days (in ms) from the January 4 date (represented in ms).
            //
            // Example #1 ...
            //
            //       January 2012
            //   Su Mo Tu We Th Fr Sa
            //    1  2  3  4  5  6  7
            //    8  9 10 11 12 13 14
            //   15 16 17 18 19 20 21
            //   22 23 24 25 26 27 28
            //   29 30 31
            //
            // 1. January 4th is a Wednesday.
            // 2. Its day number is 3.
            // 3. Simply substract 2 days from Wednesday.
            // 4. The first week of the year begins on Monday, January 2. Simple!
            //
            // Example #2 ...
            //       January 1992
            //   Su Mo Tu We Th Fr Sa
            //             1  2  3  4
            //    5  6  7  8  9 10 11
            //   12 13 14 15 16 17 18
            //   19 20 21 22 23 24 25
            //   26 27 28 29 30 31
            //
            // 1. January 4th is a Saturday.
            // 2. Its day number is 6.
            // 3. Simply subtract 5 days from Saturday.
            // 4. The first week of the year begins on Monday, December 30. Simple!
            //
            // v = Ext.Date.clearTime(new Date(week1monday.getTime() + ((W - 1) * 604800000 + 43200000)));
            // (This is essentially doing the same thing as above but for the week rather than the day)
            "year = y || (new Date()).getFullYear();",
            "jan4 = new Date(year, 0, 4, 0, 0, 0);",
            "d = jan4.getDay();",
            // If the 1st is a Thursday, then the 4th will be a Sunday, so we need the appropriate
            // day number here, which is why we use the day === checks.
            "week1monday = new Date(jan4.getTime() - ((d === 0 ? 6 : d - 1) * 86400000));",
            // The reason for adding 43200000 (12 hours) is to avoid any complication with daylight saving
            // switch overs. For example,  if the clock is rolled back, an hour will repeat, so adding 7 days
            // will leave us 1 hour short (Sun <date> 23:00:00). By setting is to 12:00, subtraction
            // or addition of an hour won't make any difference.
            "v = Ext.Date.clearTime(new Date(week1monday.getTime() + ((W - 1) * 604800000 + 43200000)));",
            "} else {",
            // plain old Date object
            // handle years < 100 properly
            "v = me.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);",
            "}",
            "}",
            "}",
            "}",
            "if(v){",
            // favor UTC offset over GMT offset
            "if(zz != null){",
            // reset to UTC, then add offset
            "v = me.add(v, me.SECOND, -v.getTimezoneOffset() * 60 - zz);",
            "}else if(o){",
            // reset to GMT, then add offset
            "v = me.add(v, me.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));",
            "}",
            "}",
            "return (v != null) ? v : null;"
        ].join('\n');
    // Polyfill Date's toISOString instance method where not implemented.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
    // TODO: Remove this when IE8 retires.
    if (!Date.prototype.toISOString) {
        Date.prototype.toISOString = function() {
            var me = this;
            return pad(me.getUTCFullYear(), 4, '0') + '-' + pad(me.getUTCMonth() + 1, 2, '0') + '-' + pad(me.getUTCDate(), 2, '0') + 'T' + pad(me.getUTCHours(), 2, '0') + ':' + pad(me.getUTCMinutes(), 2, '0') + ':' + pad(me.getUTCSeconds(), 2, '0') + '.' + pad(me.getUTCMilliseconds(), 3, '0') + 'Z';
        };
    }
    /**
     * @method xf
     * @private
     * @param format
     * Create private copy of Ext JS's `Ext.util.Format.format()` method
     * + to remove unnecessary dependency
     * + to resolve namespace conflict with MS-Ajax's implementation
     */
    function xf(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(numberTokenRe, function(m, i) {
            return args[i];
        });
    }
    utilDate = {
        /** @ignore */
        now: nativeDate.now,
        // always available due to polyfill in Ext.js
        /**
     * @private
     */
        toString: function(date) {
            if (!date) {
                date = new nativeDate();
            }
            return date.getFullYear() + "-" + pad(date.getMonth() + 1, 2, '0') + "-" + pad(date.getDate(), 2, '0') + "T" + pad(date.getHours(), 2, '0') + ":" + pad(date.getMinutes(), 2, '0') + ":" + pad(date.getSeconds(), 2, '0');
        },
        /**
     * Returns the number of milliseconds between two dates.
     * @param {Date} dateA The first date.
     * @param {Date} [dateB=new Date()] (optional) The second date.
     * @return {Number} The difference in milliseconds
     */
        getElapsed: function(dateA, dateB) {
            return Math.abs(dateA - (dateB || utilDate.now()));
        },
        /**
     * Global flag which determines if strict date parsing should be used.
     * Strict date parsing will not roll-over invalid dates, which is the
     * default behavior of JavaScript Date objects.
     * (see {@link #parse} for more information)
     * @type Boolean
    */
        useStrict: false,
        /**
     * @private
     */
        formatCodeToRegex: function(character, currentGroup) {
            // Note: currentGroup - position in regex result array (see notes for Ext.Date.parseCodes below)
            var p = utilDate.parseCodes[character];
            if (p) {
                p = typeof p === 'function' ? p() : p;
                utilDate.parseCodes[character] = p;
            }
            // reassign function result to prevent repeated execution
            return p ? Ext.applyIf({
                c: p.c ? xf(p.c, currentGroup || "{0}") : p.c
            }, p) : {
                g: 0,
                c: null,
                s: Ext.String.escapeRegex(character)
            };
        },
        // treat unrecognized characters as literals
        /**
     * An object hash in which each property is a date parsing function. The property name is the
     * format string which that function parses.
     *
     * This object is automatically populated with date parsing functions as
     * date formats are requested for Ext standard formatting strings.
     *
     * Custom parsing functions may be inserted into this object, keyed by a name which from then on
     * may be used as a format string to {@link #parse}.
     *
     * Example:
     *
     *     Ext.Date.parseFunctions['x-date-format'] = myDateParser;
     *
     *  A parsing function should return a Date object, and is passed the following parameters:
     *
     * - `date`: {@link String} - The date string to parse.
     * - `strict`: {@link Boolean} - `true` to validate date strings while parsing
     * (i.e. prevent JavaScript Date "rollover"). __The default must be `false`.__
     * Invalid date strings should return `null` when parsed.
     *
     * To enable Dates to also be _formatted_ according to that format, a corresponding
     * formatting function must be placed into the {@link #formatFunctions} property.
     * @property parseFunctions
     * @type Object
     */
        parseFunctions: {
            "MS": function(input, strict) {
                // note: the timezone offset is ignored since the MS Ajax server sends
                // a UTC milliseconds-since-Unix-epoch value (negative values are allowed)
                var r = (input || '').match(MSFormatRe);
                return r ? new nativeDate(((r[1] || '') + r[2]) * 1) : null;
            },
            "time": function(input, strict) {
                var num = parseInt(input, 10);
                if (num || num === 0) {
                    return new nativeDate(num);
                }
                return null;
            },
            "timestamp": function(input, strict) {
                var num = parseInt(input, 10);
                if (num || num === 0) {
                    return new nativeDate(num * 1000);
                }
                return null;
            }
        },
        parseRegexes: [],
        /**
     * An object hash in which each property is a date formatting function. The property name is the
     * format string which corresponds to the produced formatted date string.
     *
     * This object is automatically populated with date formatting functions as
     * date formats are requested for Ext standard formatting strings.
     *
     * Custom formatting functions may be inserted into this object, keyed by a name which from then on
     * may be used as a format string to {@link #format}.
     *
     * Example:
     *
     *     Ext.Date.formatFunctions['x-date-format'] = myDateFormatter;
     *
     * A formatting function should return a string representation of the Date object which
     * is the scope (this) of the function.
     *
     * To enable date strings to also be _parsed_ according to that format, a corresponding
     * parsing function must be placed into the {@link #parseFunctions} property.
     * @property formatFunctions
     * @type Object
     */
        formatFunctions: {
            "MS": function() {
                // UTC milliseconds since Unix epoch (MS-AJAX serialized date format (MRSF))
                return '\\/Date(' + this.getTime() + ')\\/';
            },
            "time": function() {
                return this.getTime().toString();
            },
            "timestamp": function() {
                return utilDate.format(this, 'U');
            }
        },
        y2kYear: 50,
        /**
     * Date interval constant.
     * @type String
     */
        MILLI: "ms",
        /**
     * Date interval constant.
     * @type String
     */
        SECOND: "s",
        /**
     * Date interval constant.
     * @type String
     */
        MINUTE: "mi",
        /** Date interval constant.
     * @type String
     */
        HOUR: "h",
        /**
     * Date interval constant.
     * @type String
     */
        DAY: "d",
        /**
     * Date interval constant.
     * @type String
     */
        MONTH: "mo",
        /**
     * Date interval constant.
     * @type String
     */
        YEAR: "y",
        /**
     * The number of days in a week.
     * @type Number
     */
        DAYS_IN_WEEK: 7,
        /**
     * The number of months in a year.
     * @type Number
     */
        MONTHS_IN_YEAR: 12,
        /**
     * The maximum number of days in a month.
     * @type {Number}
     */
        MAX_DAYS_IN_MONTH: 31,
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
        /**
     * An object hash containing default date values used during date parsing.
     * 
     * The following properties are available:
     *
     * - `y`: {@link Number} - The default year value. Defaults to `undefined`.
     * - `m`: {@link Number} - The default 1-based month value. Defaults to `undefined`.
     * - `d`: {@link Number} - The default day value. Defaults to `undefined`.
     * - `h`: {@link Number} - The default hour value. Defaults to `undefined`.
     * - `i`: {@link Number} - The default minute value. Defaults to `undefined`.
     * - `s`: {@link Number} - The default second value. Defaults to `undefined`.
     * - `ms`: {@link Number} - The default millisecond value. Defaults to `undefined`.
     * 
     * Override these properties to customize the default date values used by the {@link #parse} method.
     * 
     * __Note:__ In countries which experience Daylight Saving Time (i.e. DST), the `h`, `i`, `s`
     * and `ms` properties may coincide with the exact time in which DST takes effect.
     * It is the responsibility of the developer to account for this.
     *
     * Example Usage:
     * 
     *     // set default day value to the first day of the month
     *     Ext.Date.defaults.d = 1;
     *
     *     // parse a February date string containing only year and month values.
     *     // setting the default day value to 1 prevents weird date rollover issues
     *     // when attempting to parse the following date string on, for example, March 31st 2009.
     *     Ext.Date.parse('2009-02', 'Y-m'); // returns a Date object representing February 1st 2009.
     *
     * @property defaults
     * @type Object
     */
        defaults: {},
        /**
     * @property {String[]} dayNames
     * An array of textual day names.
     * Override these values for international dates.
     *
     * Example:
     *
     *     Ext.Date.dayNames = [
     *         'SundayInYourLang',
     *         'MondayInYourLang'
     *         // ...
     *     ];
     * @locale
     */
        dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        /**
     * @property {String[]} monthNames
     * An array of textual month names.
     * Override these values for international dates.
     *
     * Example:
     *
     *     Ext.Date.monthNames = [
     *         'JanInYourLang',
     *         'FebInYourLang'
     *         // ...
     *     ];
     * @locale
     */
        monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        /**
     * @property {Object} monthNumbers
     * An object hash of zero-based JavaScript month numbers (with short month names as keys).
     *
     * __Note:__ keys are case-sensitive.
     * 
     * Override these values for international dates.
     *
     * Example:
     *
     *     Ext.Date.monthNumbers = {
     *         'LongJanNameInYourLang': 0,
     *         'ShortJanNameInYourLang':0,
     *         'LongFebNameInYourLang':1,
     *         'ShortFebNameInYourLang':1
     *         // ...
     *     };
     * @locale
     */
        monthNumbers: {
            January: 0,
            Jan: 0,
            February: 1,
            Feb: 1,
            March: 2,
            Mar: 2,
            April: 3,
            Apr: 3,
            May: 4,
            June: 5,
            Jun: 5,
            July: 6,
            Jul: 6,
            August: 7,
            Aug: 7,
            September: 8,
            Sep: 8,
            October: 9,
            Oct: 9,
            November: 10,
            Nov: 10,
            December: 11,
            Dec: 11
        },
        /**
     * @property {String} defaultFormat
     * The date format string that the {@link Ext.util.Format#dateRenderer}
     * and {@link Ext.util.Format#date} functions use.  See {@link Ext.Date} for details.
     *
     * This may be overridden in a locale file.
     * @locale
     */
        defaultFormat: 'm/d/Y',
        /**
     * @property {String} defaultTimeFormat
     * The default time format.
     *
     * This may be overridden in a locale file.
     * @locale
     */
        defaultTimeFormat: 'h:i A',
        /**
     * @property {Number} firstDayOfWeek
     * The day on which the week starts. `0` being Sunday, through `6` being Saturday.
     *
     * This may be overridden in a locale file.
     * @locale
     */
        firstDayOfWeek: 0,
        /**
     * @property {Number[]} weekendDays
     * The days on which weekend falls. `0` being Sunday, through `6` being Saturday.
     *
     * This may be overridden in a locale file.
     * @locale
     */
        weekendDays: [
            0,
            6
        ],
        /**
     * Get the short month name for the given month number.
     * Override this function for international dates.
     * @param {Number} month A zero-based JavaScript month number.
     * @return {String} The short month name.
     * @locale
     */
        getShortMonthName: function(month) {
            return utilDate.monthNames[month].substring(0, 3);
        },
        /**
     * Get the short day name for the given day number.
     * Override this function for international dates.
     * @param {Number} day A zero-based JavaScript day number.
     * @return {String} The short day name.
     * @locale
     */
        getShortDayName: function(day) {
            return utilDate.dayNames[day].substring(0, 3);
        },
        /**
     * Get the zero-based JavaScript month number for the given short/full month name.
     * Override this function for international dates.
     * @param {String} name The short/full month name.
     * @return {Number} The zero-based JavaScript month number.
     * @locale
     */
        getMonthNumber: function(name) {
            // handle camel casing for English month names (since the keys for the Ext.Date.monthNumbers hash are case sensitive)
            return utilDate.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        },
        /**
     * Checks if the specified format contains hour information
     * @param {String} format The format to check
     * @return {Boolean} True if the format contains hour information
     * @method
     */
        formatContainsHourInfo: function(format) {
            return hourInfoRe.test(format.replace(stripEscapeRe, ''));
        },
        /**
     * Checks if the specified format contains information about
     * anything other than the time.
     * @param {String} format The format to check
     * @return {Boolean} True if the format contains information about
     * date/day information.
     * @method
     */
        formatContainsDateInfo: function(format) {
            return dateInfoRe.test(format.replace(stripEscapeRe, ''));
        },
        /**
     * @private
     * Checks if the specified format contains only month information.
     * 
     * @param {String} format Format to check
     *
     * @return {Boolean}
     */
        isMonthFormat: function(format) {
            return !!monthInfo[format];
        },
        /**
     * @private
     * Checks if the specified format contains only year information.
     *
     * @param {String} format Format to check.
     *
     * @return {Boolean}
     */
        isYearFormat: function(format) {
            return !!yearInfo[format];
        },
        /**
     * Removes all escaping for a date format string. In date formats,
     * using a '\' can be used to escape special characters.
     * @param {String} format The format to unescape
     * @return {String} The unescaped format
     * @method
     */
        unescapeFormat: function(format) {
            // Escape the format, since \ can be used to escape special
            // characters in a date format. For example, in a Spanish
            // locale the format may be: 'd \\de F \\de Y'
            return format.replace(slashRe, '');
        },
        /**
     * The base format-code to formatting-function hashmap used by the {@link #format} method.
     * Formatting functions are strings (or functions which return strings) which
     * will return the appropriate value when evaluated in the context of the Date object
     * from which the {@link #format} method is called.
     * Add to / override these mappings for custom date formatting.
     *
     * __Note:__ `Ext.Date.format()` treats characters as literals if an appropriate mapping cannot be found.
     *
     * Example:
     *
     *     Ext.Date.formatCodes.x = "Ext.util.Format.leftPad(this.getDate(), 2, '0')";
     *     console.log(Ext.Date.format(new Date(), 'X'); // returns the current day of the month
     * @type Object
     */
        formatCodes: {
            d: "Ext.String.leftPad(m.getDate(), 2, '0')",
            D: "Ext.Date.getShortDayName(m.getDay())",
            // get localized short day name
            j: "m.getDate()",
            l: "Ext.Date.dayNames[m.getDay()]",
            N: "(m.getDay() ? m.getDay() : 7)",
            S: "Ext.Date.getSuffix(m)",
            w: "m.getDay()",
            z: "Ext.Date.getDayOfYear(m)",
            W: "Ext.String.leftPad(Ext.Date.getWeekOfYear(m), 2, '0')",
            F: "Ext.Date.monthNames[m.getMonth()]",
            m: "Ext.String.leftPad(m.getMonth() + 1, 2, '0')",
            M: "Ext.Date.getShortMonthName(m.getMonth())",
            // get localized short month name
            n: "(m.getMonth() + 1)",
            t: "Ext.Date.getDaysInMonth(m)",
            L: "(Ext.Date.isLeapYear(m) ? 1 : 0)",
            o: "(m.getFullYear() + (Ext.Date.getWeekOfYear(m) == 1 && m.getMonth() > 0 ? +1 : (Ext.Date.getWeekOfYear(m) >= 52 && m.getMonth() < 11 ? -1 : 0)))",
            Y: "Ext.String.leftPad(m.getFullYear(), 4, '0')",
            y: "('' + m.getFullYear()).substring(2, 4)",
            a: "(m.getHours() < 12 ? 'am' : 'pm')",
            A: "(m.getHours() < 12 ? 'AM' : 'PM')",
            g: "((m.getHours() % 12) ? m.getHours() % 12 : 12)",
            G: "m.getHours()",
            h: "Ext.String.leftPad((m.getHours() % 12) ? m.getHours() % 12 : 12, 2, '0')",
            H: "Ext.String.leftPad(m.getHours(), 2, '0')",
            i: "Ext.String.leftPad(m.getMinutes(), 2, '0')",
            s: "Ext.String.leftPad(m.getSeconds(), 2, '0')",
            u: "Ext.String.leftPad(m.getMilliseconds(), 3, '0')",
            O: "Ext.Date.getGMTOffset(m)",
            P: "Ext.Date.getGMTOffset(m, true)",
            T: "Ext.Date.getTimezone(m)",
            Z: "(m.getTimezoneOffset() * -60)",
            c: function() {
                // ISO-8601 -- GMT format
                var c = "Y-m-dTH:i:sP",
                    code = [],
                    i,
                    l = c.length,
                    e;
                for (i = 0; i < l; ++i) {
                    e = c.charAt(i);
                    code.push(e === "T" ? "'T'" : utilDate.getFormatCode(e));
                }
                // treat T as a character literal
                return code.join(" + ");
            },
            C: function() {
                // ISO-1601 -- browser format. UTC numerics with the 'Z' TZ id.
                return 'm.toISOString()';
            },
            U: "Math.round(m.getTime() / 1000)"
        },
        /**
     * Checks if the passed Date parameters will cause a JavaScript Date "rollover".
     * @param {Number} year 4-digit year.
     * @param {Number} month 1-based month-of-year.
     * @param {Number} day Day of month.
     * @param {Number} hour (optional) Hour.
     * @param {Number} minute (optional) Minute.
     * @param {Number} second (optional) Second.
     * @param {Number} millisecond (optional) Millisecond.
     * @return {Boolean} `true` if the passed parameters do not cause a Date "rollover", `false` otherwise.
     */
        isValid: function(year, month, day, hour, minute, second, millisecond) {
            // setup defaults
            hour = hour || 0;
            minute = minute || 0;
            second = second || 0;
            millisecond = millisecond || 0;
            // Special handling for year < 100
            var dt = utilDate.add(new nativeDate(year < 100 ? 100 : year, month - 1, day, hour, minute, second, millisecond), utilDate.YEAR, year < 100 ? year - 100 : 0);
            return year === dt.getFullYear() && month === dt.getMonth() + 1 && day === dt.getDate() && hour === dt.getHours() && minute === dt.getMinutes() && second === dt.getSeconds() && millisecond === dt.getMilliseconds();
        },
        /**
     * Parses the passed string using the specified date format.
     * Note that this function expects normal calendar dates, meaning that months are 1-based (i.e. 1 = January).
     * The {@link #defaults} hash will be used for any date value (i.e. year, month, day, hour, minute, second or millisecond)
     * which cannot be found in the passed string. If a corresponding default date value has not been specified in the {@link #defaults} hash,
     * the current date's year, month, day or DST-adjusted zero-hour time value will be used instead.
     * Keep in mind that the input date string must precisely match the specified format string
     * in order for the parse operation to be successful (failed parse operations return a 
     * `null` value).
     * 
     * Example:
     *
     *     //dt = Fri May 25 2007 (current date)
     *     var dt = new Date();
     *     
     *     //dt = Thu May 25 2006 (today&#39;s month/day in 2006)
     *     dt = Ext.Date.parse("2006", "Y");
     *     
     *     //dt = Sun Jan 15 2006 (all date parts specified)
     *     dt = Ext.Date.parse("2006-01-15", "Y-m-d");
     *     
     *     //dt = Sun Jan 15 2006 15:20:01
     *     dt = Ext.Date.parse("2006-01-15 3:20:01 PM", "Y-m-d g:i:s A");
     *     
     *     // attempt to parse Sun Feb 29 2006 03:20:01 in strict mode
     *     dt = Ext.Date.parse("2006-02-29 03:20:01", "Y-m-d H:i:s", true); // returns null
     *
     * @param {String} input The raw date string.
     * @param {String} format The expected date string format.
     * @param {Boolean} [strict=false] (optional) `true` to validate date strings while parsing (i.e. prevents JavaScript Date "rollover").
     * Invalid date strings will return `null` when parsed.
     * @return {Date/null} The parsed Date, or `null` if an invalid date string.
     */
        parse: function(input, format, strict) {
            var p = utilDate.parseFunctions;
            if (p[format] == null) {
                utilDate.createParser(format);
            }
            return p[format].call(utilDate, input, Ext.isDefined(strict) ? strict : utilDate.useStrict);
        },
        // Backwards compat
        parseDate: function(input, format, strict) {
            return utilDate.parse(input, format, strict);
        },
        /**
     * @private
     */
        getFormatCode: function(character) {
            var f = utilDate.formatCodes[character];
            if (f) {
                f = typeof f === 'function' ? f() : f;
                utilDate.formatCodes[character] = f;
            }
            // reassign function result to prevent repeated execution
            // note: unknown characters are treated as literals
            return f || ("'" + Ext.String.escape(character) + "'");
        },
        /**
     * @private
     */
        createFormat: function(format) {
            var code = [],
                special = false,
                ch = '',
                i;
            for (i = 0; i < format.length; ++i) {
                ch = format.charAt(i);
                if (!special && ch === "\\") {
                    special = true;
                } else if (special) {
                    special = false;
                    code.push("'" + Ext.String.escape(ch) + "'");
                } else {
                    if (ch === '\n') {
                        code.push("'\\n'");
                    } else {
                        code.push(utilDate.getFormatCode(ch));
                    }
                }
            }
            utilDate.formatFunctions[format] = Ext.functionFactory("var m=this;return " + code.join('+'));
        },
        /**
     * @private
     */
        createParser: function(format) {
            var regexNum = utilDate.parseRegexes.length,
                currentGroup = 1,
                calc = [],
                regex = [],
                special = false,
                ch = "",
                i = 0,
                len = format.length,
                atEnd = [],
                obj;
            for (; i < len; ++i) {
                ch = format.charAt(i);
                if (!special && ch === "\\") {
                    special = true;
                } else if (special) {
                    special = false;
                    regex.push(Ext.String.escape(ch));
                } else {
                    obj = utilDate.formatCodeToRegex(ch, currentGroup);
                    currentGroup += obj.g;
                    regex.push(obj.s);
                    if (obj.g && obj.c) {
                        if (obj.calcAtEnd) {
                            atEnd.push(obj.c);
                        } else {
                            calc.push(obj.c);
                        }
                    }
                }
            }
            calc = calc.concat(atEnd);
            utilDate.parseRegexes[regexNum] = new RegExp("^" + regex.join('') + "$", 'i');
            utilDate.parseFunctions[format] = Ext.functionFactory("input", "strict", xf(code, regexNum, calc.join('')));
        },
        /**
     * @private
     */
        parseCodes: {
            // Notes:
            // g = {Number} calculation group (0 or 1. only group 1 contributes to
            // date calculations.)
            // c = {String} calculation method (required for group 1. null for group 0.
            // {0} = currentGroup - position in regex result array)
            // s = {String} regex pattern. all matches are stored in results[], and are
            // accessible by the calculation mapped to 'c'
            d: {
                g: 1,
                c: "d = parseInt(results[{0}], 10);\n",
                s: "(3[0-1]|[1-2][0-9]|0[1-9])"
            },
            // day of month with leading zeroes (01 - 31)
            j: {
                g: 1,
                c: "d = parseInt(results[{0}], 10);\n",
                s: "(3[0-1]|[1-2][0-9]|[1-9])"
            },
            // day of month without leading zeroes (1 - 31)
            D: function() {
                for (var a = [],
                    i = 0; i < 7; a.push(utilDate.getShortDayName(i)) , ++i){}
                // get localised short day names
                return {
                    g: 0,
                    c: null,
                    s: "(?:" + a.join("|") + ")"
                };
            },
            l: function() {
                return {
                    g: 0,
                    c: null,
                    s: "(?:" + utilDate.dayNames.join("|") + ")"
                };
            },
            N: {
                g: 0,
                c: null,
                s: "[1-7]"
            },
            // ISO-8601 day number (1 (monday) - 7 (sunday))
            //<locale type="object" property="parseCodes">
            S: {
                g: 0,
                c: null,
                s: "(?:st|nd|rd|th)"
            },
            //</locale>
            w: {
                g: 0,
                c: null,
                s: "[0-6]"
            },
            // JavaScript day number (0 (sunday) - 6 (saturday))
            z: {
                g: 1,
                c: "z = parseInt(results[{0}], 10);\n",
                s: "(\\d{1,3})"
            },
            // day of the year (0 - 364 (365 in leap years))
            W: {
                g: 1,
                c: "W = parseInt(results[{0}], 10);\n",
                s: "(\\d{2})"
            },
            // ISO-8601 week number (with leading zero)
            F: function() {
                return {
                    g: 1,
                    c: "m = parseInt(me.getMonthNumber(results[{0}]), 10);\n",
                    // get localised month number
                    s: "(" + utilDate.monthNames.join("|") + ")"
                };
            },
            M: function() {
                for (var a = [],
                    i = 0; i < 12; a.push(utilDate.getShortMonthName(i)) , ++i){}
                // get localised short month names
                return Ext.applyIf({
                    s: "(" + a.join("|") + ")"
                }, utilDate.formatCodeToRegex("F"));
            },
            m: {
                g: 1,
                c: "m = parseInt(results[{0}], 10) - 1;\n",
                s: "(1[0-2]|0[1-9])"
            },
            // month number with leading zeros (01 - 12)
            n: {
                g: 1,
                c: "m = parseInt(results[{0}], 10) - 1;\n",
                s: "(1[0-2]|[1-9])"
            },
            // month number without leading zeros (1 - 12)
            t: {
                g: 0,
                c: null,
                s: "(?:\\d{2})"
            },
            // no. of days in the month (28 - 31)
            L: {
                g: 0,
                c: null,
                s: "(?:1|0)"
            },
            o: {
                g: 1,
                c: "y = parseInt(results[{0}], 10);\n",
                s: "(\\d{4})"
            },
            // ISO-8601 year number (with leading zero)
            Y: {
                g: 1,
                c: "y = parseInt(results[{0}], 10);\n",
                s: "(\\d{4})"
            },
            // 4-digit year
            y: {
                g: 1,
                c: "var ty = parseInt(results[{0}], 10);\n" + "y = ty > me.y2kYear ? 1900 + ty : 2000 + ty;\n",
                // 2-digit year
                s: "(\\d{2})"
            },
            // In the am/pm parsing routines, we allow both upper and lower case
            // even though it doesn't exactly match the spec. It gives much more flexibility
            // in being able to specify case insensitive regexes.
            //<locale type="object" property="parseCodes">
            a: {
                g: 1,
                c: "if (/(am)/i.test(results[{0}])) {\n" + "if (!h || h == 12) { h = 0; }\n" + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(am|pm|AM|PM)",
                calcAtEnd: true
            },
            //</locale>
            //<locale type="object" property="parseCodes">
            A: {
                g: 1,
                c: "if (/(am)/i.test(results[{0}])) {\n" + "if (!h || h == 12) { h = 0; }\n" + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(AM|PM|am|pm)",
                calcAtEnd: true
            },
            //</locale>
            g: {
                g: 1,
                c: "h = parseInt(results[{0}], 10);\n",
                s: "(1[0-2]|[0-9])"
            },
            //  12-hr format of an hour without leading zeroes (1 - 12)
            G: {
                g: 1,
                c: "h = parseInt(results[{0}], 10);\n",
                s: "(2[0-3]|1[0-9]|[0-9])"
            },
            // 24-hr format of an hour without leading zeroes (0 - 23)
            h: {
                g: 1,
                c: "h = parseInt(results[{0}], 10);\n",
                s: "(1[0-2]|0[1-9])"
            },
            //  12-hr format of an hour with leading zeroes (01 - 12)
            H: {
                g: 1,
                c: "h = parseInt(results[{0}], 10);\n",
                s: "(2[0-3]|[0-1][0-9])"
            },
            //  24-hr format of an hour with leading zeroes (00 - 23)
            i: {
                g: 1,
                c: "i = parseInt(results[{0}], 10);\n",
                s: "([0-5][0-9])"
            },
            // minutes with leading zeros (00 - 59)
            s: {
                g: 1,
                c: "s = parseInt(results[{0}], 10);\n",
                s: "([0-5][0-9])"
            },
            // seconds with leading zeros (00 - 59)
            u: {
                g: 1,
                c: "ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",
                s: "(\\d+)"
            },
            // decimal fraction of a second (minimum = 1 digit, maximum = unlimited)
            O: {
                g: 1,
                c: [
                    "o = results[{0}];",
                    "var sn = o.substring(0,1),",
                    // get + / - sign
                    "hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),",
                    // get hours (performs minutes-to-hour conversion also, just in case)
                    "mn = o.substring(3,5) % 60;",
                    // get minutes
                    "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"
                ].join(// -12hrs <= GMT offset <= 14hrs
                "\n"),
                s: "([+-]\\d{4})"
            },
            // GMT offset in hrs and mins
            P: {
                g: 1,
                c: [
                    "o = results[{0}];",
                    "var sn = o.substring(0,1),",
                    // get + / - sign
                    "hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),",
                    // get hours (performs minutes-to-hour conversion also, just in case)
                    "mn = o.substring(4,6) % 60;",
                    // get minutes
                    "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"
                ].join(// -12hrs <= GMT offset <= 14hrs
                "\n"),
                s: "([+-]\\d{2}:\\d{2})"
            },
            // GMT offset in hrs and mins (with colon separator)
            T: {
                g: 0,
                c: null,
                s: "[A-Z]{1,5}"
            },
            // timezone abbrev. may be between 1 - 5 chars
            Z: {
                g: 1,
                c: "zz = results[{0}] * 1;\n" + // -43200 <= UTC offset <= 50400
                "zz = (-43200 <= zz && zz <= 50400)? zz : null;\n",
                s: "([+-]?\\d{1,5})"
            },
            // leading '+' sign is optional for UTC offset
            c: function() {
                var calc = [],
                    arr = [
                        utilDate.formatCodeToRegex("Y", 1),
                        // year
                        utilDate.formatCodeToRegex("m", 2),
                        // month
                        utilDate.formatCodeToRegex("d", 3),
                        // day
                        utilDate.formatCodeToRegex("H", 4),
                        // hour
                        utilDate.formatCodeToRegex("i", 5),
                        // minute
                        utilDate.formatCodeToRegex("s", 6),
                        // second
                        {
                            c: "ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"
                        },
                        // decimal fraction of a second (minimum = 1 digit, maximum = unlimited)
                        {
                            c: [
                                // allow either "Z" (i.e. UTC) or "-0530" or "+08:00" (i.e. UTC offset) timezone delimiters. assumes local timezone if no timezone is specified
                                "if(results[8]) {",
                                // timezone specified
                                "if(results[8] == 'Z'){",
                                "zz = 0;",
                                // UTC
                                "}else if (results[8].indexOf(':') > -1){",
                                utilDate.formatCodeToRegex("P", 8).c,
                                // timezone offset with colon separator
                                "}else{",
                                utilDate.formatCodeToRegex("O", 8).c,
                                // timezone offset without colon separator
                                "}",
                                "}"
                            ].join('\n')
                        }
                    ],
                    i, l;
                for (i = 0 , l = arr.length; i < l; ++i) {
                    calc.push(arr[i].c);
                }
                return {
                    g: 1,
                    c: calc.join(""),
                    s: [
                        arr[0].s,
                        // year (required)
                        "(?:",
                        "-",
                        arr[1].s,
                        // month (optional)
                        "(?:",
                        "-",
                        arr[2].s,
                        // day (optional)
                        "(?:",
                        "(?:T| )?",
                        // time delimiter -- either a "T" or a single blank space
                        arr[3].s,
                        ":",
                        arr[4].s,
                        // hour AND minute, delimited by a single colon (optional). MUST be preceded by either a "T" or a single blank space
                        "(?::",
                        arr[5].s,
                        ")?",
                        // seconds (optional)
                        "(?:(?:\\.|,)(\\d+))?",
                        // decimal fraction of a second (e.g. ",12345" or ".98765") (optional)
                        "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?",
                        // "Z" (UTC) or "-0530" (UTC offset without colon delimiter) or "+08:00" (UTC offset with colon delimiter) (optional)
                        ")?",
                        ")?",
                        ")?"
                    ].join("")
                };
            },
            U: {
                g: 1,
                c: "u = parseInt(results[{0}], 10);\n",
                s: "(-?\\d+)"
            }
        },
        // leading minus sign indicates seconds before UNIX epoch
        //Old Ext.Date prototype methods.
        /**
     * @private
     */
        dateFormat: function(date, format) {
            return utilDate.format(date, format);
        },
        /**
     * Compares if two dates are equal by comparing their values.
     * @param {Date} date1
     * @param {Date} date2
     * @return {Boolean} `true` if the date values are equal
     */
        isEqual: function(date1, date2) {
            // check we have 2 date objects
            if (date1 && date2) {
                return (date1.getTime() === date2.getTime());
            }
            // one or both isn't a date, only equal if both are falsey
            return !(date1 || date2);
        },
        /**
     * Formats a date given the supplied format string.
     * @param {Date} date The date to format
     * @param {String} format The format string
     * @return {String} The formatted date or an empty string if date parameter is not a JavaScript Date object
     */
        format: function(date, format) {
            var formatFunctions = utilDate.formatFunctions;
            if (!Ext.isDate(date)) {
                return '';
            }
            if (formatFunctions[format] == null) {
                utilDate.createFormat(format);
            }
            return formatFunctions[format].call(date) + '';
        },
        /**
     * Get the timezone abbreviation of the current date (equivalent to the format specifier 'T').
     *
     * __Note:__ The date string returned by the JavaScript Date object's `toString()` method varies
     * between browsers (e.g. FF vs IE) and system region settings (e.g. IE in Asia vs IE in America).
     * For a given date string e.g. "Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)",
     * `getTimezone()` first tries to get the timezone abbreviation from between a pair of parentheses
     * (which may or may not be present), failing which it proceeds to get the timezone abbreviation
     * from the GMT offset portion of the date string.
     * 
     *     var dt = new Date('9/17/2011');
     *     console.log(Ext.Date.getTimezone(dt));
     *
     * @param {Date} date The date
     * @return {String} The abbreviated timezone name (e.g. 'CST', 'PDT', 'EDT', 'MPST' ...).
     */
        getTimezone: function(date) {
            // the following list shows the differences between date strings from different browsers on a WinXP SP2 machine from an Asian locale:
            //
            // Opera  : "Thu, 25 Oct 2007 22:53:45 GMT+0800" -- shortest (weirdest) date string of the lot
            // Safari : "Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)" -- value in parentheses always gives the correct timezone (same as FF)
            // FF     : "Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)" -- value in parentheses always gives the correct timezone
            // IE     : "Thu Oct 25 22:54:35 UTC+0800 2007" -- (Asian system setting) look for 3-4 letter timezone abbrev
            // IE     : "Thu Oct 25 17:06:37 PDT 2007" -- (American system setting) look for 3-4 letter timezone abbrev
            //
            // this crazy regex attempts to guess the correct timezone abbreviation despite these differences.
            // step 1: (?:\((.*)\) -- find timezone in parentheses
            // step 2: ([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?) -- if nothing was found in step 1, find timezone from timezone offset portion of date string
            // step 3: remove all non uppercase characters found in step 1 and 2
            return date.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,5})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/, "$1$2").replace(/[^A-Z]/g, "");
        },
        /**
     * Get the offset from GMT of the current date (equivalent to the format specifier 'O').
     * 
     *     var dt = new Date('9/17/2011');
     *     console.log(Ext.Date.getGMTOffset(dt));
     *
     * @param {Date} date The date
     * @param {Boolean} [colon=false] `true` to separate the hours and minutes with a colon.
     * @return {String} The 4-character offset string prefixed with + or - (e.g. '-0600').
     */
        getGMTOffset: function(date, colon) {
            var offset = date.getTimezoneOffset();
            return (offset > 0 ? "-" : "+") + Ext.String.leftPad(Math.floor(Math.abs(offset) / 60), 2, "0") + (colon ? ":" : "") + Ext.String.leftPad(Math.abs(offset % 60), 2, "0");
        },
        /**
     * Get the numeric day number of the year, adjusted for leap year.
     * 
     *     var dt = new Date('9/17/2011');
     *     console.log(Ext.Date.getDayOfYear(dt)); // 259
     *
     * @param {Date} date The date
     * @return {Number} 0 to 364 (365 in leap years).
     */
        getDayOfYear: function(date) {
            var num = 0,
                d = utilDate.clone(date),
                m = date.getMonth(),
                i;
            for (i = 0 , d.setDate(1) , d.setMonth(0); i < m; d.setMonth(++i)) {
                num += utilDate.getDaysInMonth(d);
            }
            return num + date.getDate() - 1;
        },
        /**
     * Get the numeric ISO-8601 week number of the year.
     * (equivalent to the format specifier 'W', but without a leading zero).
     * 
     *     var dt = new Date('9/17/2011');
     *     console.log(Ext.Date.getWeekOfYear(dt)); // 37
     *
     * @param {Date} date The date.
     * @return {Number} 1 to 53.
     * @method
     */
        getWeekOfYear: (function() {
            // adapted from http://www.merlyn.demon.co.uk/weekcalc.htm
            var ms1d = 86400000,
                // milliseconds in a day
                ms7d = 7 * ms1d;
            // milliseconds in a week
            return function(date) {
                // return a closure so constants get calculated only once
                var DC3 = nativeDate.UTC(date.getFullYear(), date.getMonth(), date.getDate() + 3) / ms1d,
                    // an Absolute Day Number
                    AWN = Math.floor(DC3 / 7),
                    // an Absolute Week Number
                    Wyr = new nativeDate(AWN * ms7d).getUTCFullYear();
                return AWN - Math.floor(nativeDate.UTC(Wyr, 0, 7) / ms7d) + 1;
            };
        }()),
        /**
     * Checks if the current date falls within a leap year.
     * 
     *     var dt = new Date('1/10/2011');
     *     console.log(Ext.Date.isLeapYear(dt)); // false
     *
     * @param {Date} date The date
     * @return {Boolean} `true` if the current date falls within a leap year, `false` otherwise.
     */
        isLeapYear: function(date) {
            var year = date.getFullYear();
            return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
        },
        /**
     * Get the first day of the current month, adjusted for leap year.  The returned value
     * is the numeric day index within the week (0-6) which can be used in conjunction with
     * the {@link #monthNames} array to retrieve the textual day name.
     *
     *    var dt = new Date('1/10/2007'),
     *        firstDay = Ext.Date.getFirstDayOfMonth(dt);
     *
     *    console.log(Ext.Date.dayNames[firstDay]); // output: 'Monday'
     *
     * @param {Date} date The date
     * @return {Number} The day number (0-6).
     */
        getFirstDayOfMonth: function(date) {
            var day = (date.getDay() - (date.getDate() - 1)) % 7;
            return (day < 0) ? (day + 7) : day;
        },
        /**
     * Get the last day of the current month, adjusted for leap year.  The returned value
     * is the numeric day index within the week (0-6) which can be used in conjunction with
     * the {@link #monthNames} array to retrieve the textual day name.
     *
     *    var dt = new Date('1/10/2007'),
     *        lastDay = Ext.Date.getLastDayOfMonth(dt);
     *
     *    console.log(Ext.Date.dayNames[lastDay]); // output: 'Wednesday'
     *
     * @param {Date} date The date
     * @return {Number} The day number (0-6).
     */
        getLastDayOfMonth: function(date) {
            return utilDate.getLastDateOfMonth(date).getDay();
        },
        /**
     * Get the date of the first day of the month in which this date resides.
     * @param {Date} date The date
     * @return {Date}
     */
        getFirstDateOfMonth: function(date) {
            return new nativeDate(date.getFullYear(), date.getMonth(), 1);
        },
        /**
     * Get the date of the last day of the month in which this date resides.
     * @param {Date} date The date
     * @return {Date}
     */
        getLastDateOfMonth: function(date) {
            return new nativeDate(date.getFullYear(), date.getMonth(), utilDate.getDaysInMonth(date));
        },
        /**
     * Get the number of days in the current month, adjusted for leap year.
     * @param {Date} date The date
     * @return {Number} The number of days in the month.
     * @method
     */
        getDaysInMonth: (function() {
            var daysInMonth = [
                    31,
                    28,
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31
                ];
            return function(date) {
                // return a closure for efficiency
                var m = date.getMonth();
                return m === 1 && utilDate.isLeapYear(date) ? 29 : daysInMonth[m];
            };
        }()),
        /**
     * Get the English ordinal suffix of the current day (equivalent to the format specifier 'S').
     * @param {Date} date The date
     * @return {String} 'st, 'nd', 'rd' or 'th'.
     * @locale
     */
        getSuffix: function(date) {
            switch (date.getDate()) {
                case 1:
                case 21:
                case 31:
                    return "st";
                case 2:
                case 22:
                    return "nd";
                case 3:
                case 23:
                    return "rd";
                default:
                    return "th";
            }
        },
        /**
     * Creates and returns a new Date instance with the exact same date value as the called instance.
     * Dates are copied and passed by reference, so if a copied date variable is modified later, the original
     * variable will also be changed.  When the intention is to create a new variable that will not
     * modify the original instance, you should create a clone.
     *
     * Example of correctly cloning a date:
     *
     *     //wrong way:
     *     var orig = new Date('10/1/2006');
     *     var copy = orig;
     *     copy.setDate(5);
     *     console.log(orig);  // returns 'Thu Oct 05 2006'!
     *
     *     //correct way:
     *     var orig = new Date('10/1/2006'),
     *         copy = Ext.Date.clone(orig);
     *     copy.setDate(5);
     *     console.log(orig);  // returns 'Thu Oct 01 2006'
     *
     * @param {Date} date The date.
     * @return {Date} The new Date instance.
     */
        clone: function(date) {
            return new nativeDate(date.getTime());
        },
        /**
     * Checks if the current date is affected by Daylight Saving Time (DST).
     * @param {Date} date The date
     * @return {Boolean} `true` if the current date is affected by DST.
     */
        isDST: function(date) {
            // adapted from http://sencha.com/forum/showthread.php?p=247172#post247172
            // courtesy of @geoffrey.mcgill
            return new nativeDate(date.getFullYear(), 0, 1).getTimezoneOffset() !== date.getTimezoneOffset();
        },
        /**
     * Attempts to clear all time information from this Date by setting the time to midnight of the same day,
     * automatically adjusting for Daylight Saving Time (DST) where applicable.
     *
     * __Note:__ DST timezone information for the browser's host operating system is assumed to be up-to-date.
     * @param {Date} date The date
     * @param {Boolean} [clone=false] `true` to create a clone of this date, clear the time and return it.
     * @return {Date} this or the clone.
     */
        clearTime: function(date, clone) {
            // handles invalid dates preventing the browser from crashing.
            if (isNaN(date.getTime())) {
                return date;
            }
            if (clone) {
                return utilDate.clearTime(utilDate.clone(date));
            }
            // get current date before clearing time
            var d = date.getDate(),
                hr, c;
            // clear time
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);
            if (date.getDate() !== d) {
                // account for DST (i.e. day of month changed when setting hour = 0)
                // note: DST adjustments are assumed to occur in multiples of 1 hour (this is almost always the case)
                // refer to http://www.timeanddate.com/time/aboutdst.html for the (rare) exceptions to this rule
                // increment hour until cloned date == current date
                for (hr = 1 , c = utilDate.add(date, utilDate.HOUR, hr); c.getDate() !== d; hr++ , c = utilDate.add(date, utilDate.HOUR, hr)){}
                date.setDate(d);
                date.setHours(c.getHours());
            }
            return date;
        },
        /**
     * Provides a convenient method for performing basic date arithmetic. This method
     * does not modify the Date instance being called - it creates and returns
     * a new Date instance containing the resulting date value.
     *
     * Examples:
     *
     *     // Basic usage:
     *     var dt = Ext.Date.add(new Date('10/29/2006'), Ext.Date.DAY, 5);
     *     console.log(dt); // returns 'Fri Nov 03 2006 00:00:00'
     *
     *     // Negative values will be subtracted:
     *     var dt2 = Ext.Date.add(new Date('10/1/2006'), Ext.Date.DAY, -5);
     *     console.log(dt2); // returns 'Tue Sep 26 2006 00:00:00'
     *
     *      // Decimal values can be used:
     *     var dt3 = Ext.Date.add(new Date('10/1/2006'), Ext.Date.DAY, 1.25);
     *     console.log(dt3); // returns 'Mon Oct 02 2006 06:00:00'
     *
     * @param {Date} date The date to modify
     * @param {String} interval A valid date interval enum value.
     * @param {Number} value The amount to add to the current date.
     * @param {Boolean} [preventDstAdjust=false] `true` to prevent adjustments when crossing
     * daylight savings boundaries.
     * @return {Date} The new Date instance.
     */
        add: function(date, interval, value, preventDstAdjust) {
            var d = utilDate.clone(date),
                base = 0,
                day, decimalValue;
            if (!interval || value === 0) {
                return d;
            }
            decimalValue = value - parseInt(value, 10);
            value = parseInt(value, 10);
            if (value) {
                switch (interval.toLowerCase()) {
                    // See EXTJSIV-7418. We use setTime() here to deal with issues related to
                    // the switchover that occurs when changing to daylight savings and vice
                    // versa. setTime() handles this correctly where setHour/Minute/Second/Millisecond
                    // do not. Let's assume the DST change occurs at 2am and we're incrementing using add
                    // for 15 minutes at time. When entering DST, we should see:
                    // 01:30am
                    // 01:45am
                    // 03:00am // skip 2am because the hour does not exist
                    // ...
                    // Similarly, leaving DST, we should see:
                    // 01:30am
                    // 01:45am
                    // 01:00am // repeat 1am because that's the change over
                    // 01:30am
                    // 01:45am
                    // 02:00am
                    // ....
                    // 
                    case utilDate.MILLI:
                        if (preventDstAdjust) {
                            d.setMilliseconds(d.getMilliseconds() + value);
                        } else {
                            d.setTime(d.getTime() + value);
                        };
                        break;
                    case utilDate.SECOND:
                        if (preventDstAdjust) {
                            d.setSeconds(d.getSeconds() + value);
                        } else {
                            d.setTime(d.getTime() + value * 1000);
                        };
                        break;
                    case utilDate.MINUTE:
                        if (preventDstAdjust) {
                            d.setMinutes(d.getMinutes() + value);
                        } else {
                            d.setTime(d.getTime() + value * 60 * 1000);
                        };
                        break;
                    case utilDate.HOUR:
                        if (preventDstAdjust) {
                            d.setHours(d.getHours() + value);
                        } else {
                            d.setTime(d.getTime() + value * 60 * 60 * 1000);
                        };
                        break;
                    case utilDate.DAY:
                        d.setDate(d.getDate() + value);
                        break;
                    case utilDate.MONTH:
                        day = date.getDate();
                        if (day > 28) {
                            day = Math.min(day, utilDate.getLastDateOfMonth(utilDate.add(utilDate.getFirstDateOfMonth(date), utilDate.MONTH, value)).getDate());
                        };
                        d.setDate(day);
                        d.setMonth(date.getMonth() + value);
                        break;
                    case utilDate.YEAR:
                        day = date.getDate();
                        if (day > 28) {
                            day = Math.min(day, utilDate.getLastDateOfMonth(utilDate.add(utilDate.getFirstDateOfMonth(date), utilDate.YEAR, value)).getDate());
                        };
                        d.setDate(day);
                        d.setFullYear(date.getFullYear() + value);
                        break;
                }
            }
            if (decimalValue) {
                switch (interval.toLowerCase()) {
                    case utilDate.MILLI:
                        base = 1;
                        break;
                    case utilDate.SECOND:
                        base = 1000;
                        break;
                    case utilDate.MINUTE:
                        base = 1000 * 60;
                        break;
                    case utilDate.HOUR:
                        base = 1000 * 60 * 60;
                        break;
                    case utilDate.DAY:
                        base = 1000 * 60 * 60 * 24;
                        break;
                    case utilDate.MONTH:
                        day = utilDate.getDaysInMonth(d);
                        base = 1000 * 60 * 60 * 24 * day;
                        break;
                    case utilDate.YEAR:
                        day = (utilDate.isLeapYear(d) ? 366 : 365);
                        base = 1000 * 60 * 60 * 24 * day;
                        break;
                }
                if (base) {
                    d.setTime(d.getTime() + base * decimalValue);
                }
            }
            return d;
        },
        /**
     * Provides a convenient method for performing basic date arithmetic. This method
     * does not modify the Date instance being called - it creates and returns
     * a new Date instance containing the resulting date value.
     * 
     * Examples:
     *
     *     // Basic usage:
     *     var dt = Ext.Date.subtract(new Date('10/29/2006'), Ext.Date.DAY, 5);
     *     console.log(dt); // returns 'Tue Oct 24 2006 00:00:00'
     *
     *     // Negative values will be added:
     *     var dt2 = Ext.Date.subtract(new Date('10/1/2006'), Ext.Date.DAY, -5);
     *     console.log(dt2); // returns 'Fri Oct 6 2006 00:00:00'
     *
     *      // Decimal values can be used:
     *     var dt3 = Ext.Date.subtract(new Date('10/1/2006'), Ext.Date.DAY, 1.25);
     *     console.log(dt3); // returns 'Fri Sep 29 2006 06:00:00'
     * 
     * @param {Date} date The date to modify
     * @param {String} interval A valid date interval enum value.
     * @param {Number} value The amount to subtract from the current date.
     * @param {Boolean} [preventDstAdjust=false] `true` to prevent adjustments when crossing
     * daylight savings boundaries.
     * @return {Date} The new Date instance.
     */
        subtract: function(date, interval, value, preventDstAdjust) {
            return utilDate.add(date, interval, -value, preventDstAdjust);
        },
        /**
     * Checks if a date falls on or between the given start and end dates.
     * @param {Date} date The date to check
     * @param {Date} start Start date
     * @param {Date} end End date
     * @return {Boolean} `true` if this date falls on or between the given start and end dates.
     */
        between: function(date, start, end) {
            var t = date.getTime();
            return start.getTime() <= t && t <= end.getTime();
        },
        /**
     * Checks if the date is a weekend day. Uses {@link #weekendDays}.
     * @param {Date} date The date.
     * @return {Boolean} `true` if the day falls on a weekend.
     *
     * @since 6.2.0
     */
        isWeekend: function(date) {
            return Ext.Array.indexOf(this.weekendDays, date.getDay()) > -1;
        },
        /**
     * Converts the passed UTC date into a local date.
     * For example, if the passed date is:
     * `Wed Jun 01 2016 00:10:00 GMT+1000 (AUS Eastern Standard Time)`, then
     * the returned date will be `Wed Jun 01 2016 00:00:00 GMT+1000 (AUS Eastern Standard Time)`.
     * @param {Date} d The date to convert.
     * @return {Date} The date as a local. Does not modify the passed date.
     *
     * @since 6.2.0
     */
        utcToLocal: function(d) {
            return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
        },
        /**
     * Converts the passed local date into a UTC date.
     * For example, if the passed date is:
     * `Wed Jun 01 2016 00:00:00 GMT+1000 (AUS Eastern Standard Time)`, then
     * the returned date will be `Wed Jun 01 2016 10:00:00 GMT+1000 (AUS Eastern Standard Time)`.
     * @param {Date} d The date to convert.
     * @return {Date} The date as UTC. Does not modify the passed date.
     * 
     * @since 6.2.0
     */
        localToUtc: function(d) {
            return utilDate.utc(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
        },
        /**
     * Create a UTC date.
     * @param {Number} year The year.
     * @param {Number} month The month.
     * @param {Number} day The day.
     * @param {Number} [hour=0] The hour.
     * @param {Number} [min=0] The minutes.
     * @param {Number} [s=0] The seconds.
     * @param {Number} [ms=0] The milliseconds.
     * @return {Date} The UTC date.
     *
     * @since 6.2.0
     */
        utc: function(year, month, day, hour, min, s, ms) {
            return new Date(Date.UTC(year, month, day, hour || 0, min || 0, s || 0, ms || 0));
        },
        //Maintains compatibility with old static and prototype window.Date methods.
        compat: function() {
            var p,
                statics = [
                    'useStrict',
                    'formatCodeToRegex',
                    'parseFunctions',
                    'parseRegexes',
                    'formatFunctions',
                    'y2kYear',
                    'MILLI',
                    'SECOND',
                    'MINUTE',
                    'HOUR',
                    'DAY',
                    'MONTH',
                    'YEAR',
                    'defaults',
                    'dayNames',
                    'monthNames',
                    'monthNumbers',
                    'getShortMonthName',
                    'getShortDayName',
                    'getMonthNumber',
                    'formatCodes',
                    'isValid',
                    'parseDate',
                    'getFormatCode',
                    'createFormat',
                    'createParser',
                    'parseCodes'
                ],
                proto = [
                    'dateFormat',
                    'format',
                    'getTimezone',
                    'getGMTOffset',
                    'getDayOfYear',
                    'getWeekOfYear',
                    'isLeapYear',
                    'getFirstDayOfMonth',
                    'getLastDayOfMonth',
                    'getDaysInMonth',
                    'getSuffix',
                    'clone',
                    'isDST',
                    'clearTime',
                    'add',
                    'between'
                ],
                sLen = statics.length,
                pLen = proto.length,
                stat, prot, s;
            //Append statics
            for (s = 0; s < sLen; s++) {
                stat = statics[s];
                nativeDate[stat] = utilDate[stat];
            }
            //Append to prototype
            for (p = 0; p < pLen; p++) {
                prot = proto[p];
                nativeDate.prototype[prot] = function() {
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift(this);
                    return utilDate[prot].apply(utilDate, args);
                };
            }
        },
        /**
     * Calculate how many units are there between two time.
     * @param {Date} min The first time.
     * @param {Date} max The second time.
     * @param {String} unit The unit. This unit is compatible with the date interval constants.
     * @return {Number} The maximum number n of units that min + n * unit <= max.
     */
        diff: function(min, max, unit) {
            var est,
                diff = +max - min;
            switch (unit) {
                case utilDate.MILLI:
                    return diff;
                case utilDate.SECOND:
                    return Math.floor(diff / 1000);
                case utilDate.MINUTE:
                    return Math.floor(diff / 60000);
                case utilDate.HOUR:
                    return Math.floor(diff / 3600000);
                case utilDate.DAY:
                    return Math.floor(diff / 86400000);
                case 'w':
                    return Math.floor(diff / 604800000);
                case utilDate.MONTH:
                    est = (max.getFullYear() * 12 + max.getMonth()) - (min.getFullYear() * 12 + min.getMonth());
                    if (utilDate.add(min, unit, est) > max) {
                        return est - 1;
                    };
                    return est;
                case utilDate.YEAR:
                    est = max.getFullYear() - min.getFullYear();
                    if (utilDate.add(min, unit, est) > max) {
                        return est - 1;
                    } else {
                        return est;
                    };
            }
        },
        /**
     * Align the date to `unit`.
     * @param {Date} date The date to be aligned.
     * @param {String} unit The unit. This unit is compatible with the date interval constants.
     * @param {Number} step
     * @return {Date} The aligned date.
     */
        align: function(date, unit, step) {
            var num = new nativeDate(+date);
            switch (unit.toLowerCase()) {
                case utilDate.MILLI:
                    return num;
                case utilDate.SECOND:
                    num.setUTCSeconds(num.getUTCSeconds() - num.getUTCSeconds() % step);
                    num.setUTCMilliseconds(0);
                    return num;
                case utilDate.MINUTE:
                    num.setUTCMinutes(num.getUTCMinutes() - num.getUTCMinutes() % step);
                    num.setUTCSeconds(0);
                    num.setUTCMilliseconds(0);
                    return num;
                case utilDate.HOUR:
                    num.setUTCHours(num.getUTCHours() - num.getUTCHours() % step);
                    num.setUTCMinutes(0);
                    num.setUTCSeconds(0);
                    num.setUTCMilliseconds(0);
                    return num;
                case utilDate.DAY:
                    if (step === 7 || step === 14) {
                        num.setUTCDate(num.getUTCDate() - num.getUTCDay() + 1);
                    };
                    num.setUTCHours(0);
                    num.setUTCMinutes(0);
                    num.setUTCSeconds(0);
                    num.setUTCMilliseconds(0);
                    return num;
                case utilDate.MONTH:
                    num.setUTCMonth(num.getUTCMonth() - (num.getUTCMonth() - 1) % step, 1);
                    num.setUTCHours(0);
                    num.setUTCMinutes(0);
                    num.setUTCSeconds(0);
                    num.setUTCMilliseconds(0);
                    return num;
                case utilDate.YEAR:
                    num.setUTCFullYear(num.getUTCFullYear() - num.getUTCFullYear() % step, 1, 1);
                    num.setUTCHours(0);
                    num.setUTCMinutes(0);
                    num.setUTCSeconds(0);
                    num.setUTCMilliseconds(0);
                    return date;
            }
        }
    };
    utilDate.parseCodes.C = utilDate.parseCodes.c;
    return utilDate;
}());

/**
 * @class Ext.Function
 *
 * A collection of useful static methods to deal with function callbacks.
 * @singleton
 */
Ext.Function = (function() {
    // @define Ext.lang.Function
    // @define Ext.Function
    // @require Ext
    // @require Ext.lang.Array
    var lastTime = 0,
        animFrameId,
        animFrameHandlers = [],
        animFrameNoArgs = [],
        idSource = 0,
        animFrameMap = {},
        slice = Array.prototype.slice,
        win = window,
        global = Ext.global,
        hasImmediate = !!(global.setImmediate && global.clearImmediate),
        requestAnimFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || function(callback) {
            var currTime = Ext.now(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                timerFn = function() {
                    callback(currTime + timeToCall);
                },
                id;
            timerFn.$origFn = callback.$origFn ? callback.$origFn : callback;
            timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
            id = win.setTimeout(timerFn, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        },
        fireHandlers = function() {
            var len = animFrameHandlers.length,
                id, i, handler;
            animFrameId = null;
            // Fire all animation frame handlers in one go
            for (i = 0; i < len; i++) {
                handler = animFrameHandlers[i];
                id = handler[3];
                // Check if this timer has been canceled; its map entry is going to be removed
                if (animFrameMap[id]) {
                    handler[0].apply(handler[1] || global, handler[2] || animFrameNoArgs);
                    delete animFrameMap[id];
                }
            }
            // Clear all fired animation frame handlers, don't forget that new handlers
            // could have been created in user handler functions called in the loop above
            animFrameHandlers = animFrameHandlers.slice(len);
        },
        fireElevatedHandlers = function() {
            Ext.elevateFunction(fireHandlers);
        },
        ExtFunction = {
            /**
         * A very commonly used method throughout the framework. It acts as a wrapper around another method
         * which originally accepts 2 arguments for `name` and `value`.
         * The wrapped function then allows "flexible" value setting of either:
         *
         * - `name` and `value` as 2 arguments
         * - one single object argument with multiple key - value pairs
         *
         * For example:
         *
         *     var setValue = Ext.Function.flexSetter(function(name, value) {
         *         this[name] = value;
         *     });
         *
         *     // Afterwards
         *     // Setting a single name - value
         *     setValue('name1', 'value1');
         *
         *     // Settings multiple name - value pairs
         *     setValue({
         *         name1: 'value1',
         *         name2: 'value2',
         *         name3: 'value3'
         *     });
         *
         * @param {Function} setter The single value setter method.
         * @param {String} setter.name The name of the value being set.
         * @param {Object} setter.value The value being set.
         * @return {Function}
         */
            flexSetter: function(setter) {
                return function(name, value) {
                    var k, i;
                    if (name !== null) {
                        if (typeof name !== 'string') {
                            for (k in name) {
                                if (name.hasOwnProperty(k)) {
                                    setter.call(this, k, name[k]);
                                }
                            }
                            if (Ext.enumerables) {
                                for (i = Ext.enumerables.length; i--; ) {
                                    k = Ext.enumerables[i];
                                    if (name.hasOwnProperty(k)) {
                                        setter.call(this, k, name[k]);
                                    }
                                }
                            }
                        } else {
                            setter.call(this, name, value);
                        }
                    }
                    return this;
                };
            },
            /**
         * Create a new function from the provided `fn`, change `this` to the provided scope,
         * optionally overrides arguments for the call. Defaults to the arguments passed by
         * the caller.
         *
         * {@link Ext#bind Ext.bind} is alias for {@link Ext.Function#bind Ext.Function.bind}
         * 
         * **NOTE:** This method is deprecated. Use the standard `bind` method of JavaScript
         * `Function` instead:
         * 
         *      function foo () {
         *          ...
         *      }
         *      
         *      var fn = foo.bind(this);
         *
         * This method is unavailable natively on IE8 and IE/Quirks but Ext JS provides a
         * "polyfill" to emulate the important features of the standard `bind` method. In
         * particular, the polyfill only provides binding of "this" and optional arguments.
         * 
         * @param {Function} fn The function to delegate.
         * @param {Object} scope (optional) The scope (`this` reference) in which the function is executed.
         * **If omitted, defaults to the default global environment object (usually the browser window).**
         * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
         * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
         * if a number the args are inserted at the specified position.
         * @return {Function} The new function.
         */
            bind: function(fn, scope, args, appendArgs) {
                // Function.prototype.bind is polyfilled in IE8, otherwise native
                if (arguments.length < 2) {
                    return fn;
                } else if (arguments.length < 3) {
                    return fn.bind(scope);
                } else if (arguments.length < 4) {
                    return Function.prototype.bind.apply(fn, [].concat(scope, args));
                }
                var method = fn;
                return function() {
                    var callArgs = args || arguments;
                    if (appendArgs === true) {
                        callArgs = slice.call(arguments, 0);
                        callArgs = callArgs.concat(args);
                    } else if (typeof appendArgs === 'number') {
                        callArgs = slice.call(arguments, 0);
                        // copy arguments first
                        Ext.Array.insert(callArgs, appendArgs, args);
                    }
                    return method.apply(scope || global, callArgs);
                };
            },
            /**
         * Captures the given parameters for a later call to `Ext.callback`. This binding is
         * most useful for resolving scopes for example to an `Ext.app.ViewController`.
         *
         * The arguments match that of `Ext.callback` except for the `args` which, if provided
         * to this method, are prepended to any arguments supplied by the eventual caller of
         * the returned function.
         *
         * @return {Function} A function that, when called, uses `Ext.callback` to call the
         * captured `callback`.
         * @since 5.0.0
         */
            bindCallback: function(callback, scope, args, delay, caller) {
                return function() {
                    var a = slice.call(arguments);
                    return Ext.callback(callback, scope, args ? args.concat(a) : a, delay, caller);
                };
            },
            /**
         * Create a new function from the provided `fn`, the arguments of which are pre-set to `args`.
         * New arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.
         * This is especially useful when creating callbacks.
         *
         * For example:
         *
         *     var originalFunction = function(){
         *         alert(Ext.Array.from(arguments).join(' '));
         *     };
         *
         *     var callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);
         *
         *     callback(); // alerts 'Hello World'
         *     callback('by Me'); // alerts 'Hello World by Me'
         *
         * {@link Ext#pass Ext.pass} is alias for {@link Ext.Function#pass Ext.Function.pass}
         *
         * @param {Function} fn The original function.
         * @param {Array} args The arguments to pass to new callback.
         * @param {Object} scope (optional) The scope (`this` reference) in which the function is executed.
         * @return {Function} The new callback function.
         */
            pass: function(fn, args, scope) {
                if (!Ext.isArray(args)) {
                    if (Ext.isIterable(args)) {
                        args = Ext.Array.clone(args);
                    } else {
                        args = args !== undefined ? [
                            args
                        ] : [];
                    }
                }
                return function() {
                    var fnArgs = args.slice();
                    fnArgs.push.apply(fnArgs, arguments);
                    return fn.apply(scope || this, fnArgs);
                };
            },
            /**
         * Create an alias to the provided method property with name `methodName` of `object`.
         * Note that the execution scope will still be bound to the provided `object` itself.
         *
         * @param {Object/Function} object
         * @param {String} methodName
         * @return {Function} aliasFn
         */
            alias: function(object, methodName) {
                return function() {
                    return object[methodName].apply(object, arguments);
                };
            },
            /**
         * Create a "clone" of the provided method. The returned method will call the given
         * method passing along all arguments and the "this" pointer and return its result.
         *
         * @param {Function} method
         * @return {Function} cloneFn
         */
            clone: function(method) {
                var newMethod, prop;
                newMethod = function() {
                    return method.apply(this, arguments);
                };
                for (prop in method) {
                    if (method.hasOwnProperty(prop)) {
                        newMethod[prop] = method[prop];
                    }
                }
                return newMethod;
            },
            /**
         * Creates an interceptor function. The passed function is called before the original one. If it returns false,
         * the original one is not called. The resulting function returns the results of the original function.
         * The passed function is called with the parameters of the original function. Example usage:
         *
         *     var sayHi = function(name){
         *         alert('Hi, ' + name);
         *     };
         *
         *     sayHi('Fred'); // alerts "Hi, Fred"
         *
         *     // create a new function that validates input without
         *     // directly modifying the original function:
         *     var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){
         *         return name === 'Brian';
         *     });
         *
         *     sayHiToFriend('Fred');  // no alert
         *     sayHiToFriend('Brian'); // alerts "Hi, Brian"
         *
         * @param {Function} origFn The original function.
         * @param {Function} newFn The function to call before the original.
         * @param {Object} [scope] The scope (`this` reference) in which the passed function is executed.
         * **If omitted, defaults to the scope in which the original function is called or the browser window.**
         * @param {Object} [returnValue=null] The value to return if the passed function return `false`.
         * @return {Function} The new function.
         */
            createInterceptor: function(origFn, newFn, scope, returnValue) {
                if (!Ext.isFunction(newFn)) {
                    return origFn;
                } else {
                    returnValue = Ext.isDefined(returnValue) ? returnValue : null;
                    return function() {
                        var me = this,
                            args = arguments;
                        return (newFn.apply(scope || me || global, args) !== false) ? origFn.apply(me || global, args) : returnValue;
                    };
                }
            },
            /**
         * Creates a delegate (callback) which, when called, executes after a specific delay.
         *
         * @param {Function} fn The function which will be called on a delay when the returned function is called.
         * Optionally, a replacement (or additional) argument list may be specified.
         * @param {Number} delay The number of milliseconds to defer execution by whenever called.
         * @param {Object} scope (optional) The scope (`this` reference) used by the function at execution time.
         * @param {Array} args (optional) Override arguments for the call. (Defaults to the arguments passed by the caller)
         * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
         * if a number the args are inserted at the specified position.
         * @return {Function} A function which, when called, executes the original function after the specified delay.
         */
            createDelayed: function(fn, delay, scope, args, appendArgs) {
                var boundFn = fn;
                if (scope || args) {
                    boundFn = Ext.Function.bind(fn, scope, args, appendArgs);
                }
                return function() {
                    var me = this,
                        args = slice.call(arguments),
                        timerFn;
                    timerFn = function() {
                        if (Ext.elevateFunction) {
                            Ext.elevateFunction(boundFn, me, args);
                        } else {
                            boundFn.apply(me, args);
                        }
                    };
                    timerFn.$origFn = fn.$origFn ? fn.$origFn : fn;
                    timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
                    setTimeout(timerFn, delay);
                };
            },
            /**
         * Calls this function after the number of milliseconds specified, optionally in a specific scope. Example usage:
         *
         *     var sayHi = function(name){
         *         alert('Hi, ' + name);
         *     }
         *
         *     // executes immediately:
         *     sayHi('Fred');
         *
         *     // executes after 2 seconds:
         *     Ext.Function.defer(sayHi, 2000, this, ['Fred']);
         *
         *     // this syntax is sometimes useful for deferring
         *     // execution of an anonymous function:
         *     Ext.Function.defer(function(){
         *         alert('Anonymous');
         *     }, 100);
         *
         * {@link Ext#defer Ext.defer} is alias for {@link Ext.Function#defer Ext.Function.defer}
         *
         * @param {Function} fn The function to defer.
         * @param {Number} millis The number of milliseconds for the `setTimeout` call
         * (if less than or equal to 0 the function is executed immediately).
         * @param {Object} scope (optional) The scope (`this` reference) in which the function is executed.
         * **If omitted, defaults to the browser window.**
         * @param {Array} [args] Overrides arguments for the call. Defaults to the arguments passed by the caller.
         * @param {Boolean/Number} [appendArgs=false] If `true` args are appended to call args instead of overriding,
         * or, if a number, then the args are inserted at the specified position.
         * @return {Number} The timeout id that can be used with `clearTimeout`.
         */
            defer: function(fn, millis, scope, args, appendArgs) {
                var timerFn, boundFn;
                if (!scope && !args && !appendArgs) {
                    boundFn = fn;
                } else {
                    boundFn = Ext.Function.bind(fn, scope, args, appendArgs);
                }
                if (millis > 0) {
                    timerFn = function() {
                        if (Ext.elevateFunction) {
                            Ext.elevateFunction(boundFn);
                        } else {
                            boundFn();
                        }
                    };
                    timerFn.$origFn = fn.$origFn ? fn.$origFn : fn;
                    timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
                    return setTimeout(timerFn, millis);
                }
                boundFn();
                return 0;
            },
            /**
         * Calls this function repeatedly at a given interval, optionally in a specific scope.
         *
         * {@link Ext#defer Ext.defer} is alias for {@link Ext.Function#defer Ext.Function.defer}
         *
         * @param {Function} fn The function to defer.
         * @param {Number} millis The number of milliseconds for the `setInterval` call
         * @param {Object} scope (optional) The scope (`this` reference) in which the function is executed.
         * **If omitted, defaults to the browser window.**
         * @param {Array} [args] Overrides arguments for the call. Defaults to the arguments passed by the caller.
         * @param {Boolean/Number} [appendArgs=false] If `true` args are appended to call args instead of overriding,
         * or, if a number, then the args are inserted at the specified position.
         * @return {Number} The interval id that can be used with `clearInterval`.
         */
            interval: function(fn, millis, scope, args, appendArgs) {
                var timerFn, boundFn;
                boundFn = Ext.Function.bind(fn, scope, args, appendArgs);
                timerFn = function() {
                    if (Ext.elevateFunction) {
                        Ext.elevateFunction(boundFn);
                    } else {
                        boundFn();
                    }
                };
                timerFn.$origFn = boundFn.$origFn ? boundFn.$origFn : fn;
                timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
                return setInterval(timerFn, millis);
            },
            /**
         * Create a combined function call sequence of the original function + the passed function.
         * The resulting function returns the results of the original function.
         * The passed function is called with the parameters of the original function. Example usage:
         *
         *     var sayHi = function(name){
         *         alert('Hi, ' + name);
         *     };
         *
         *     sayHi('Fred'); // alerts "Hi, Fred"
         *
         *     var sayGoodbye = Ext.Function.createSequence(sayHi, function(name){
         *         alert('Bye, ' + name);
         *     });
         *
         *     sayGoodbye('Fred'); // both alerts show
         *
         * @param {Function} originalFn The original function.
         * @param {Function} newFn The function to sequence.
         * @param {Object} [scope] The scope (`this` reference) in which the passed function is executed.
         * If omitted, defaults to the scope in which the original function is called or the
         * default global environment object (usually the browser window).
         * @return {Function} The new function.
         */
            createSequence: function(originalFn, newFn, scope) {
                if (!newFn) {
                    return originalFn;
                } else {
                    return function() {
                        var result = originalFn.apply(this, arguments);
                        newFn.apply(scope || this, arguments);
                        return result;
                    };
                }
            },
            /**
         * Creates a delegate function, optionally with a bound scope which, when called, buffers
         * the execution of the passed function for the configured number of milliseconds.
         * If called again within that period, the impending invocation will be canceled, and the
         * timeout period will begin again.
         *
         * @param {Function} fn The function to invoke on a buffered timer.
         * @param {Number} buffer The number of milliseconds by which to buffer the invocation of the
         * function.
         * @param {Object} [scope] The scope (`this` reference) in which.
         * the passed function is executed. If omitted, defaults to the scope specified by the caller.
         * @param {Array} [args] Override arguments for the call. Defaults to the arguments
         * passed by the caller.
         * @return {Function} A function which invokes the passed function after buffering for the specified time.
         */
            createBuffered: function(fn, buffer, scope, args) {
                var timerId,
                    result = function() {
                        var callArgs = args || slice.call(arguments, 0),
                            me = scope || this,
                            timerFn;
                        if (timerId) {
                            clearTimeout(timerId);
                        }
                        timerFn = function() {
                            if (Ext.elevateFunction) {
                                Ext.elevateFunction(fn, me, callArgs);
                            } else {
                                fn.apply(me, callArgs);
                            }
                        };
                        timerFn.$origFn = fn.$origFn ? fn.$origFn : fn;
                        timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
                        timerId = result.timer = setTimeout(timerFn, buffer);
                    };
                return result;
            },
            /**
        * Creates a wrapped function that, when invoked, defers execution until the next
        * animation frame
         * @private
         * @param {Function} fn The function to call.
         * @param {Object} [scope] The scope (`this` reference) in which the function is executed. Defaults to the window object.
         * @param {Array} [args] The argument list to pass to the function.
         * @param {Number} [queueStrategy=3] A bit flag that indicates how multiple calls to
         * the returned function within the same animation frame should be handled.
         *
         * - 1: All calls will be queued - FIFO order
         * - 2: Only the first call will be queued
         * - 3: The last call will replace all previous calls
         *
         * @return {Function}
         */
            createAnimationFrame: function(fn, scope, args, queueStrategy) {
                var boundFn, timerId;
                queueStrategy = queueStrategy || 3;
                boundFn = function() {
                    var timerFn,
                        callArgs = args || slice.call(arguments, 0);
                    scope = scope || this;
                    if (queueStrategy === 3 && timerId) {
                        ExtFunction.cancelAnimationFrame(timerId);
                    }
                    if ((queueStrategy & 1) || !timerId) {
                        timerFn = function() {
                            timerId = boundFn.timerId = null;
                            fn.apply(scope, callArgs);
                        };
                        timerFn.$origFn = fn.$origFn ? fn.$origFn : fn;
                        timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
                        timerId = boundFn.timerId = ExtFunction.requestAnimationFrame(timerFn);
                    }
                };
                return boundFn;
            },
            /**
         * @private
         * Schedules the passed function to be called on the next animation frame.
         * @param {Function} fn The function to call.
         * @param {Object} [scope] The scope (`this` reference) in which the function is executed. Defaults to the window object.
         * @param {Mixed[]} [args] The argument list to pass to the function.
         *
         * @return {Number} Timer id for the new animation frame to use when canceling it.
         */
            requestAnimationFrame: function(fn, scope, args) {
                var id = ++idSource,
                    // Ids start at 1
                    handler = slice.call(arguments, 0);
                handler[3] = id;
                animFrameMap[id] = 1;
                // A flag to indicate that the timer exists
                // We might be in fireHandlers at this moment but this new entry will not
                // be executed until the next frame
                animFrameHandlers.push(handler);
                if (!animFrameId) {
                    animFrameId = requestAnimFrame(Ext.elevateFunction ? fireElevatedHandlers : fireHandlers);
                }
                return id;
            },
            cancelAnimationFrame: function(id) {
                // Don't remove any handlers from animFrameHandlers array, because
                // the might be in use at the moment (when cancelAnimationFrame is called).
                // Just remove the handler id from the map so it will not be executed
                delete animFrameMap[id];
            },
            /**
         * Creates a throttled version of the passed function which, when called repeatedly and
         * rapidly, invokes the passed function only after a certain interval has elapsed since the
         * previous invocation.
         *
         * This is useful for wrapping functions which may be called repeatedly, such as
         * a handler of a mouse move event when the processing is expensive.
         *
         * @param {Function} fn The function to execute at a regular time interval.
         * @param {Number} interval The interval in milliseconds on which the passed function is executed.
         * @param {Object} [scope] The scope (`this` reference) in which
         * the passed function is executed. If omitted, defaults to the scope specified by the caller.
         * @return {Function} A function which invokes the passed function at the specified interval.
         */
            createThrottled: function(fn, interval, scope) {
                var lastCallTime = 0,
                    elapsed, lastArgs, timer,
                    execute = function() {
                        if (Ext.elevateFunction) {
                            Ext.elevateFunction(fn, scope, lastArgs);
                        } else {
                            fn.apply(scope, lastArgs);
                        }
                        lastCallTime = Ext.now();
                        timer = null;
                    };
                execute.$origFn = fn.$origFn ? fn.$origFn : fn;
                execute.$skipTimerCheck = execute.$origFn.$skipTimerCheck;
                return function() {
                    // Use scope of last call unless the creator specified a scope
                    if (!scope) {
                        scope = this;
                    }
                    elapsed = Ext.now() - lastCallTime;
                    lastArgs = arguments;
                    // If this is the first invocation, or the throttle interval has been reached, clear any
                    // pending invocation, and call the target function now.
                    if (elapsed >= interval) {
                        clearTimeout(timer);
                        execute();
                    }
                    // Throttle interval has not yet been reached. Only set the timer to fire if not already set.
                    else if (!timer) {
                        timer = Ext.defer(execute, interval - elapsed);
                    }
                };
            },
            /**
         * Wraps the passed function in a barrier function which will call the passed function after the passed number of invocations.
         * @param {Number} count The number of invocations which will result in the calling of the passed function.
         * @param {Function} fn The function to call after the required number of invocations.
         * @param {Object} scope The scope (`this` reference) in which the function will be called.
         */
            createBarrier: function(count, fn, scope) {
                var barrierFn = function() {
                        if (!--count) {
                            fn.apply(scope, arguments);
                        }
                    };
                barrierFn.$origFn = fn.$origFn ? fn.$origFn : fn;
                barrierFn.$skipTimerCheck = barrierFn.$origFn.$skipTimerCheck;
                return barrierFn;
            },
            /**
         * Adds behavior to an existing method that is executed before the
         * original behavior of the function.  For example:
         * 
         *     var soup = {
         *         contents: [],
         *         add: function(ingredient) {
         *             this.contents.push(ingredient);
         *         }
         *     };
         *     Ext.Function.interceptBefore(soup, "add", function(ingredient){
         *         if (!this.contents.length && ingredient !== "water") {
         *             // Always add water to start with
         *             this.contents.push("water");
         *         }
         *     });
         *     soup.add("onions");
         *     soup.add("salt");
         *     soup.contents; // will contain: water, onions, salt
         * 
         * @param {Object} object The target object
         * @param {String} methodName Name of the method to override
         * @param {Function} fn Function with the new behavior.  It will
         * be called with the same arguments as the original method.  The
         * return value of this function will be the return value of the
         * new method.
         * @param {Object} [scope] The scope to execute the interceptor function. Defaults to the object.
         * @return {Function} The new function just created.
         */
            interceptBefore: function(object, methodName, fn, scope) {
                var method = object[methodName] || Ext.emptyFn;
                return (object[methodName] = function() {
                    var ret = fn.apply(scope || this, arguments);
                    method.apply(this, arguments);
                    return ret;
                });
            },
            /**
         * Adds behavior to an existing method that is executed after the
         * original behavior of the function.  For example:
         * 
         *     var soup = {
         *         contents: [],
         *         add: function(ingredient) {
         *             this.contents.push(ingredient);
         *         }
         *     };
         *     Ext.Function.interceptAfter(soup, "add", function(ingredient){
         *         // Always add a bit of extra salt
         *         this.contents.push("salt");
         *     });
         *     soup.add("water");
         *     soup.add("onions");
         *     soup.contents; // will contain: water, salt, onions, salt
         * 
         * @param {Object} object The target object
         * @param {String} methodName Name of the method to override
         * @param {Function} fn Function with the new behavior.  It will
         * be called with the same arguments as the original method.  The
         * return value of this function will be the return value of the
         * new method.
         * @param {Object} [scope] The scope to execute the interceptor function. Defaults to the object.
         * @return {Function} The new function just created.
         */
            interceptAfter: function(object, methodName, fn, scope) {
                var method = object[methodName] || Ext.emptyFn;
                return (object[methodName] = function() {
                    method.apply(this, arguments);
                    return fn.apply(scope || this, arguments);
                });
            },
            interceptAfterOnce: function(object, methodName, fn, scope) {
                var origMethod = object[methodName],
                    newMethod;
                newMethod = function() {
                    var ret;
                    if (origMethod) {
                        origMethod.apply(this, arguments);
                    }
                    ret = fn.apply(scope || this, arguments);
                    object[methodName] = origMethod;
                    object = methodName = fn = scope = origMethod = newMethod = null;
                    return ret;
                };
                object[methodName] = newMethod;
                return newMethod;
            },
            makeCallback: function(callback, scope) {
                if (!scope[callback]) {
                    if (scope.$className) {
                        Ext.raise('No method "' + callback + '" on ' + scope.$className);
                    }
                    Ext.raise('No method "' + callback + '"');
                }
                return function() {
                    return scope[callback].apply(scope, arguments);
                };
            },
            /**
         * Returns a wrapper function that caches the return value for previously
         * processed function argument(s).
         *
         * For example:
         *
         *      function factorial (value) {
         *          var ret = value;
         *
         *          while (--value > 1) {
         *              ret *= value;
         *          }
         *
         *          return ret;
         *      }
         *
         * Each call to `factorial` will loop and multiply to produce the answer. Using
         * this function we can wrap the above and cache its answers:
         *
         *      factorial = Ext.Function.memoize(factorial);
         *
         * The returned function operates in the same manner as before, but results are
         * stored in a cache to avoid calling the wrapped function when given the same
         * arguments.
         *
         *      var x = factorial(20);  // first time; call real factorial()
         *      var y = factorial(20);  // second time; return value from first call
         *
         * To support multi-argument methods, you will need to provide a `hashFn`.
         *
         *      function permutation (n, k) {
         *          return factorial(n) / factorial(n - k);
         *      }
         *
         *      permutation = Ext.Function.memoize(permutation, null, function (n, k) {
         *          n + '-' + k;
         *      });
         *
         * In this case, the `memoize` of `factorial` is sufficient optimization, but the
         * example is simply to illustrate how to generate a unique key for an expensive,
         * multi-argument method.
         *
         * **IMPORTANT**: This cache is unbounded so be cautious of memory leaks if the
         * `memoize`d function is kept indefinitely or is given an unbounded set of
         * possible arguments.
         *
         * @param {Function} fn Function to wrap.
         * @param {Object} scope Optional scope in which to execute the wrapped function.
         * @param {Function} hashFn Optional function used to compute a hash key for
         * storing the result, based on the arguments to the original function.
         * @return {Function} The caching wrapper function.
         * @since 6.0.0
         */
            memoize: function(fn, scope, hashFn) {
                var memo = {},
                    isFunc = hashFn && Ext.isFunction(hashFn);
                return function(value) {
                    var key = isFunc ? hashFn.apply(scope, arguments) : value;
                    if (!(key in memo)) {
                        memo[key] = fn.apply(scope, arguments);
                    }
                    return memo[key];
                };
            },
            _stripCommentRe: /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/g,
            toCode: function(fn) {
                var s = fn ? fn.toString() : '';
                s = s.replace(ExtFunction._stripCommentRe, '');
                return s;
            }
        };
    // ExtFunction
    /**
     * @member Ext
     * @method asap
     * Schedules the specified callback function to be executed on the next turn of the
     * event loop. Where available, this method uses the browser's `setImmediate` API. If
     * not available, this method substitutes `setTimeout(0)`. Though not a perfect
     * replacement for `setImmediate` it is sufficient for many use cases.
     *
     * For more details see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate).
     *
     * @param {Function} fn Callback function.
     * @param {Object} [scope] The scope for the callback (`this` pointer).
     * @param {Mixed[]} [parameters] Additional parameters to pass to `fn`.
     * @return {Number} A cancelation id for `{@link Ext#asapCancel}`.
     */
    Ext.asap = hasImmediate ? function(fn, scope, parameters) {
        var boundFn = fn,
            timerFn;
        if (scope != null || parameters != null) {
            boundFn = ExtFunction.bind(fn, scope, parameters);
        }
        timerFn = function() {
            if (Ext.elevateFunction) {
                Ext.elevateFunction(boundFn);
            } else {
                boundFn();
            }
        };
        timerFn.$origFn = fn.$origFn ? fn.$origFn : fn;
        timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
        return setImmediate(timerFn);
    } : function(fn, scope, parameters) {
        var boundFn = fn,
            timerFn;
        if (scope != null || parameters != null) {
            boundFn = ExtFunction.bind(fn, scope, parameters);
        }
        timerFn = function() {
            if (Ext.elevateFunction) {
                Ext.elevateFunction(boundFn);
            } else {
                boundFn();
            }
        };
        timerFn.$origFn = fn.$origFn ? fn.$origFn : fn;
        timerFn.$skipTimerCheck = timerFn.$origFn.$skipTimerCheck;
        return setTimeout(timerFn, 0, true);
    } , /**
     * @member Ext
     * @method asapCancel
     * Cancels a previously scheduled call to `{@link Ext#asap}`.
     *
     *      var asapId = Ext.asap(me.method, me);
     *      ...
     *
     *      if (nevermind) {
     *          Ext.apasCancel(asapId);
     *      }
     *
     * @param {Number} id The id returned by `{@link Ext#asap}`.
     */
    Ext.asapCancel = hasImmediate ? function(id) {
        clearImmediate(id);
    } : function(id) {
        clearTimeout(id);
    };
    /**
     * @method defer
     * @member Ext
     * @inheritdoc Ext.Function#defer
     */
    Ext.defer = ExtFunction.defer;
    /**
     * @method interval
     * @member Ext
     * @inheritdoc Ext.Function#interval
     */
    Ext.interval = ExtFunction.interval;
    /**
     * @method pass
     * @member Ext
     * @inheritdoc Ext.Function#pass
     */
    Ext.pass = ExtFunction.pass;
    /**
     * @method bind
     * @member Ext
     * @inheritdoc Ext.Function#bind
     */
    Ext.bind = ExtFunction.bind;
    Ext.deferCallback = ExtFunction.requestAnimationFrame;
    Ext.raf = function() {
        return ExtFunction.requestAnimationFrame.apply(ExtFunction, arguments);
    };
    return ExtFunction;
})();

/**
 * @class Ext.Number
 *
 * A collection of useful static methods to deal with numbers
 * @singleton
 */
Ext.Number = (new function() {
    // jshint ignore:line
    // @define Ext.lang.Number
    // @define Ext.Number
    // @require Ext
    var ExtNumber = this,
        isToFixedBroken = (0.9).toFixed() !== '1',
        math = Math,
        ClipDefault = {
            count: false,
            inclusive: false,
            wrap: true
        };
    Ext.apply(ExtNumber, {
        MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER || -(math.pow(2, 53) - 1),
        MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || math.pow(2, 53) - 1,
        Clip: {
            DEFAULT: ClipDefault,
            COUNT: Ext.applyIf({
                count: true
            }, ClipDefault),
            INCLUSIVE: Ext.applyIf({
                inclusive: true
            }, ClipDefault),
            NOWRAP: Ext.applyIf({
                wrap: false
            }, ClipDefault)
        },
        binarySearch: function(array, value, begin, end) {
            if (begin === undefined) {
                begin = 0;
            }
            if (end === undefined) {
                end = array.length;
            }
            --end;
            var middle, midVal;
            while (begin <= end) {
                middle = (begin + end) >>> 1;
                // unsigned right shift = Math.floor(x/2)
                midVal = array[middle];
                if (value === midVal) {
                    return middle;
                }
                if (midVal < value) {
                    begin = middle + 1;
                } else {
                    end = middle - 1;
                }
            }
            return begin;
        },
        bisectTuples: function(array, value, index, begin, end) {
            if (begin === undefined) {
                begin = 0;
            }
            if (end === undefined) {
                end = array.length;
            }
            --end;
            var middle, midVal;
            while (begin <= end) {
                middle = (begin + end) >>> 1;
                // unsigned right shift = Math.floor(x/2)
                midVal = array[middle][index];
                if (value === midVal) {
                    return middle;
                }
                if (midVal < value) {
                    begin = middle + 1;
                } else {
                    end = middle - 1;
                }
            }
            return begin;
        },
        /**
         * Coerces a given index into a valid index given a `length`.
         *
         * Negative indexes are interpreted starting at the end of the collection. That is,
         * a value of -1 indicates the last item, or equivalent to `length - 1`.
         *
         * When handling methods that take "begin" and "end" arguments like most array or
         * string methods, this method can be used like so:
         *
         *      function foo (array, begin, end) {
         *          var range = Ext.Number.clipIndices(array.length, [begin, end]);
         *
         *          begin = range[0];
         *          end   = range[1];
         *
         *          // 0 <= begin <= end <= array.length
         *
         *          var length = end - begin;
         *      }
         *
         * For example:
         *
         *      +---+---+---+---+---+---+---+---+
         *      |   |   |   |   |   |   |   |   |  length = 8
         *      +---+---+---+---+---+---+---+---+
         *        0   1   2   3   4   5   6   7
         *       -8  -7  -6  -5  -4  -3  -2  -1
         *
         *      console.log(Ext.Number.clipIndices(8, [3, 10]); // logs "[3, 8]"
         *      console.log(Ext.Number.clipIndices(8, [-5]);    // logs "[3, 8]"
         *      console.log(Ext.Number.clipIndices(8, []);
         *      console.log(Ext.Number.clipIndices(8, []);
         *
         * @param {Number} length
         * @param {Number[]} indices
         * @param {Object} [options] An object with different option flags.
         * @param {Boolean} [options.count=false] The second number in `indices` is the
         * count not and an index.
         * @param {Boolean} [options.inclusive=false] The second number in `indices` is
         * "inclusive" meaning that the item should be considered in the range. Normally,
         * the second number is considered the first item outside the range or as an
         * "exclusive" bound.
         * @param {Boolean} [options.wrap=true] Wraps negative numbers backwards from the
         * end of the array. Passing `false` simply clips negative index values at 0.
         * @return {Number[]} The normalized `[begin, end]` array where `end` is now
         * exclusive such that `length = end - begin`. Both values are between 0 and the
         * given `length` and `end` will not be less-than `begin`.
         */
        clipIndices: function(length, indices, options) {
            options = options || ClipDefault;
            var defaultValue = 0,
                // default value for "begin"
                wrap = options.wrap,
                begin, end, i;
            indices = indices || [];
            for (i = 0; i < 2; ++i) {
                // names are off on first pass but used this way so things make sense
                // following the loop..
                begin = end;
                // pick up and keep the result from the first loop
                end = indices[i];
                if (end == null) {
                    end = defaultValue;
                } else if (i && options.count) {
                    end += begin;
                    // this is the length not "end" so convert to "end"
                    end = (end > length) ? length : end;
                } else {
                    if (wrap) {
                        end = (end < 0) ? (length + end) : end;
                    }
                    if (i && options.inclusive) {
                        ++end;
                    }
                    end = (end < 0) ? 0 : ((end > length) ? length : end);
                }
                defaultValue = length;
            }
            // default value for "end"
            // after loop:
            // 0 <= begin <= length  (calculated from indices[0])
            // 0 <= end <= length    (calculated from indices[1])
            indices[0] = begin;
            indices[1] = (end < begin) ? begin : end;
            return indices;
        },
        /**
         * Checks whether or not the passed number is within a desired range.  If the number is already within the
         * range it is returned, otherwise the min or max value is returned depending on which side of the range is
         * exceeded. Note that this method returns the constrained value but does not change the current number.
         * @param {Number} number The number to check
         * @param {Number} min The minimum number in the range
         * @param {Number} max The maximum number in the range
         * @return {Number} The constrained value if outside the range, otherwise the current value
         */
        constrain: function(number, min, max) {
            var x = parseFloat(number);
            // (x < Nan) || (x < undefined) == false
            // same for (x > NaN) || (x > undefined)
            // sadly this is not true of null - (1 > null)
            if (min === null) {
                min = number;
            }
            if (max === null) {
                max = number;
            }
            // Watch out for NaN in Chrome 18
            // V8bug: http://code.google.com/p/v8/issues/detail?id=2056
            // Operators are faster than Math.min/max. See http://jsperf.com/number-constrain
            return (x < min) ? min : ((x > max) ? max : x);
        },
        /**
         * Snaps the passed number between stopping points based upon a passed increment value.
         *
         * The difference between this and {@link #snapInRange} is that {@link #snapInRange} uses the minValue
         * when calculating snap points:
         *
         *     r = Ext.Number.snap(56, 2, 55, 65);        // Returns 56 - snap points are zero based
         *
         *     r = Ext.Number.snapInRange(56, 2, 55, 65); // Returns 57 - snap points are based from minValue
         *
         * @param {Number} value The unsnapped value.
         * @param {Number} increment The increment by which the value must move.
         * @param {Number} minValue The minimum value to which the returned value must be constrained. Overrides the increment.
         * @param {Number} maxValue The maximum value to which the returned value must be constrained. Overrides the increment.
         * @return {Number} The value of the nearest snap target.
         */
        snap: function(value, increment, minValue, maxValue) {
            var m;
            // If no value passed, or minValue was passed and value is less than minValue (anything < undefined is false)
            // Then use the minValue (or zero if the value was undefined)
            if (value === undefined || value < minValue) {
                return minValue || 0;
            }
            if (increment) {
                m = value % increment;
                if (m !== 0) {
                    value -= m;
                    if (m * 2 >= increment) {
                        value += increment;
                    } else if (m * 2 < -increment) {
                        value -= increment;
                    }
                }
            }
            return ExtNumber.constrain(value, minValue, maxValue);
        },
        /**
         * Snaps the passed number between stopping points based upon a passed increment value.
         *
         * The difference between this and {@link #snap} is that {@link #snap} does not use the minValue
         * when calculating snap points:
         *
         *     r = Ext.Number.snap(56, 2, 55, 65);        // Returns 56 - snap points are zero based
         *
         *     r = Ext.Number.snapInRange(56, 2, 55, 65); // Returns 57 - snap points are based from minValue
         *
         * @param {Number} value The unsnapped value.
         * @param {Number} increment The increment by which the value must move.
         * @param {Number} [minValue=0] The minimum value to which the returned value must be constrained.
         * @param {Number} [maxValue=Infinity] The maximum value to which the returned value must be constrained.
         * @return {Number} The value of the nearest snap target.
         */
        snapInRange: function(value, increment, minValue, maxValue) {
            var tween;
            // default minValue to zero
            minValue = (minValue || 0);
            // If value is undefined, or less than minValue, use minValue
            if (value === undefined || value < minValue) {
                return minValue;
            }
            // Calculate how many snap points from the minValue the passed value is.
            if (increment && (tween = ((value - minValue) % increment))) {
                value -= tween;
                tween *= 2;
                if (tween >= increment) {
                    value += increment;
                }
            }
            // If constraining within a maximum, ensure the maximum is on a snap point
            if (maxValue !== undefined) {
                if (value > (maxValue = ExtNumber.snapInRange(maxValue, increment, minValue))) {
                    value = maxValue;
                }
            }
            return value;
        },
        /**
         * Round a number to the nearest interval.
         * @param {Number} value The value to round.
         * @param {Number} interval The interval to round to.
         * @return {Number} The rounded value.
         *
         * @since 6.2.0
         */
        roundToNearest: function(value, interval) {
            interval = interval || 1;
            return interval * math.round(value / interval);
        },
        roundToPrecision: function(value, precision) {
            var factor = math.pow(10, precision || 1);
            return math.round(value * factor) / factor;
        },
        /**
         * Returns the sign of the given number. See also MDN for Math.sign documentation
         * for the standard method this method emulates.
         * @param {Number} x The number.
         * @return {Number} The sign of the number `x`, indicating whether the number is
         * positive (1), negative (-1) or zero (0).
         * @method sign
         */
        sign: math.sign || function(x) {
            x = +x;
            // force to a Number
            if (x === 0 || isNaN(x)) {
                return x;
            }
            return (x > 0) ? 1 : -1;
        },
        /**
         * Returns the base 10 logarithm of a number.
         * This will use Math.log10, if available (ES6).
         * @param {Number} x The number.
         * @return {Number} Base 10 logarithm of the number 'x'.
         * @method log10
         */
        log10: math.log10 || function(x) {
            return math.log(x) * math.LOG10E;
        },
        /**
         * Determines if two numbers `n1` and `n2` are equal within a given
         * margin of precision `epsilon`.
         * @param {Number} n1 First number.
         * @param {Number} n2 Second number.
         * @param {Number} epsilon Margin of precision.
         * @returns {Boolean} `true`, if numbers are equal. `false` otherwise.
         */
        isEqual: function(n1, n2, epsilon) {
            if (!(typeof n1 === 'number' && typeof n2 === 'number' && typeof epsilon === 'number')) {
                Ext.raise("All parameters should be valid numbers.");
            }
            return math.abs(n1 - n2) < epsilon;
        },
        /**
         * Determines if the value passed is a number and also finite.
         * This a Polyfill version of Number.isFinite(),differently than 
         * the isFinite() function, this method doesn't convert the parameter to a number.
         * @param {Number} value Number to be tested.
         * @returns {Boolean} `true`, if the parameter is a number and finite, `false` otherwise.
         * @since 6.2
         */
        isFinite: Number.isFinite || function(value) {
            return typeof value === 'number' && isFinite(value);
        },
        isInteger: Number.isInteger || function(value) {
            // Add zero get a valid result in a special case where the value is a number string.
            // E.g. '10' + 0 is '100'.
            return ~~(value + 0) === value;
        },
        /**
         * @method
         * Formats a number using fixed-point notation
         * @param {Number} value The number to format
         * @param {Number} precision The number of digits to show after the decimal point
         */
        toFixed: isToFixedBroken ? function(value, precision) {
            precision = precision || 0;
            var pow = math.pow(10, precision);
            return (math.round(value * pow) / pow).toFixed(precision);
        } : function(value, precision) {
            return value.toFixed(precision);
        },
        /**
         * Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if
         * it is not.

    Ext.Number.from('1.23', 1); // returns 1.23
    Ext.Number.from('abc', 1); // returns 1

         * @param {Object} value
         * @param {Number} defaultValue The value to return if the original value is non-numeric
         * @return {Number} value, if numeric, defaultValue otherwise
         */
        from: function(value, defaultValue) {
            if (isFinite(value)) {
                value = parseFloat(value);
            }
            return !isNaN(value) ? value : defaultValue;
        },
        /**
         * Returns a random integer between the specified range (inclusive)
         * @param {Number} from Lowest value to return.
         * @param {Number} to Highest value to return.
         * @return {Number} A random integer within the specified range.
         */
        randomInt: function(from, to) {
            return math.floor(math.random() * (to - from + 1) + from);
        },
        /**
         * Corrects floating point numbers that overflow to a non-precise
         * value because of their floating nature, for example `0.1 + 0.2`
         * @param {Number} n The number
         * @return {Number} The correctly rounded number
         */
        correctFloat: function(n) {
            // This is to correct the type of errors where 2 floats end with
            // a long string of decimals, eg 0.1 + 0.2. When they overflow in this
            // manner, they usually go to 15-16 decimals, so we cut it off at 14.
            return parseFloat(n.toPrecision(14));
        }
    });
    /**
     * @deprecated 4.0.0 Please use {@link Ext.Number#from} instead.
     * @member Ext
     * @method num
     * @inheritdoc Ext.Number#from
     */
    Ext.num = function() {
        return ExtNumber.from.apply(this, arguments);
    };
}());

/**
 * @class Ext.Object
 *
 * A collection of useful static methods to deal with objects.
 *
 * @singleton
 */
(function() {
    // The "constructor" for chain:
    var TemplateClass = function() {},
        queryRe = /^\?/,
        keyRe = /(\[):?([^\]]*)\]/g,
        nameRe = /^([^\[]+)/,
        plusRe = /\+/g,
        ExtObject = Ext.Object = {
            // @define Ext.lang.Object
            // @define Ext.Object
            // @require Ext
            // @require Ext.lang.Date
            /**
     * @method
     * Returns a new object with the given object as the prototype chain. This method is
     * designed to mimic the ECMA standard `Object.create` method and is assigned to that
     * function when it is available.
     * 
     * **NOTE** This method does not support the property definitions capability of the
     * `Object.create` method. Only the first argument is supported.
     * 
     * @param {Object} object The prototype chain for the new object.
     */
            chain: Object.create || function(object) {
                TemplateClass.prototype = object;
                var result = new TemplateClass();
                TemplateClass.prototype = null;
                return result;
            },
            /**
     * This method removes all keys from the given object.
     * @param {Object} object The object from which to remove all keys.
     * @return {Object} The given object.
     */
            clear: function(object) {
                // Safe to delete during iteration
                for (var key in object) {
                    delete object[key];
                }
                return object;
            },
            /**
     * Freezes the given object making it immutable. This operation is by default shallow
     * and does not effect objects referenced by the given object.
     * 
     * @method
     * @param {Object} obj The object to freeze.
     * @param {Boolean} [deep=false] Pass `true` to freeze sub-objects recursively.
     * @return {Object} The given object `obj`.
     */
            freeze: Object.freeze ? function(obj, deep) {
                if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
                    Object.freeze(obj);
                    if (deep) {
                        for (var name in obj) {
                            ExtObject.freeze(obj[name], deep);
                        }
                    }
                }
                return obj;
            } : Ext.identityFn,
            /**
     * Converts a `name` - `value` pair to an array of objects with support for nested structures. Useful to construct
     * query strings. For example:
     *
     *     var objects = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
     *
     *     // objects then equals:
     *     [
     *         { name: 'hobbies', value: 'reading' },
     *         { name: 'hobbies', value: 'cooking' },
     *         { name: 'hobbies', value: 'swimming' },
     *     ];
     *
     *     var objects = Ext.Object.toQueryObjects('dateOfBirth', {
     *         day: 3,
     *         month: 8,
     *         year: 1987,
     *         extra: {
     *             hour: 4
     *             minute: 30
     *         }
     *     }, true); // Recursive
     *
     *     // objects then equals:
     *     [
     *         { name: 'dateOfBirth[day]', value: 3 },
     *         { name: 'dateOfBirth[month]', value: 8 },
     *         { name: 'dateOfBirth[year]', value: 1987 },
     *         { name: 'dateOfBirth[extra][hour]', value: 4 },
     *         { name: 'dateOfBirth[extra][minute]', value: 30 },
     *     ];
     *
     * @param {String} name
     * @param {Object/Array} value
     * @param {Boolean} [recursive=false] True to traverse object recursively
     * @return {Object[]}
     */
            toQueryObjects: function(name, value, recursive) {
                var self = ExtObject.toQueryObjects,
                    objects = [],
                    i, ln;
                if (Ext.isArray(value)) {
                    for (i = 0 , ln = value.length; i < ln; i++) {
                        if (recursive) {
                            objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                        } else {
                            objects.push({
                                name: name,
                                value: value[i]
                            });
                        }
                    }
                } else if (Ext.isObject(value)) {
                    for (i in value) {
                        if (value.hasOwnProperty(i)) {
                            if (recursive) {
                                objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                            } else {
                                objects.push({
                                    name: name,
                                    value: value[i]
                                });
                            }
                        }
                    }
                } else {
                    objects.push({
                        name: name,
                        value: value
                    });
                }
                return objects;
            },
            /**
     * Takes an object and converts it to an encoded query string.
     *
     * Non-recursive:
     *
     *     Ext.Object.toQueryString({foo: 1, bar: 2}); // returns "foo=1&bar=2"
     *     Ext.Object.toQueryString({foo: null, bar: 2}); // returns "foo=&bar=2"
     *     Ext.Object.toQueryString({'some price': '$300'}); // returns "some%20price=%24300"
     *     Ext.Object.toQueryString({date: new Date(2011, 0, 1)}); // returns "date=%222011-01-01T00%3A00%3A00%22"
     *     Ext.Object.toQueryString({colors: ['red', 'green', 'blue']}); // returns "colors=red&colors=green&colors=blue"
     *
     * Recursive:
     *
     *     Ext.Object.toQueryString({
     *         username: 'Jacky',
     *         dateOfBirth: {
     *             day: 1,
     *             month: 2,
     *             year: 1911
     *         },
     *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
     *     }, true); // returns the following string (broken down and url-decoded for ease of reading purpose):
     *     // username=Jacky
     *     //    &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
     *     //    &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
     *
     * @param {Object} object The object to encode
     * @param {Boolean} [recursive=false] Whether or not to interpret the object in recursive format.
     * (PHP / Ruby on Rails servers and similar).
     * @return {String} queryString
     */
            toQueryString: function(object, recursive) {
                var paramObjects = [],
                    params = [],
                    i, j, ln, paramObject, value;
                for (i in object) {
                    if (object.hasOwnProperty(i)) {
                        paramObjects = paramObjects.concat(ExtObject.toQueryObjects(i, object[i], recursive));
                    }
                }
                for (j = 0 , ln = paramObjects.length; j < ln; j++) {
                    paramObject = paramObjects[j];
                    value = paramObject.value;
                    if (Ext.isEmpty(value)) {
                        value = '';
                    } else if (Ext.isDate(value)) {
                        value = Ext.Date.toString(value);
                    }
                    params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
                }
                return params.join('&');
            },
            /**
     * Converts a query string back into an object.
     *
     * Non-recursive:
     *
     *     Ext.Object.fromQueryString("foo=1&bar=2"); // returns {foo: '1', bar: '2'}
     *     Ext.Object.fromQueryString("foo=&bar=2"); // returns {foo: '', bar: '2'}
     *     Ext.Object.fromQueryString("some%20price=%24300"); // returns {'some price': '$300'}
     *     Ext.Object.fromQueryString("colors=red&colors=green&colors=blue"); // returns {colors: ['red', 'green', 'blue']}
     *
     * Recursive:
     *
     *     Ext.Object.fromQueryString(
     *         "username=Jacky&"+
     *         "dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&"+
     *         "hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&"+
     *         "hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
     *
     *     // returns
     *     {
     *         username: 'Jacky',
     *         dateOfBirth: {
     *             day: '1',
     *             month: '2',
     *             year: '1911'
     *         },
     *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
     *     }
     *
     * @param {String} queryString The query string to decode
     * @param {Boolean} [recursive=false] Whether or not to recursively decode the string. This format is supported by
     * PHP / Ruby on Rails servers and similar.
     * @return {Object}
     */
            fromQueryString: function(queryString, recursive) {
                var parts = queryString.replace(queryRe, '').split('&'),
                    object = {},
                    temp, components, name, value, i, ln, part, j, subLn, matchedKeys, matchedName, keys, key, nextKey;
                for (i = 0 , ln = parts.length; i < ln; i++) {
                    part = parts[i];
                    if (part.length > 0) {
                        components = part.split('=');
                        name = components[0];
                        name = name.replace(plusRe, '%20');
                        name = decodeURIComponent(name);
                        value = components[1];
                        if (value !== undefined) {
                            value = value.replace(plusRe, '%20');
                            value = decodeURIComponent(value);
                        } else {
                            value = '';
                        }
                        if (!recursive) {
                            if (object.hasOwnProperty(name)) {
                                if (!Ext.isArray(object[name])) {
                                    object[name] = [
                                        object[name]
                                    ];
                                }
                                object[name].push(value);
                            } else {
                                object[name] = value;
                            }
                        } else {
                            matchedKeys = name.match(keyRe);
                            matchedName = name.match(nameRe);
                            if (!matchedName) {
                                throw new Error('[Ext.Object.fromQueryString] Malformed query string given, failed parsing name from "' + part + '"');
                            }
                            name = matchedName[0];
                            keys = [];
                            if (matchedKeys === null) {
                                object[name] = value;
                                
                                continue;
                            }
                            for (j = 0 , subLn = matchedKeys.length; j < subLn; j++) {
                                key = matchedKeys[j];
                                key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                                keys.push(key);
                            }
                            keys.unshift(name);
                            temp = object;
                            for (j = 0 , subLn = keys.length; j < subLn; j++) {
                                key = keys[j];
                                if (j === subLn - 1) {
                                    if (Ext.isArray(temp) && key === '') {
                                        temp.push(value);
                                    } else {
                                        temp[key] = value;
                                    }
                                } else {
                                    if (temp[key] === undefined || typeof temp[key] === 'string') {
                                        nextKey = keys[j + 1];
                                        temp[key] = (Ext.isNumeric(nextKey) || nextKey === '') ? [] : {};
                                    }
                                    temp = temp[key];
                                }
                            }
                        }
                    }
                }
                return object;
            },
            /**
     * Iterates through an object and invokes the given callback function for each iteration.
     * The iteration can be stopped by returning `false` in the callback function. For example:
     *
     *     var person = {
     *         name: 'Jacky'
     *         hairColor: 'black'
     *         loves: ['food', 'sleeping', 'wife']
     *     };
     *
     *     Ext.Object.each(person, function(key, value, myself) {
     *         console.log(key + ":" + value);
     *
     *         if (key === 'hairColor') {
     *             return false; // stop the iteration
     *         }
     *     });
     *
     * @param {Object} object The object to iterate
     * @param {Function} fn The callback function.
     * @param {String} fn.key
     * @param {Object} fn.value
     * @param {Object} fn.object The object itself
     * @param {Object} [scope] The execution scope (`this`) of the callback function
     */
            each: function(object, fn, scope) {
                var enumerables = Ext.enumerables,
                    i, property;
                if (object) {
                    scope = scope || object;
                    for (property in object) {
                        if (object.hasOwnProperty(property)) {
                            if (fn.call(scope, property, object[property], object) === false) {
                                return;
                            }
                        }
                    }
                    if (enumerables) {
                        for (i = enumerables.length; i--; ) {
                            if (object.hasOwnProperty(property = enumerables[i])) {
                                if (fn.call(scope, property, object[property], object) === false) {
                                    return;
                                }
                            }
                        }
                    }
                }
            },
            /**
     * Iterates through an object and invokes the given callback function for each iteration.
     * The iteration can be stopped by returning `false` in the callback function. For example:
     *
     *     var items = {
     *         1: 'Hello',
     *         2: 'World'
     *     };
     *
     *     Ext.Object.eachValue(items, function (value) {
     *         console.log("Value: " + value);
     *     });
     *
     * This will log 'Hello' and 'World' in no particular order. This method is useful
     * in cases where the keys are not important to the processing, just the values.
     *
     * @param {Object} object The object to iterate
     * @param {Function} fn The callback function.
     * @param {Object} fn.value The value of
     * @param {Object} [scope] The execution scope (`this`) of the callback function
     */
            eachValue: function(object, fn, scope) {
                var enumerables = Ext.enumerables,
                    i, property;
                scope = scope || object;
                for (property in object) {
                    if (object.hasOwnProperty(property)) {
                        if (fn.call(scope, object[property]) === false) {
                            return;
                        }
                    }
                }
                if (enumerables) {
                    for (i = enumerables.length; i--; ) {
                        if (object.hasOwnProperty(property = enumerables[i])) {
                            if (fn.call(scope, object[property]) === false) {
                                return;
                            }
                        }
                    }
                }
            },
            /**
     * Merges any number of objects recursively without referencing them or their children.
     *
     *     var extjs = {
     *         companyName: 'Ext JS',
     *         products: ['Ext JS', 'Ext GWT', 'Ext Designer'],
     *         isSuperCool: true,
     *         office: {
     *             size: 2000,
     *             location: 'Palo Alto',
     *             isFun: true
     *         }
     *     };
     *
     *     var newStuff = {
     *         companyName: 'Sencha Inc.',
     *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
     *         office: {
     *             size: 40000,
     *             location: 'Redwood City'
     *         }
     *     };
     *
     *     var sencha = Ext.Object.merge(extjs, newStuff);
     *
     *     // extjs and sencha then equals to
     *     {
     *         companyName: 'Sencha Inc.',
     *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
     *         isSuperCool: true,
     *         office: {
     *             size: 40000,
     *             location: 'Redwood City',
     *             isFun: true
     *         }
     *     }
     *
     * @param {Object} destination The object into which all subsequent objects are merged.
     * @param {Object...} object Any number of objects to merge into the destination.
     * @return {Object} merged The destination object with all passed objects merged in.
     */
            merge: function(destination) {
                var i = 1,
                    ln = arguments.length,
                    mergeFn = ExtObject.merge,
                    cloneFn = Ext.clone,
                    object, key, value, sourceKey;
                for (; i < ln; i++) {
                    object = arguments[i];
                    for (key in object) {
                        value = object[key];
                        if (value && value.constructor === Object) {
                            sourceKey = destination[key];
                            if (sourceKey && sourceKey.constructor === Object) {
                                mergeFn(sourceKey, value);
                            } else {
                                destination[key] = cloneFn(value);
                            }
                        } else {
                            destination[key] = value;
                        }
                    }
                }
                return destination;
            },
            /**
     * @private
     * @param destination
     */
            mergeIf: function(destination) {
                var i = 1,
                    ln = arguments.length,
                    cloneFn = Ext.clone,
                    object, key, value;
                for (; i < ln; i++) {
                    object = arguments[i];
                    for (key in object) {
                        if (!(key in destination)) {
                            value = object[key];
                            if (value && value.constructor === Object) {
                                destination[key] = cloneFn(value);
                            } else {
                                destination[key] = value;
                            }
                        }
                    }
                }
                return destination;
            },
            /**
     * Returns all keys of the given object as an array.
     *
     * @param {Object} object
     * @return {String[]} An array of keys from the object or any of its prototypes.
     * @method
     */
            getAllKeys: function(object) {
                var keys = [],
                    property;
                for (property in object) {
                    keys.push(property);
                }
                return keys;
            },
            /**
     * Returns the first matching key corresponding to the given value.
     * If no matching value is found, null is returned.
     *
     *     var person = {
     *         name: 'Jacky',
     *         loves: 'food'
     *     };
     *
     *     alert(Ext.Object.getKey(person, 'food')); // alerts 'loves'
     *
     * @param {Object} object
     * @param {Object} value The value to find
     */
            getKey: function(object, value) {
                for (var property in object) {
                    if (object.hasOwnProperty(property) && object[property] === value) {
                        return property;
                    }
                }
                return null;
            },
            /**
     * Gets all values of the given object as an array.
     *
     *     var values = Ext.Object.getValues({
     *         name: 'Jacky',
     *         loves: 'food'
     *     }); // ['Jacky', 'food']
     *
     * @param {Object} object
     * @return {Array} An array of values from the object
     */
            getValues: function(object) {
                var values = [],
                    property;
                for (property in object) {
                    if (object.hasOwnProperty(property)) {
                        values.push(object[property]);
                    }
                }
                return values;
            },
            /**
     * Returns the `hasOwnProperty` keys of the given object as an array.
     *
     *     var values = Ext.Object.getKeys({
     *         name: 'Jacky',
     *         loves: 'food'
     *     }); // ['name', 'loves']
     *
     * @param {Object} object
     * @return {String[]} An array of keys from the object
     * @method
     */
            getKeys: (typeof Object.keys == 'function') ? function(object) {
                if (!object) {
                    return [];
                }
                return Object.keys(object);
            } : function(object) {
                var keys = [],
                    property;
                for (property in object) {
                    if (object.hasOwnProperty(property)) {
                        keys.push(property);
                    }
                }
                return keys;
            },
            /**
     * Gets the total number of this object's own properties
     *
     *     var size = Ext.Object.getSize({
     *         name: 'Jacky',
     *         loves: 'food'
     *     }); // size equals 2
     *
     * @param {Object} object
     * @return {Number} size
     */
            getSize: function(object) {
                var size = 0,
                    property;
                for (property in object) {
                    if (object.hasOwnProperty(property)) {
                        size++;
                    }
                }
                return size;
            },
            /**
     * Checks if there are any properties on this object.
     * @param {Object} object
     * @return {Boolean} `true` if there no properties on the object.
     */
            isEmpty: function(object) {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        return false;
                    }
                }
                return true;
            },
            /**
     * @method
     * Shallow compares the contents of 2 objects using strict equality. Objects are
     * considered equal if they both have the same set of properties and the
     * value for those properties equals the other in the corresponding object.
     * 
     *     // Returns true
     *     Ext.Object.equals({
     *         foo: 1,
     *         bar: 2
     *     }, {
     *         foo: 1,
     *         bar: 2
     *     });
     * 
     * @param {Object} object1
     * @param {Object} object2
     * @return {Boolean} `true` if the objects are equal.
     */
            equals: (function() {
                var check = function(o1, o2) {
                        var key;
                        for (key in o1) {
                            if (o1.hasOwnProperty(key)) {
                                if (o1[key] !== o2[key]) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    };
                return function(object1, object2) {
                    // Short circuit if the same object is passed twice
                    if (object1 === object2) {
                        return true;
                    }
                    if (object1 && object2) {
                        // Do the second check because we could have extra keys in
                        // object2 that don't exist in object1.
                        return check(object1, object2) && check(object2, object1);
                    } else if (!object1 && !object2) {
                        return object1 === object2;
                    } else {
                        return false;
                    }
                };
            })(),
            /**
     * @private
     */
            fork: function(obj) {
                var ret, key, value;
                if (obj && obj.constructor === Object) {
                    ret = ExtObject.chain(obj);
                    for (key in obj) {
                        value = obj[key];
                        if (value) {
                            if (value.constructor === Object) {
                                ret[key] = ExtObject.fork(value);
                            } else if (value instanceof Array) {
                                ret[key] = Ext.Array.clone(value);
                            }
                        }
                    }
                } else {
                    ret = obj;
                }
                return ret;
            },
            defineProperty: ('defineProperty' in Object) ? Object.defineProperty : function(object, name, descriptor) {
                if (!Object.prototype.__defineGetter__) {
                    return;
                }
                if (descriptor.get) {
                    object.__defineGetter__(name, descriptor.get);
                }
                if (descriptor.set) {
                    object.__defineSetter__(name, descriptor.set);
                }
            },
            /**
     * @private
     */
            classify: function(object) {
                var prototype = object,
                    objectProperties = [],
                    propertyClassesMap = {},
                    objectClass = function() {
                        var i = 0,
                            ln = objectProperties.length,
                            property;
                        for (; i < ln; i++) {
                            property = objectProperties[i];
                            this[property] = new propertyClassesMap[property]();
                        }
                    },
                    key, value;
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        value = object[key];
                        if (value && value.constructor === Object) {
                            objectProperties.push(key);
                            propertyClassesMap[key] = ExtObject.classify(value);
                        }
                    }
                }
                objectClass.prototype = prototype;
                return objectClass;
            }
        };
    /**
 * A convenient alias method for {@link Ext.Object#merge}.
 *
 * @member Ext
 * @method merge
 * @inheritdoc Ext.Object#merge
 */
    Ext.merge = Ext.Object.merge;
    /**
 * @private
 * @member Ext
 */
    Ext.mergeIf = Ext.Object.mergeIf;
}());

/*
 * This file contains miscellaneous utility methods that depends on various helper classes
 * like `Ext.Array` and `Ext.Date`. Historically these methods were defined in Ext.js or
 * Ext-more.js but that creates circular dependencies so they were consolidated here.
 */
Ext.apply(Ext, {
    // @define Ext.Util
    // @require Ext
    // @require Ext.lang.*
    // shortcut for the special named scopes for listener scope resolution
    _namedScopes: {
        'this': {
            isThis: 1
        },
        controller: {
            isController: 1
        },
        owner: {
            isOwner: 1
        },
        // these two are private, used to indicate that listeners were declared on the
        // class body with either an unspecified scope, or scope:'controller'
        self: {
            isSelf: 1
        },
        'self.controller': {
            isSelf: 1,
            isController: 1
        }
    },
    escapeId: (function() {
        var validIdRe = /^[a-zA-Z_][a-zA-Z0-9_\-]*$/i,
            escapeRx = /([\W]{1})/g,
            leadingNumRx = /^(\d)/g,
            escapeFn = function(match, capture) {
                return "\\" + capture;
            },
            numEscapeFn = function(match, capture) {
                return '\\00' + capture.charCodeAt(0).toString(16) + ' ';
            };
        return function(id) {
            return validIdRe.test(id) ? id : // replace the number portion last to keep the trailing ' '
            // from being escaped
            id.replace(escapeRx, escapeFn).replace(leadingNumRx, numEscapeFn);
        };
    }()),
    /**
     * @method callback
     * @member Ext
     * Execute a callback function in a particular scope. If `callback` argument is a
     * function reference, that is called. If it is a string, the string is assumed to
     * be the name of a method on the given `scope`. If no function is passed the call
     * is ignored.
     *
     * For example, these calls are equivalent:
     *
     *      var myFunc = this.myFunc;
     *
     *      Ext.callback('myFunc', this, [arg1, arg2]);
     *      Ext.callback(myFunc, this, [arg1, arg2]);
     *
     *      Ext.isFunction(myFunc) && this.myFunc(arg1, arg2);
     *
     * @param {Function/String} callback The callback function to execute or the name of
     * the callback method on the provided `scope`.
     * @param {Object} [scope] The scope in which `callback` should be invoked. If `callback`
     * is a string this object provides the method by that name. If this is `null` then
     * the `caller` is used to resolve the scope to a `ViewController` or the proper
     * `defaultListenerScope`.
     * @param {Array} [args] The arguments to pass to the function.
     * @param {Number} [delay] Pass a number to delay the call by a number of milliseconds.
     * @param {Object} [caller] The object calling the callback. This is used to resolve
     * named methods when no explicit `scope` is provided.
     * @param {Object} [defaultScope=caller] The default scope to return if none is found.
     * @return The value returned by the callback or `undefined` (if there is a `delay`
     * or if the `callback` is not a function).
     */
    callback: function(callback, scope, args, delay, caller, defaultScope) {
        if (!callback) {
            return;
        }
        var namedScope = (scope in Ext._namedScopes);
        if (callback.charAt) {
            // if (isString(fn))
            if ((!scope || namedScope) && caller) {
                scope = caller.resolveListenerScope(namedScope ? scope : defaultScope);
            }
            if (!scope || !Ext.isObject(scope)) {
                Ext.raise('Named method "' + callback + '" requires a scope object');
            }
            if (!Ext.isFunction(scope[callback])) {
                Ext.raise('No method named "' + callback + '" on ' + (scope.$className || 'scope object'));
            }
            callback = scope[callback];
        } else if (namedScope) {
            scope = defaultScope || caller;
        } else if (!scope) {
            scope = caller;
        }
        var ret;
        if (callback && Ext.isFunction(callback)) {
            scope = scope || Ext.global;
            if (delay) {
                Ext.defer(callback, delay, scope, args);
            } else if (Ext.elevateFunction) {
                ret = Ext.elevateFunction(callback, scope, args);
            } else if (args) {
                ret = callback.apply(scope, args);
            } else {
                ret = callback.call(scope);
            }
        }
        return ret;
    },
    /**
     * @method coerce
     * @member Ext
     * Coerces the first value if possible so that it is comparable to the second value.
     *
     * Coercion only works between the basic atomic data types String, Boolean, Number, Date, null and undefined.
     *
     * Numbers and numeric strings are coerced to Dates using the value as the millisecond era value.
     *
     * Strings are coerced to Dates by parsing using the {@link Ext.Date#defaultFormat defaultFormat}.
     *
     * For example
     *
     *     Ext.coerce('false', true);
     *
     * returns the boolean value `false` because the second parameter is of type `Boolean`.
     *
     * @param {Mixed} from The value to coerce
     * @param {Mixed} to The value it must be compared against
     * @return The coerced value.
     */
    coerce: function(from, to) {
        var fromType = Ext.typeOf(from),
            toType = Ext.typeOf(to),
            isString = typeof from === 'string';
        if (fromType !== toType) {
            switch (toType) {
                case 'string':
                    return String(from);
                case 'number':
                    return Number(from);
                case 'boolean':
                    // See http://ecma262-5.com/ELS5_HTML.htm#Section_11.9.3 as to why '0'.
                    // TL;DR => ('0' == 0), so if given string '0', we must return boolean false.
                    return isString && (!from || from === 'false' || from === '0') ? false : Boolean(from);
                case 'null':
                    return isString && (!from || from === 'null') ? null : false;
                case 'undefined':
                    return isString && (!from || from === 'undefined') ? undefined : false;
                case 'date':
                    return isString && isNaN(from) ? Ext.Date.parse(from, Ext.Date.defaultFormat) : Date(Number(from));
            }
        }
        return from;
    },
    /**
     * @method copyTo
     * @member Ext
     * Copies a set of named properties fom the source object to the destination object.
     *
     * Example:
     *
     *     var foo = { a: 1, b: 2, c: 3 };
     *
     *     var bar = Ext.copyTo({}, foo, 'a,c');
     *     // bar = { a: 1, c: 3 };
     *
     * Important note: To borrow class prototype methods, use {@link Ext.Base#borrow} instead.
     *
     * @param {Object} dest The destination object.
     * @param {Object} source The source object.
     * @param {String/String[]} names Either an Array of property names, or a comma-delimited list
     * of property names to copy.
     * @param {Boolean} [usePrototypeKeys=false] Pass `true` to copy keys off of the
     * prototype as well as the instance.
     * @return {Object} The `dest` object.
     * @deprecated 6.0.1 Use {@link Ext#copy Ext.copy} instead. This old method
     * would copy the named preoperties even if they did not exist in the source which
     * could produce `undefined` values in the destination.
     */
    copyTo: function(dest, source, names, usePrototypeKeys) {
        if (typeof names === 'string') {
            names = names.split(Ext.propertyNameSplitRe);
        }
        for (var name,
            i = 0,
            n = names ? names.length : 0; i < n; i++) {
            name = names[i];
            if (usePrototypeKeys || source.hasOwnProperty(name)) {
                dest[name] = source[name];
            }
        }
        return dest;
    },
    /**
     * @method copy
     * @member Ext
     * Copies a set of named properties fom the source object to the destination object.
     *
     * Example:
     *
     *     var foo = { a: 1, b: 2, c: 3 };
     *
     *     var bar = Ext.copy({}, foo, 'a,c');
     *     // bar = { a: 1, c: 3 };
     *
     * Important note: To borrow class prototype methods, use {@link Ext.Base#borrow} instead.
     *
     * @param {Object} dest The destination object.
     * @param {Object} source The source object.
     * @param {String/String[]} names Either an Array of property names, or a comma-delimited list
     * of property names to copy.
     * @param {Boolean} [usePrototypeKeys=false] Pass `true` to copy keys off of the
     * prototype as well as the instance.
     * @return {Object} The `dest` object.
     */
    copy: function(dest, source, names, usePrototypeKeys) {
        if (typeof names === 'string') {
            names = names.split(Ext.propertyNameSplitRe);
        }
        for (var name,
            i = 0,
            n = names ? names.length : 0; i < n; i++) {
            name = names[i];
            // Only copy a property if the source actually *has* that property.
            // If we are including prototype properties, then ensure that a property of
            // that name can be found *somewhere* in the prototype chain (otherwise we'd be copying undefined in which may break things)
            if (source.hasOwnProperty(name) || (usePrototypeKeys && name in source)) {
                dest[name] = source[name];
            }
        }
        return dest;
    },
    propertyNameSplitRe: /[,;\s]+/,
    /**
     * @method copyToIf
     * @member Ext
     * Copies a set of named properties fom the source object to the destination object
     * if the destination object does not already have them.
     *
     * Example:
     *
     *     var foo = { a: 1, b: 2, c: 3 };
     *
     *     var bar = Ext.copyToIf({ a:42 }, foo, 'a,c');
     *     // bar = { a: 42, c: 3 };
     *
     * @param {Object} destination The destination object.
     * @param {Object} source The source object.
     * @param {String/String[]} names Either an Array of property names, or a single string
     * with a list of property names separated by ",", ";" or spaces.
     * @return {Object} The `dest` object.
     * @deprecated 6.0.1 Use {@link Ext#copyIf Ext.copyIf} instead. This old method
     * would copy the named preoperties even if they did not exist in the source which
     * could produce `undefined` values in the destination.
     */
    copyToIf: function(destination, source, names) {
        if (typeof names === 'string') {
            names = names.split(Ext.propertyNameSplitRe);
        }
        for (var name,
            i = 0,
            n = names ? names.length : 0; i < n; i++) {
            name = names[i];
            if (destination[name] === undefined) {
                destination[name] = source[name];
            }
        }
        return destination;
    },
    /**
     * @method copyIf
     * @member Ext
     * Copies a set of named properties fom the source object to the destination object
     * if the destination object does not already have them.
     *
     * Example:
     *
     *     var foo = { a: 1, b: 2, c: 3 };
     *
     *     var bar = Ext.copyIf({ a:42 }, foo, 'a,c');
     *     // bar = { a: 42, c: 3 };
     *
     * @param {Object} destination The destination object.
     * @param {Object} source The source object.
     * @param {String/String[]} names Either an Array of property names, or a single string
     * with a list of property names separated by ",", ";" or spaces.
     * @return {Object} The `dest` object.
     */
    copyIf: function(destination, source, names) {
        if (typeof names === 'string') {
            names = names.split(Ext.propertyNameSplitRe);
        }
        for (var name,
            i = 0,
            n = names ? names.length : 0; i < n; i++) {
            name = names[i];
            // Only copy a property if the destination has no property by that name
            if (!(name in destination) && (name in source)) {
                destination[name] = source[name];
            }
        }
        return destination;
    },
    /**
     * @method extend
     * @member Ext
     * This method deprecated. Use {@link Ext#define Ext.define} instead.
     * @param {Function} superclass
     * @param {Object} overrides
     * @return {Function} The subclass constructor from the <tt>overrides</tt> parameter, or a generated one if not provided.
     * @deprecated 4.0.0 Use {@link Ext#define Ext.define} instead
     */
    extend: (function() {
        // inline overrides
        var objectConstructor = Object.prototype.constructor,
            inlineOverrides = function(o) {
                var m;
                for (m in o) {
                    if (!o.hasOwnProperty(m)) {
                        
                        continue;
                    }
                    this[m] = o[m];
                }
            };
        return function(subclass, superclass, overrides) {
            // First we check if the user passed in just the superClass with overrides
            if (Ext.isObject(superclass)) {
                overrides = superclass;
                superclass = subclass;
                subclass = overrides.constructor !== objectConstructor ? overrides.constructor : function() {
                    superclass.apply(this, arguments);
                };
            }
            if (!superclass) {
                Ext.raise({
                    sourceClass: 'Ext',
                    sourceMethod: 'extend',
                    msg: 'Attempting to extend from a class which has not been loaded on the page.'
                });
            }
            // We create a new temporary class
            var F = function() {},
                subclassProto,
                superclassProto = superclass.prototype;
            F.prototype = superclassProto;
            subclassProto = subclass.prototype = new F();
            subclassProto.constructor = subclass;
            subclass.superclass = superclassProto;
            if (superclassProto.constructor === objectConstructor) {
                superclassProto.constructor = superclass;
            }
            subclass.override = function(overrides) {
                Ext.override(subclass, overrides);
            };
            subclassProto.override = inlineOverrides;
            subclassProto.proto = subclassProto;
            subclass.override(overrides);
            subclass.extend = function(o) {
                return Ext.extend(subclass, o);
            };
            return subclass;
        };
    }()),
    /**
     * Indicates if the page is currently running in online or offline mode, according
     * to the `navigator.onLine` property.
     * @return {Boolean} `true` if the page is currently running in an online mode.
     *
     * @since 6.2.1
     */
    isOnline: function() {
        return Ext.global.navigator.onLine;
    },
    /**
     * @method iterate
     * @member Ext
     * Iterates either an array or an object. This method delegates to
     * {@link Ext.Array#each Ext.Array.each} if the given value is iterable, and {@link Ext.Object#each Ext.Object.each} otherwise.
     *
     * @param {Object/Array} object The object or array to be iterated.
     * @param {Function} fn The function to be called for each iteration. See and {@link Ext.Array#each Ext.Array.each} and
     * {@link Ext.Object#each Ext.Object.each} for detailed lists of arguments passed to this function depending on the given object
     * type that is being iterated.
     * @param {Object} [scope] The scope (`this` reference) in which the specified function is executed.
     * Defaults to the object being iterated itself.
     */
    iterate: function(object, fn, scope) {
        if (Ext.isEmpty(object)) {
            return;
        }
        if (scope === undefined) {
            scope = object;
        }
        if (Ext.isIterable(object)) {
            Ext.Array.each.call(Ext.Array, object, fn, scope);
        } else {
            Ext.Object.each.call(Ext.Object, object, fn, scope);
        }
    },
    _resourcePoolRe: /^[<]([^<>@:]*)(?:[@]([^<>@:]+))?[>](.+)$/,
    /**
     * Resolves a resource URL that may contain a resource pool identifier token at the
     * front. The tokens are formatted as HTML tags "&lt;poolName@packageName&gt;" followed
     * by a normal relative path. This token is only processed if present at the first
     * character of the given string.
     *
     * These tokens are parsed and the pieces are then passed to the
     * {@link Ext#getResourcePath} method.
     *
     * For example:
     *
     *      [{
     *          xtype: 'image',
     *          src: '<shared>images/foo.png'
     *      },{
     *          xtype: 'image',
     *          src: '<@package>images/foo.png'
     *      },{
     *          xtype: 'image',
     *          src: '<shared@package>images/foo.png'
     *      }]
     *
     * In the above example, "shared" is the name of a Sencha Cmd resource pool and
     * "package" is the name of a Sencha Cmd package.
     * @member Ext
     * @param {String} url The URL that may contain a resource pool token at the front.
     * @return {String}
     * @since 6.0.1
     */
    resolveResource: function(url) {
        var ret = url,
            m;
        if (url && url.charAt(0) === '<') {
            m = Ext._resourcePoolRe.exec(url);
            if (m) {
                ret = Ext.getResourcePath(m[3], m[1], m[2]);
            }
        }
        return ret;
    },
    /**
     *
     * @member Ext
     * @method urlEncode
  