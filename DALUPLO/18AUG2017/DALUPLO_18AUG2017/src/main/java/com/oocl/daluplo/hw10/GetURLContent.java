package com.oocl.daluplo.hw10;
import org.jsoup.Jsoup;
import org.jsoup.helper.StringUtil;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;
import org.jsoup.select.Elements;
import org.jsoup.select.NodeVisitor;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class GetURLContent {
 
    public static void main(String[] args) throws IOException {
    	Scanner scanner = new Scanner(System.in);
		System.out.println("Enter URL: ");
		String input = scanner.nextLine();
        String url = "https://loremipsumgenerator.com/";
        List<String> strings = getStringsFromUrl(input, null);
        FileWriter fw = new FileWriter("./src/main/resources/UrlContent.txt", true);
		BufferedWriter bw = new BufferedWriter(fw);
		
        
        for(String string : strings) {
            System.out.println(string);
            bw.write(string+"\n");
        }
        bw.write("\n================================================================================\n\n");
        bw.close();
    }

    private static List<String> getStringsFromUrl(String url, String cssQuery) throws IOException {
        Document document = Jsoup.connect(url).get();
        Elements elements = StringUtil.isBlank(cssQuery)
                ? document.getElementsByTag("body")
                : document.select(cssQuery);

        List<String> strings = new ArrayList<String>();
        elements.traverse(new TextNodeExtractor(strings));
        return strings;
    }

    private static class TextNodeExtractor implements NodeVisitor {
        private final List<String> strings;

        public TextNodeExtractor(List<String> strings) {
            this.strings = strings;
        }

        public void head(Node node, int depth) {
            if (node instanceof TextNode) {
                TextNode textNode = ((TextNode) node);
                String text = textNode.getWholeText();
                if (!StringUtil.isBlank(text)) {
                    strings.add(text);
                }
            }
        }

        public void tail(Node node, int depth) {}
    }
}