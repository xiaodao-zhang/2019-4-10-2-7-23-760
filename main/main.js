module.exports = function main(inputs) {
    // write your code here...
    var d_price;
    var price;
    var d=inputs.distance;
    var p=inputs.parkTime;
    if(d<=2)
        d_price=6;
    else if(d<=8)
        d_price=6+(d-2)*0.8;
    else
        d_price=6+6*0.8+(d-8)*0.8*1.5;
    price=d_price+p*0.25;
    price=Math.round(price);
    return price;
};
