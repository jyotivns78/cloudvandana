import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        boolean isPangram = isPangram(sentence);
        System.out.println("Is it a pangram? " + isPangram);
    }

    public static boolean isPangram(String s) {
        s = s.toLowerCase();

        boolean[] alphabet = new boolean[26];

        for (char c : s.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                alphabet[c - 'a'] = true;
            }
        }

        for (boolean letter : alphabet) {
            if (!letter) {
                return false;
            }
        }

        return true;
    }
}
