function grades(grade){
    if(grade >= 5.50){
        return `Excellent (${grade.toFixed(2)})`;
    }else if(grade<5.5 && grade >= 4.5){
        return `Very good (${grade.toFixed(2)})`;
    }else if(grade<4.5 && grade >= 3.5){
        return `Good (${grade.toFixed(2)})`;
    }else if(grade<3.5 && grade >= 3){
        return `Poor (${grade.toFixed(2)})`;
    }
    return `Fail (2)`;
}