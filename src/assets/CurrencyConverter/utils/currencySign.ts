export default function currencySign(value){
    const data={
      'USD':"$",
      "EUR":"€",
      "CAD":"CA$"
    }
    if(data.hasOwnProperty(value)){
  
      return data[value]
    }else{
      return "Unknown Currency"
    }
  }