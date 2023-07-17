import { useState, useEffect, useContext } from 'react'
import { ContextIncomeInfo } from '../../services/IncomeInfo'
import { API_URL, WS_ENDPOINT, FINANCE_WS_URI } from "../../utils/config";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
function WebSocketHandler() {
  const mainIncomeData = useContext(ContextIncomeInfo)

  //TEST UPDATE
  useEffect(() => {
    //mainIncomeData.updateMainIncomeData([{a:"1000", b:12222}])
  }, [])
  //Socket
  const socket = new SockJS(`${API_URL}${WS_ENDPOINT}`);
  //connect to a STOMP broker over a Web Socket
  const stompClient = Stomp.over(socket)
  stompClient.debug = false;

  useEffect(() => {
    //console.log("WEB socket test")
    stompClient.connect({}, () => {
      stompClient.subscribe(FINANCE_WS_URI, ({ body }) => {
        const data = JSON.parse(body, true);
        const {
          incomePercentageResponse,
          totalIncomeResponse,
          totalBillResponse,
        } = data;

        // update income
        mainIncomeData.updateTotalIncomeData(totalIncomeResponse)
        //update
        mainIncomeData.updateMainIncomeData(incomePercentageResponse)
        // update bill
        mainIncomeData.updateTotalBillData(totalBillResponse)
      });
    });
  })
}
export default WebSocketHandler