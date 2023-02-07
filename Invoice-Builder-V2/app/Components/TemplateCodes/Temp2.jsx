import Toast from "react-native-root-toast";
import { date } from "yup";
import InvoiceColors from "../../config/InvoiceColor";

const Temp2 = (
  Company_Contact,
  Company_address,
  Company_email,
  Company_logo,
  Company_name,
  FinalAmount,
  Items,
  Tax,
  color,
  customerAddress,
  customerName,
  customerPhone,
  newDate
) => {
  // if(!Company_Contact || !Company_address || !Company_email || !Company_logo || !Company_name || !FinalAmount ||  !Items || !Tax || !color || !customerAddress || !customerName || !customerPhone){
  //   console.log(Company_Contact,Company_address,Company_email,Company_logo,Company_name,FinalAmount,Items,Tax,color,customerAddress,customerName,customerPhone);
  //         return Toast.show("Data Invalid",Toast.durations.SHORT);
  // }

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  let newColor = InvoiceColors[color];

  return `
    <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />  
</head>
  <body style="margin: 0; ">
    <div style="
    width: 100%;
    height : 97vh;
    display: flex; 
    flex-direction: column;
    color: black;
    "  >
        
        <!-- Heading Design   -->
        <div style="padding-top:10px; padding-bottom:10px; 
        display: flex;
        justify-content: center; align-items: center;">
            <img src=${Company_logo} alt="design"
            height="150px"
            width="150px",
            style="border-radius: 50%;"
            />
        </div>
       <div style="padding: 15px;">
        <div style="
        padding: 10px;

        display: flex;
        flex-direction: row;
        width: 100%;
        overflow-wrap: break-word;
        justify-content: space-between;
        ">
            
            <!-- Invoice no and Customer contact  -->
            <div style="

            display:flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            align-self: flex-start;
            justify-self: start;
            ">
                <h3>Invoice : ${Date.now()}</h3>
                <div>
                    <p style="text-transform:uppercase; 
                    font-weight: bold;
                    ">Company contact</p>
                
                    <p style="height: 5px;">${Company_name}</p>
                    <p style="height: 5px;">${Company_address}</p>
                    <p style="height: 5px;">${Company_email}</p>
                    <p style="height: 5px;">${Company_Contact}</p>
                </div>

            </div>

            <!-- Date and Payble To  -->
            <div style="
            display:flex;
            flex-direction: column;
            text-align: end;
            justify-content: space-evenly;
            ">
                <h3>Date Issue : ${today.toDateString()}</h3>
                <div>
                    <p style="text-transform:uppercase; font-weight: bold;">Customer contact</p>
                    <p style="font-weight: bold;height: 5px;">
                        ${customerName}
                    </p>
                    <p style="height: 5px;">${customerPhone}</p>
                    <p style="height: 5px;">${customerAddress}</p>
                </div>

            </div>


        </div>

        <!-- Table  -->
        <div style="width: 100%; display: flex; flex-direction: column; margin-top: 20px;">

          
        <table style="width:100%; border-collapse: collapse; text-transform: uppercase;">
            <tr style="color: #070505; border-bottom: 1pt solid #070505; font-size: 20px; align-items: center; height: 50px; background-color:${newColor};">
                <th style="text-align:start; padding-left: 10px;" >Description</th>
                <th style="width: 250px;
                 height:20px;">Price</th>
                <th style="width: 250px; height:20px;">Quantity</th>
                <th style="width: 250px; height:20px;">Total</th>
            </tr>
            ${Items.map((item) => {
              return `<tr style="border-bottom: 1pt solid #070505; height: 60px;">
                <td style="text-align: center;height: 30px;
                padding-left: 10px;
                text-align:start;
                ">${item["Item_Name"]}</td>
                <td style="text-align: center;height: 30px;">${item["Item_Price"]}</td>
                <td style="text-align: center;height: 30px;">${item["Item_Quantity"]}</td>
                <td style="text-align: center;height: 30px;">${item["Final_Price"]}</td>
            </tr>`;
            })}
        </table>
        </div>
        <div style="margin-top: 4rem; display: flex;
        flex-direction: row; justify-content: space-between;
        ">

<div style="
justify-self: end;
align-content: flex-end;
width: 70%;
justify-content: center;
align-items: center;
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
transform: rotate(1deg);
border-radius: 0;

">Approved</span>
</div>

            <div style="width: 30%; padding: 30px; display: flex; flex-direction: column; justify-content: center;">
                <table >
                    <tr style="height: 40px;">
                        <th>SUBTOTAL:</th>
                        <th>${parseInt(FinalAmount) - parseInt(Tax)}</th>
                    </tr>
                    <tr style="height: 40px;">
                        <th>Tax:</th>
                        <th>${Tax}</th>
                    </tr>
                    <tr style="font-size: 24px; height: 40px;">
                        <th>Final :</th>
                        <th>${FinalAmount}</th>
                    </tr>
                </table>
            </div>
        

        </div>
       </div>


    </div>

</body>
</html>
    `;
};

export default Temp2;
