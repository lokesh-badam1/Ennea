import java.util.HashMap;
import java.util.Scanner;

public class Map{

    public static boolean addItem(String item,int calorie,HashMap<String,Integer> nutrition){
        if(nutrition.containsKey(item)){
            System.out.println("Item already exists");
            return false;
        }
        nutrition.put(item,calorie);
        return true;
    }

    public static boolean removeItem(String item,HashMap<String,Integer> nutrition){
        if(nutrition.containsKey(item)){
            nutrition.remove(item);
            System.out.println("Item deleted");
            return true;
        }
        else{
            System.out.println("\nItem does not exists \nEnter valid item");
            return false;
        }
    }

    public static boolean checkItem(String item,HashMap<String,Integer> nutrition){
        int calorie;
        if(nutrition.containsKey(item)){
            calorie = nutrition.get(item);
            System.out.println(item+" contains "+calorie+" calories");
            return true;
        }
        else{
            System.out.println("\nItem not found");
            return false;
        }
    }

    
    public static void main(String[] args) {
        int calorie;
        String item;
        int i = 4;
        Scanner inp = new Scanner(System.in);
        HashMap<String,Integer> nutrition = new HashMap<>();

        while(i!=0){
            System.out.println("\nEnter a number preceding the statement");
            System.out.println("0.Exit the application");
            System.out.println("1.Add a food item");
            System.out.println("2.Remove a food item");
            System.out.println("3.Check calories\n");
            System.out.print("Enter your choice:");
            i = inp.nextInt();
            switch (i) {
                case 0:
                    System.out.println("Exiting Application ...");
                    break;
                case 1:
                    System.out.print("Enter the item name:");
                    item = inp.next();
                    System.out.print("Enter the calorie count of "+item+":");
                    calorie = inp.nextInt();
                    addItem(item, calorie, nutrition);
                    System.out.println("Item added");
                    break;
                case 2:
                    System.out.print("Enter the item name:");
                    item = inp.next();
                    removeItem(item, nutrition);
                    break;
                case 3:
                    System.out.print("Enter the item name:");
                    item = inp.next();
                    checkItem(item, nutrition);
                    break;
                default:
                System.out.println("Enter a valid choice");
                    break;
            }
        }
        inp.close();
    }
    
}
