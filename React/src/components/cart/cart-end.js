import React from 'react';

function CartEnd (props) {

  const {setPage} = props;  
  // 麵包屑
  setPage(6) 

    return (
      <>
               
              {/* 感謝卡 */}
              <div className="cart-thank-card">
                  <h2>訂單完成</h2>
                  <span>購買程序已順利完成，感謝您的購買</span>
                  <span>Dulcet Music 已寄發一封訂單明細到您的信箱</span>
                  <span>或是您也可以至 會員中心 購買清單 查看您的訂單</span>
                  <span>歡迎再度光臨唷！</span>
                  <h2>Thank you {':)'} </h2>
              </div>

      </>
    );

}

export default CartEnd;