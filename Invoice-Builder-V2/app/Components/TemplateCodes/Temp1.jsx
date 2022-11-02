import Toast from "react-native-root-toast"
import InvoiceColors from "../../config/InvoiceColors";

const Temp1 = (Company_Contact,Company_address,Company_email,Company_logo,Company_name,FinalAmount,Items,Tax,color,customerAddress,customerName,customerPhone,newDate) => {
    
    // if(!Company_Contact || !Company_address || !Company_email || !Company_logo || !Company_name || !FinalAmount ||  !Items || !Tax || !color || !customerAddress || !customerName || !customerPhone){
    //   console.log(Company_Contact,Company_address,Company_email,Company_logo,Company_name,FinalAmount,Items,Tax,color,customerAddress,customerName,customerPhone);
    //         return Toast.show("Data Invalid",Toast.durations.SHORT);
    // }
    
    let newColor = InvoiceColors[color];

    return `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body>
      <!-- Whole Page  -->
      <div
        style="
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          padding: 10;
        "
      >
        <div
          style="height:90vh; width: 40%; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;"
        > 
        <!-- Invoice Details  -->
         <div style="height:60%;">
  
          <div style="display: flex; 
          flex-direction: column;
          height: auto;
          width: 100%;
          "
          >
              <h5 style="height:20px; margin-bottom: -10px;">Invoice No :${Date.now()}</h5>
              <p style="height:20px;">Date:  </p>
          </div>
          
          <!-- logo  -->
          <div>
            <img src="${Company_logo}"
          style="height: 100px; width: 100px; border-radius: 50px;"
          alt="">
          </div>
  
          <div style="display: flex; flex-direction: column; text-align:start; width: 80%;">
            <p style="font-size: 20px;margin-bottom: -10px;">Customer Details</p>
            <p style="margin-bottom: -10px;">${customerName},</p> 
            <p style="margin-bottom: -10px;">+91 ${customerPhone},</p>
            <p style="margin-bottom: -10px;">${customerAddress}</p>
         </div>
  
          <!-- company info -->
          <div style="display: flex; flex-direction: column; text-align:start; width: 80%; margin-top:20px">
            <p style="font-size: 20px;margin-bottom: -10px;">Customer Support</p>
            <p style="margin-bottom: -10px;">${Company_name},</p> 
            <p style="margin-bottom: -10px;">+91 ${Company_Contact},</p>
            <p style="margin-bottom: -10px;">${Company_address}</p>
         </div>
  
         </div>
  
         <div style="
            justify-self: end;
            align-content: flex-end;
         ">
            <span style="
            transform: rotate(12deg);
       color: #555;
       font-size: 3rem;
       font-weight: 700;
       border: 0.25rem solid #555;
       display: inline-block;
       padding: 0.25rem 1rem;
       text-transform: uppercase;
       border-radius: 1rem;
       font-family: 'Courier';
       -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');
       -webkit-mask-size: 644px 304px;
       mix-blend-mode: multiply;
            color: #0A9928;
       border: 0.5rem solid #0A9928;
       -webkit-mask-position: 13rem 6rem;
       transform: rotate(-14deg);
       border-radius: 0;
     
            ">Approved</span>
         </div>
         
  
      </div>
  
      <div style="width: 60%; display: flex; flex-direction: column;">
  
        <div style="height: 60%; padding: 20px; background-color: ${newColor}; padding-top: 35px;">
          <table style="width:100%; border-collapse: collapse;">
          <tr style="color: #1a1a1a; border-bottom: 1pt solid black; font-size: 16px;">
            <th style="height: 30px; width: 150px;">Product Name</th>
            <th style="height: 30px;">Price</th>
            <th style="height: 30px; ">Quantity</th>
            <th style="height: 30px; ">Total</th>
          </tr>           

          ${
                Items.map(item => {
                    return `
                <tr style="background-color: transparent;
                ">
                  <td style="text-align: center;height: 30px;">${item["Item_Name"]}</td>
                  <td style="text-align: center;height: 30px;">${item["Item_Price"]}</td>
                  <td style="text-align: center;height: 30px;">${item["Item_Quantity"]}</td>
                  <td style="text-align: center;height: 30px;">${item["Final_Price"]}</td>
                </tr>
                    `
                })
          }
            
           
          </table>
        </div>
  
        <div style="direction: flex; flex-direction: column; background-color: #ECECEC; margin-top: 10px; padding: 20px; justify-content: space-evenly;">
  
         <div style="display: flex; flex-direction: row; justify-content: space-between; height: 40px;">
          <h5>Product Price</h5>
          <h5>${

                parseInt(FinalAmount) - parseInt(Tax)

          }</h5>
         </div>
  
         <div style="display: flex; flex-direction: row; justify-content: space-between; height: 40px;">
          <h5>Tax</h5>
          <h5>${Tax}</h5>
         </div>
  
         <div style="display: flex; flex-direction: row; justify-content: space-between;">
          <h5 style="font-size: 20px;">Final</h5>
          <h5 style="font-size: 20px;">${FinalAmount}</h5>
         </div>
  
        </div>
  
  
      </div>
        
      </div>
    </body>
  </html>
    `;
}

export default Temp1;