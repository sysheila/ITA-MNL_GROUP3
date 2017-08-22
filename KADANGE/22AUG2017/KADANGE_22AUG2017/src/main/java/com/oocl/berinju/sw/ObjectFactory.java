
package com.oocl.berinju.sw;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.oocl.berinju.sw package. 
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

    private final static QName _ComputeResponse_QNAME = new QName("http://sw.berinju.oocl.com/", "computeResponse");
    private final static QName _Compute_QNAME = new QName("http://sw.berinju.oocl.com/", "compute");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.oocl.berinju.sw
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link Compute }
     * 
     */
    public Compute createCompute() {
        return new Compute();
    }

    /**
     * Create an instance of {@link ComputeResponse }
     * 
     */
    public ComputeResponse createComputeResponse() {
        return new ComputeResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ComputeResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://sw.berinju.oocl.com/", name = "computeResponse")
    public JAXBElement<ComputeResponse> createComputeResponse(ComputeResponse value) {
        return new JAXBElement<ComputeResponse>(_ComputeResponse_QNAME, ComputeResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Compute }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://sw.berinju.oocl.com/", name = "compute")
    public JAXBElement<Compute> createCompute(Compute value) {
        return new JAXBElement<Compute>(_Compute_QNAME, Compute.class, null, value);
    }

}
