let data={
'tshirt' : {'price':500,'qua':0,'total-price':0,'display':'tShirt-row', 'srno-tag':'#srno-tShirt', 'qua-tag':'#quantity-tshirt','totalprice-tag':'#totalprice-tshirt',},
'mug' : {'price':200,'qua':0,'total-price':0, 'display':'mug-row', 'srno-tag':'#srno-mug', 'qua-tag':'#quantity-mug','totalprice-tag':'#totalprice-mug'},
'bag' : {'price':1000,'qua':0,'total-price':0,'display':'bag-row', 'srno-tag':'#srno-bag', 'qua-tag':'#quantity-bag','totalprice-tag':'#totalprice-bag'},
}

function addProduct(item)
{ 
    if(data[item]['qua']==0){
        data[item]['qua']=1;
        document.getElementById('table').style.display= 'block';
        document.getElementById(data[item].display).style.display= 'table-row';
        totalprice(item);
    }
}
function totalprice(item)
{   
    data[item]['total-price'] = data[item].qua * data[item].price;
    let gt = data.tshirt['total-price'] + data.mug['total-price'] + data.bag['total-price'];
    
    document.querySelector(data[item]['qua-tag']).textContent = data[item]['qua'];
    document.querySelector(data[item]['totalprice-tag']).textContent = data[item]['total-price'];
    document.querySelector('#grand-total').textContent = gt;
}
function add(item){
    ++data[item]['qua'];
    totalprice(item);
}
function remove(item){
    --data[item]['qua'];
    if(data[item]['qua']==0){
        document.getElementById(data[item].display).style.display= 'none';
        totalprice(item);
    }else{
        totalprice(item);
    }
    if(data.tshirt.qua==0 && data.mug.qua==0 && data.bag.qua==0){
        document.getElementById('table').style.display= 'none';
        totalprice(item);
    }
}
