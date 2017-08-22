
package com.oocl.daluplo.calc;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.Action;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebService(name = "Calculator", targetNamespace = "http://calc.daluplo.oocl.com/")
@XmlSeeAlso({
    ObjectFactory.class
})
public interface Calculator {


    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns java.lang.Double
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "add", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.Add")
    @ResponseWrapper(localName = "addResponse", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.AddResponse")
    @Action(input = "http://calc.daluplo.oocl.com/Calculator/addRequest", output = "http://calc.daluplo.oocl.com/Calculator/addResponse")
    public Double add(
        @WebParam(name = "arg0", targetNamespace = "")
        double arg0,
        @WebParam(name = "arg1", targetNamespace = "")
        double arg1);

    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns java.lang.Double
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "divide", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.Divide")
    @ResponseWrapper(localName = "divideResponse", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.DivideResponse")
    @Action(input = "http://calc.daluplo.oocl.com/Calculator/divideRequest", output = "http://calc.daluplo.oocl.com/Calculator/divideResponse")
    public Double divide(
        @WebParam(name = "arg0", targetNamespace = "")
        double arg0,
        @WebParam(name = "arg1", targetNamespace = "")
        double arg1);

    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns java.lang.Double
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "multiply", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.Multiply")
    @ResponseWrapper(localName = "multiplyResponse", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.MultiplyResponse")
    @Action(input = "http://calc.daluplo.oocl.com/Calculator/multiplyRequest", output = "http://calc.daluplo.oocl.com/Calculator/multiplyResponse")
    public Double multiply(
        @WebParam(name = "arg0", targetNamespace = "")
        double arg0,
        @WebParam(name = "arg1", targetNamespace = "")
        double arg1);

    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns java.lang.Double
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "subtract", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.Subtract")
    @ResponseWrapper(localName = "subtractResponse", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.SubtractResponse")
    @Action(input = "http://calc.daluplo.oocl.com/Calculator/subtractRequest", output = "http://calc.daluplo.oocl.com/Calculator/subtractResponse")
    public Double subtract(
        @WebParam(name = "arg0", targetNamespace = "")
        double arg0,
        @WebParam(name = "arg1", targetNamespace = "")
        double arg1);

    /**
     * 
     * @param arg1
     * @param arg0
     * @return
     *     returns java.lang.Double
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "modulo", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.Modulo")
    @ResponseWrapper(localName = "moduloResponse", targetNamespace = "http://calc.daluplo.oocl.com/", className = "com.oocl.daluplo.calc.ModuloResponse")
    @Action(input = "http://calc.daluplo.oocl.com/Calculator/moduloRequest", output = "http://calc.daluplo.oocl.com/Calculator/moduloResponse")
    public Double modulo(
        @WebParam(name = "arg0", targetNamespace = "")
        double arg0,
        @WebParam(name = "arg1", targetNamespace = "")
        double arg1);

}
