package com.oocl.daluplo.hw6;
import java.lang.management.ManagementFactory;
import java.lang.management.ThreadInfo;
import java.lang.management.ThreadMXBean;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;



public class DeadlockChecker {

  private final DeadlockHandler deadlockHandler;
  private final long period;
  private final TimeUnit unit;
  private final ThreadMXBean mbean = ManagementFactory.getThreadMXBean();
  private final ScheduledExecutorService scheduler = 
  Executors.newScheduledThreadPool(1);
  
  final Runnable deadlockCheck = new Runnable() {
    
    public void run() {
      long[] deadlockedThreadIds = DeadlockChecker.this.mbean.findDeadlockedThreads();
    
      if (deadlockedThreadIds != null) {
        ThreadInfo[] threadInfos = 
        DeadlockChecker.this.mbean.getThreadInfo(deadlockedThreadIds);
      
        DeadlockChecker.this.deadlockHandler.handleDeadlock(threadInfos);
      }
    }
  };
  
//  public DeadlockDetector(final DeadlockDetector deadlockHandler, 
//    final long period, final TimeUnit unit) {
//    this.deadlockHandler = deadlockHandler;
//    this.period = period;
//    this.unit = unit;
//  }
  
  public DeadlockChecker(DeadlockHandler deadlockConsoleHandler, int period2, TimeUnit seconds) {
	// TODO Auto-generated constructor stub
	  this.deadlockHandler = deadlockConsoleHandler;
	    this.period = period2;
	    this.unit = seconds;
}

protected void handleDeadlock(ThreadInfo[] threadInfos) {
	// TODO Auto-generated method stub
	
}

public void start() {
    this.scheduler.scheduleAtFixedRate(
    this.deadlockCheck, this.period, this.period, this.unit);
  }
}