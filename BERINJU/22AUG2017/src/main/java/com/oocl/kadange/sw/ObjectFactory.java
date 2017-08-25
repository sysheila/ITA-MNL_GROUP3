
package com.oocl.kadange.sw;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.oocl.kadange.sw package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _GetCalMethodResponse_QNAME = new QName("http://sw.kadange.oocl.com/", "getCalMethodResponse");
    private final static QName _CalculateResponse_QNAME = new QName("http://sw.kadange.oocl.com/", "calculateResponse");
    private final static QName _Calculate_QNAME = new QName("http://sw.kadange.oocl.com/", "calculate");
    private final static QName _GetCalMethod_QNAME = new QName("http://sw.kadange.oocl.com/", "getCalMethod");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.oocl.kadange.sw
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GetCalMethodResponse }
     * 
     */
    public GetCalMethodResponse createGetCalMethodResponse() {
        return new GetCalMethodResponse();
    }

    /**
     * Create an instance of {@link CalculateResponse }
     * 
     */
    public CalculateResponse createCalculateResponse() {
        return new CalculateResponse();
    }

    /**
     * Create an instance of {@link Calculate }
     * 
     */
    public Calculate createCalculate() {
        return new Calculate();
    }

    /**
     * Create an instance of {@link GetCalMethod }
     * 
     */
    public GetCalMethod createGetCalMethod() {
        return new GetCalMethod();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetCalMethodResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://sw.kadange.oocl.com/", name = "getCalMethodResponse")
    public JAXBElement<GetCalMethodResponse> createGetCalMethodResponse(GetCalMethodResponse value) {
        return new JAXBElement<GetCalMethodResponse>(_GetCalMethodResponse_QNAME, GetCalMethodResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CalculateResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://sw.kadange.oocl.com/", name = "calculateResponse")
    public JAXBElement<CalculateResponse> createCalculateResponse(CalculateResponse value) {
        return new JAXBElement<CalculateResponse>(_CalculateResponse_QNAME, CalculateResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Calculate }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://sw.kadange.oocl.com/", name = "calculate")
    public JAXBElement<Calculate> createCalculate(Calculate value) {
        return new JAXBElement<Calculate>(_Calculate_QNAME, Calculate.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetCalMethod }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://sw.kadange.oocl.com/", name = "getCalMethod")
    public JAXBElement<GetCalMethod> createGetCalMethod(GetCalMethod value) {
        return new JAXBElement<GetCalMethod>(_GetCalMethod_QNAME, GetCalMethod.class, null, value);
    }

}
