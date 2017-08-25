package calcws;

public class CalcMain {
	CalculationService cs = new CalculationService();
	Calculation cal = cs.getCalculationPort();
	public CalcMain() {
	}

	public double getSum(double a) {
		 return cal.add(a);
	}
	public double getQuotient(double a) {
		return cal.divide(a);
	}
	public double getProduct(double a) {
		return cal.multiply(a);
	}
	public double getDiff(double a) {
		return cal.minus(a);
	}
}
