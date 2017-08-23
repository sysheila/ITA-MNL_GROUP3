import java.util.HashMap;
import java.util.Set;

public class TwelveBalls {

	static double[] oneSet = new double[4];
	static double[] twoSet = new double[4];
	static double[] threeSet = new double[4];

	public static void main(String[] args) {

		ballSet setOne = new ballSet("Set One", 4, 1);
		ballSet setTwo = new ballSet("Set Two", 4, 5);
		ballSet setThree = new ballSet("Set Three", 4, 9);

		for (int x = 0; x < 4; x++) {
			oneSet[x] = 1.0;
		}
		for (int x = 0; x < 4; x++) {
			twoSet[x] = 1.0;
		}
		for (int x = 0; x < 4; x++) {
			threeSet[x] = 1.0;
		}

		twoSet[2] = .8;

		setOne.setX(oneSet);
		setTwo.setX(twoSet);
		setThree.setX(threeSet);

		unoScenario(setOne, setTwo, setThree);

	}

	public static void unoScenario(ballSet a, ballSet b, ballSet c) {
		double[] leftCompare = new double[3];
		double[] rightCompare = new double[3];

		System.out.println("weigh first and second set");
		if (getSum(oneSet) > getSum(twoSet)) {
			System.out.println("First two sets are different get the heavier of the two\nSet A is greater than Set B");
			double[] oneSet = a.getX();
			double[] twoSet = b.getX();
			double[] threeSet = c.getX();
			System.out.println("Left comparator 1, 5, 6");
			leftCompare[0] = oneSet[0];
			leftCompare[1] = twoSet[0];
			leftCompare[2] = twoSet[1];

			rightCompare[0] = twoSet[2];
			rightCompare[1] = oneSet[1];
			rightCompare[2] = threeSet[3];
			System.out.println("Right comparator 7, 2, 12");
			System.out.println("Heavier 1, 5, 6    7, 2, 12 Lighter");
			a.setY(leftCompare);
			b.setY(rightCompare);
			greaterScenario(a, b);
		}

		if (getSum(oneSet) < getSum(twoSet)) {
			System.out.println("First two sets are different get the heavier of the two\nSet B is greater than Set A");

			double[] oneSet = b.getX();
			double[] twoSet = a.getX();
			double[] threeSet = c.getX();
			leftCompare[0] = oneSet[0];
			leftCompare[1] = twoSet[0];
			leftCompare[2] = twoSet[1];
			System.out.println("Left comparator 5, 1, 2");

			rightCompare[0] = twoSet[2];
			rightCompare[1] = oneSet[1];
			rightCompare[2] = threeSet[3];
			System.out.println("Left comparator 3, 6, 12");
			System.out.println("Heavier 5,1,2   3, 6, 12 Lighter");
			b.setY(leftCompare);
			a.setY(rightCompare);
			greaterScenario(b, a);
		}
		if (getSum(oneSet) == getSum(twoSet)) {
			getBasicScenario(c);
		}

	}

	public static void greaterScenario(ballSet a, ballSet b) {
		double[] oneSet = a.getX();
		double[] twoSet = b.getX();
		double[] threeSet = { 1.0, 1.0, 1.0, 1.0 };
		if (getSum(a.getY()) == getSum(b.getY())) {
			if (oneSet[2] == oneSet[3]) {
				// System.out.println("second set ball: 3 with weight " + twoSet[3] + " is the
				// odd ball");
				System.out.println(b.getName() + " ball " + (3 + b.getAdditionCounter()) + " with weight " + twoSet[3]
						+ " is the odd ball");
			}
			if (oneSet[2] > oneSet[3]) {
				// System.out.println("first set ball: 3 with weight " + oneSet[2] + " is the
				// odd ball");
				System.out.println(a.getName() + " ball " + (a.getAdditionCounter() + 2) + " with weight " + oneSet[2]
						+ " is the odd ball");
			}
			if (oneSet[2] < oneSet[3]) {
				// System.out.println("first set ball: 4 with weight " + oneSet[3] + " is the
				// odd ball");
				System.out.println(a.getName() + " ball " + (a.getAdditionCounter() + 3) + " with weight " + oneSet[3]
						+ " is the odd ball");
			}
		}
		if (getSum(a.getY()) > getSum(b.getY())) {
			if (oneSet[0] == threeSet[3]) {
				// System.out.println("second set ball 7: with weight " + twoSet[2] + " is the
				// odd ball");
				System.out.println(b.getName() + " ball " + (2 + b.getAdditionCounter()) + " with weight " + twoSet[2]
						+ " is the odd ball");
			}
			if (oneSet[0] > threeSet[3]) {
				// System.out.println("first set ball: 1 with weight " + oneSet[0] + " is the
				// odd ball");
				System.out.println(a.getName() + " ball " + (a.getAdditionCounter() + 0) + " with weight " + oneSet[0]
						+ " is the odd ball");
			}
		}
		if (getSum(a.getY()) < getSum(b.getY())) {
			if (twoSet[0] == twoSet[1]) {
				// System.out.println("first set ball: 2 with weight " + oneSet[1] + " is the
				// odd ball");
				System.out.println(a.getName() + " ball " + (a.getAdditionCounter() + 1) + " with weight " + oneSet[1]
						+ " is the odd ball");
			}
			if (twoSet[0] > twoSet[1]) {
				// System.out.println("second set ball: 2 with weight " + twoSet[1] + " is the
				// odd ball");
				System.out.println(b.getName() + " ball " + (1 + b.getAdditionCounter()) + " with weight " + twoSet[1]
						+ " is the odd ball");
			}
			if (twoSet[0] < twoSet[1] && twoSet[0] + twoSet[1] < 2) {
				// System.out.println("second set ball: 2 with weight " + twoSet[] + " is the
				// odd ball");
				System.out.println(b.getName() + " ball " + (0 + b.getAdditionCounter()) + " with weight " + twoSet[0]
						+ " is the odd ball");
			}
		}
	}

	public static void getBasicScenario(ballSet c) {
		double[] x = c.getX();
		double b1 = x[0], b2 = x[1], b3 = x[2], b4 = x[3], b5=1;
		
		if(b2+b5 == b3+b4) {
			if(b1 > b5) {
				System.out.println("b1 is the lighter odd ball");
			} else if (b1 > b5 ){
				System.out.println("b1 is the heavier odd ball");
			}
		}else if(b2+b5 > b3+b4 == true){
			if(b5+b4 > b2+b3 == true) {
				System.out.println("b3 is the lighter odd ball");
			} else if(b5+b4 < b2+b3 == true) {
				
			}
			
		}
	}

	public static double getSum(double[] n) {
		double sum = 0;
		for (double x : n) {
			sum += x;
		}
		return sum;
	}

}

class ballSet {
	String name;
	int additionCounter;

	public int getAdditionCounter() {
		return additionCounter;
	}

	public void setAdditionCounter(int additionCounter) {
		this.additionCounter = additionCounter;
	}

	double[] x;
	double[] y;

	public double[] getY() {
		return y;
	}

	public void setY(double[] y) {
		this.y = y;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double[] getX() {
		return x;
	}

	public void setX(double[] x) {
		this.x = x;
	}

	ballSet(String name, int x, int y) {
		this.name = name;
		this.x = new double[x];
		this.additionCounter = y;
	}
}
