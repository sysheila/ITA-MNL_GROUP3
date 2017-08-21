package com.oocl.daluplo.sw1;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * This is an updated version with enhancements made by Daniel Migowski,
 * Andre Bogus, and David Koelle. Updated by David Koelle in 2017.
 *
 * To use this class:
 *   Use the static "sort" method from the java.util.Collections class:
 *   Collections.sort(your list, new AlphanumComparator());
 */
public class AlphanumComparator implements Comparator<String>
{
    private final boolean isDigit(char ch)
    {
        return ((ch >= 48) && (ch <= 57));
    }

    /** Length of string is passed in for improved efficiency (only need to calculate it once) **/
    private final String getChunk(String s, int slength, int marker)
    {
        StringBuilder chunk = new StringBuilder();
        char c = s.charAt(marker);
        chunk.append(c);
        marker++;
        if (isDigit(c))
        {
            while (marker < slength)
            {
                c = s.charAt(marker);
                if (!isDigit(c))
                    break;
                chunk.append(c);
                marker++;
            }
        } else
        {
            while (marker < slength)
            {
                c = s.charAt(marker);
                if (isDigit(c))
                    break;
                chunk.append(c);
                marker++;
            }
        }
        return chunk.toString();
    }

    public int compare(String s1, String s2)
    {
    	if ((s1 == null) || (s2 == null)) 
    	{
    		return 0;
    	}

        int thisMarker = 0;
        int thatMarker = 0;
        int s1Length = s1.length();
        int s2Length = s2.length();

        while (thisMarker < s1Length && thatMarker < s2Length)
        {
            String thisChunk = getChunk(s1, s1Length, thisMarker);
            thisMarker += thisChunk.length();

            String thatChunk = getChunk(s2, s2Length, thatMarker);
            thatMarker += thatChunk.length();

            // If both chunks contain numeric characters, sort them numerically
            int result = 0;
            if (isDigit(thisChunk.charAt(0)) && isDigit(thatChunk.charAt(0)))
            {
                // Simple chunk comparison by length.
                int thisChunkLength = thisChunk.length();
                result = thisChunkLength - thatChunk.length();
                // If equal, the first different number counts
                if (result == 0)
                {
                    for (int i = 0; i < thisChunkLength; i++)
                    {
                        result = thisChunk.charAt(i) - thatChunk.charAt(i);
                        if (result != 0)
                        {
                            return result;
                        }
                    }
                }
            } 
            else
            {
                result = thisChunk.compareTo(thatChunk);
            }

            if (result != 0)
                return result;
        }

        return s1Length - s2Length;
    }
    
    /** 
     * Shows an example of how the comparator works. 
     * Feel free to delete this in your own code!
     */
//    public static void main(String[] args) {
//    	List<String> values = Arrays.asList("dazzle2", "dazzle10", "dazzle1", "dazzle2.7", "dazzle2.10", "2", "10", "100", "EctoMorph6", "EctoMorph62", "EctoMorph7");
//    	
//    	BufferedReader br = null;
//		FileReader file = null;
//		BufferedWriter writer = null;
//		BufferedWriter writer2 = null;
//		FileWriter output = null;
//		FileWriter output2 = null;
//		List<String> stringArr = new ArrayList<String>();
//		List<String> stringArr2 = new ArrayList<String>();
//		List<Integer> intgArr = new ArrayList<Integer>();
//		try {
//			file = new FileReader("D:\\daluplo\\NEW_WORKSPACE\\DALUPLO_18AUG2017\\src\\main\\resources\\input.txt");
//			br = new BufferedReader(file); 
//			output = new FileWriter("D:\\daluplo\\NEW_WORKSPACE\\DALUPLO_18AUG2017\\src\\main\\resources\\output.txt");
//			output2 = new FileWriter("D:\\daluplo\\NEW_WORKSPACE\\DALUPLO_18AUG2017\\src\\main\\resources\\output.txt");
//			writer = new BufferedWriter(output);
//			writer2 = new BufferedWriter(output2);
//			String current;
//			int curr;
//			
//			while ((current = br.readLine()) != null) {
//				stringArr.add(current);
//			}
//
//			Stream<String> streamsam = stringArr.stream().sorted(new AlphanumComparator());
//	    	streamsam.forEach(element -> stringArr2.add((String) element));
//	    	
//	    	for(String str:stringArr2) {
//	    		System.out.println(str);
//				writer.write(str);
//				writer.newLine();
//			
//	    	}
//
//		}catch(Exception e) {
//			e.printStackTrace();
//		}finally {
//			try {
//				br.close();
//				writer.close();
//				output.close();
//				file.close();
//			}catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//    	
//    	
//    }
}