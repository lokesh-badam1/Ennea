import java.util.ArrayList;
import java.util.Scanner;

public class project {
    public static void main(String[] args) {
        int i = 4;
        ArrayList<Integer> al = new ArrayList<>();
        Scanner inp = new Scanner(System.in);

        while(i != 0){
            System.out.println("\nEnter a number preceding the statement:");
            System.out.println("0. Exit from application");
            System.out.println("1. Add a element to list");
            System.out.println("2. Delete a element from list");
            System.out.println("3. Display Items in the list");
            System.out.print("Your choice: ");
            i = inp.nextInt();
            int k;

            switch (i) {
                case 0:
                    System.out.println("Exiting from the application ...");
                    break;
                case 1:
                    System.out.print("Enter a integer: ");
                    k = inp.nextInt();
                    al.add(k);
                    System.out.println("\nElement "+k+" Added to list");
                    break;
                case 2:
                    System.out.print("Enter the value to be removed:");
                    k = inp.nextInt();
                    al.remove(al.indexOf(k));
                    System.out.println("\nElement "+k+" removed");
                    break;
                case 3:
                    System.out.println("Elements in the list are :"+al);
                default:
                    break;
                }    
            }
            inp.close();
    }
}