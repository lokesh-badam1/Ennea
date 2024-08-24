package Test.src.test.java;

import Test.src.main.java.Map;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.HashMap;



public class TestMap {
    

    @Test
    void testAddElement(){
        HashMap<String, Integer> nutrition = new HashMap<>();
        assertTrue(Map.addItem("dosa", 100, nutrition));
        assertFalse(Map.addItem("dosa", 100, nutrition));
        
    }
}
