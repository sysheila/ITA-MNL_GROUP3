package com.oocl.kadange.hw;

public class Ball extends BallState{
	
	static int[] balls = new int[12];
	
	public Ball() {}
	
	public static int[] createBallPool(String oddBall) {
		if(oddBall.equals(BallState.heavy)) {
//			return 1;
			return createBallPool(1);
		}else if(oddBall.equals(BallState.light)) {
			return createBallPool(-1);
		}else {
			return createBallPool(0);
		}
	}
	
	public static int[] createBallPool(int oddBall) {
		int oddBallIndex = (int) (Math.random()*balls.length);
		for(int i=0;i<balls.length;i++) {
			if(i==oddBallIndex) {
				balls[i] = oddBall;
			}else {
				balls[i] = 0;
			}
		}
		return balls;
	}
}
