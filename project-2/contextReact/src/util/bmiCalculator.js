export function bmiCalculator(weight,height){
    if(height <= 0){
        return -1;
    }
    if(weight <=0){
        return -1;
    }
    let bmi = weight/(height*height*0.0001);
    return Math.trunc(bmi);
}