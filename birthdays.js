let arr = [];
let months = new Map();
let day;
months.set(1,0);
months.set(2,0);
months.set(3,0);
months.set(4,0);
months.set(5,0);
months.set(6,0);
months.set(7,0);
months.set(8,0);
months.set(9,0);
months.set(10,0);
months.set(11,0);
months.set(12,0);
for(let i = 0; i<50; i++){
    day=Math.floor(Math.random()*12+1);
    switch(day){
        case 1 : months.set(1,months.get(1)+1);break;
        case 2 : months.set(2,months.get(2)+1);break;
        case 3 : months.set(3,months.get(3)+1);break;
        case 4 : months.set(4,months.get(4)+1);break;
        case 5 : months.set(5,months.get(5)+1);break;
        case 6 : months.set(6,months.get(6)+1);break;
        case 7 : months.set(7,months.get(7)+1);break;
        case 8 : months.set(8,months.get(8)+1);break;
        case 9 : months.set(9,months.get(9)+1);break;
        case 10 : months.set(10,months.get(10)+1);;break;
        case 11 : months.set(11,months.get(11)+1);;break;
        case 12 : months.set(12,months.get(12)+1);;break;
        
    }
}

for(let j=1; j<13; j++){
    if(months.get(j)>1){
        console.log("Month"+j+"'s number of Birthdays: "+months.get(j));
    }
}