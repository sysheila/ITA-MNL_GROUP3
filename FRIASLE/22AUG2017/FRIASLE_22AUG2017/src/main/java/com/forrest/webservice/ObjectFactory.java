
package com.forrest.webservice;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.forrest.webservice package. 
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

    private final static QName _GetQuotient_QNAME = new QName("http://webservice.forrest.com/", "getQuotient");
    private final static QName _GetModuloResponse_QNAME = new QName("http://webservice.forrest.com/", "getModuloResponse");
    private final static QName _GetQuotientResponse_QNAME = new QName("http://webservice.forrest.com/", "getQuotientResponse");
    private final static QName _GetDifference_QNAME = new QName("http://webservice.forrest.com/", "getDifference");
    private final static QName _GetProduct_QNAME = new QName("http://webservice.forrest.com/", "getProduct");
    private final static QName _GetProductResponse_QNAME = new QName("http://webservice.forrest.com/", "getProductResponse");
    private final static QName _GetCalcuResult_QNAME = new QName("http://webservice.forrest.com/", "getCalcuResult");
    private final static QName _GetSum_QNAME = new QName("http://webservice.forrest.com/", "getSum");
    private final static QName _GetModulo_QNAME = new QName("http://webservice.forrest.com/", "getModulo");
    private final static QName _GetSumResponse_QNAME = new QName("http://webservice.forrest.com/", "getSumResponse");
    private final static QName _GetDifferenceResponse_QNAME = new QName("http://webservice.forrest.com/", "getDifferenceResponse");
    private final static QName _GetCalcuResultResponse_QNAME = new QName("http://webservice.forrest.com/", "getCalcuResultResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.forrest.webservice
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GetProduct }
     * 
     */
    public GetProduct createGetProduct() {
        return new GetProduct();
    }

    /**
     * Create an instance of {@link GetProductResponse }
     * 
     */
    public GetProductResponse createGetProductResponse() {
        return new GetProductResponse();
    }

    /**
     * Create an instance of {@link GetQuotient }
     * 
     */
    public GetQuotient createGetQuotient() {
        return new GetQuotient();
    }

    /**
     * Create an instance of {@link GetDifference }
     * 
     */
    public GetDifference createGetDifference() {
        return new GetDifference();
    }

    /**
     * Create an instance of {@link GetModuloResponse }
     * 
     */
    public GetModuloResponse createGetModuloResponse() {
        return new GetModuloResponse();
    }

    /**
     * Create an instance of {@link GetQuotientResponse }
     * 
     */
    public GetQuotientResponse createGetQuotientResponse() {
        return new GetQuotientResponse();
    }

    /**
     * Create an instance of {@link GetDifferenceResponse }
     * 
     */
    public GetDifferenceResponse createGetDifferenceResponse() {
        return new GetDifferenceResponse();
    }

    /**
     * Create an instance of {@link GetCalcuResultResponse }
     * 
     */
    public GetCalcuResultResponse createGetCalcuResultResponse() {
        return new GetCalcuResultResponse();
    }

    /**
     * Create an instance of {@link GetCalcuResult }
     * 
     */
    public GetCalcuResult createGetCalcuResult() {
        return new GetCalcuResult();
    }

    /**
     * Create an instance of {@link GetSum }
     * 
     */
    public GetSum createGetSum() {
        return new GetSum();
    }

    /**
     * Create an instance of {@link GetModulo }
     * 
     */
    public GetModulo createGetModulo() {
        return new GetModulo();
    }

    /**
     * Create an instance of {@link GetSumResponse }
     * 
     */
    public GetSumResponse createGetSumResponse() {
        return new GetSumResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetQuotient }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getQuotient")
    public JAXBElement<GetQuotient> createGetQuotient(GetQuotient value) {
        return new JAXBElement<GetQuotient>(_GetQuotient_QNAME, GetQuotient.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetModuloResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getModuloResponse")
    public JAXBElement<GetModuloResponse> createGetModuloResponse(GetModuloResponse value) {
        return new JAXBElement<GetModuloResponse>(_GetModuloResponse_QNAME, GetModuloResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetQuotientResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getQuotientResponse")
    public JAXBElement<GetQuotientResponse> createGetQuotientResponse(GetQuotientResponse value) {
        return new JAXBElement<GetQuotientResponse>(_GetQuotientResponse_QNAME, GetQuotientResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDifference }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getDifference")
    public JAXBElement<GetDifference> createGetDifference(GetDifference value) {
        return new JAXBElement<GetDifference>(_GetDifference_QNAME, GetDifference.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetProduct }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getProduct")
    public JAXBElement<GetProduct> createGetProduct(GetProduct value) {
        return new JAXBElement<GetProduct>(_GetProduct_QNAME, GetProduct.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetProductResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getProductResponse")
    public JAXBElement<GetProductResponse> createGetProductResponse(GetProductResponse value) {
        return new JAXBElement<GetProductResponse>(_GetProductResponse_QNAME, GetProductResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetCalcuResult }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getCalcuResult")
    public JAXBElement<GetCalcuResult> createGetCalcuResult(GetCalcuResult value) {
        return new JAXBElement<GetCalcuResult>(_GetCalcuResult_QNAME, GetCalcuResult.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSum }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getSum")
    public JAXBElement<GetSum> createGetSum(GetSum value) {
        return new JAXBElement<GetSum>(_GetSum_QNAME, GetSum.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetModulo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getModulo")
    public JAXBElement<GetModulo> createGetModulo(GetModulo value) {
        return new JAXBElement<GetModulo>(_GetModulo_QNAME, GetModulo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSumResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getSumResponse")
    public JAXBElement<GetSumResponse> createGetSumResponse(GetSumResponse value) {
        return new JAXBElement<GetSumResponse>(_GetSumResponse_QNAME, GetSumResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDifferenceResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getDifferenceResponse")
    public JAXBElement<GetDifferenceResponse> createGetDifferenceResponse(GetDifferenceResponse value) {
        return new JAXBElement<GetDifferenceResponse>(_GetDifferenceResponse_QNAME, GetDifferenceResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetCalcuResultResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://webservice.forrest.com/", name = "getCalcuResultResponse")
    public JAXBElement<GetCalcuResultResponse> createGetCalcuResultResponse(GetCalcuResultResponse value) {
        return new JAXBElement<GetCalcuResultResponse>(_GetCalcuResultResponse_QNAME, GetCalcuResultResponse.class, null, value);
    }

}
