import React from 'react'
import { FaPlus } from "react-icons/fa"


class VideoPutOn extends React.Component{
    constructor(){
        super()
        this.state = {
            value : ""
        }
        
    }
    handlechange(event){
        const v = event.target.value
        console.log(v)
    }

    render(){
    return(
        <div className="video-puton-page">
        <h3 className="font-size-142rem">新增影片</h3>
        <form className="video-puton-form">
            <div className="video-puton-add" controls>
                <h3 className="video-puton-file-text font-size-142rem">將檔案拖曳到這裡</h3>
                <div className="video-puton-icon-div">
                    <FaPlus className="video-puton-icon"/>
                </div>
            </div>
            <button type="submit" className="video-puton-new-btn">新增影片</button>
            <div className="video-puton-content">
                <label htmlFor="videoname" className="video-puton-label font-size-1rem">影片名稱<input id="videoname" type="text" className="font-size-114rem"/></label>
                <label className="video-puton-label font-size-1rem" htmlFor="option">影片類型
                    <select className="video-value font-size-114rem" id="option" onChange={this.handlechange}>
                        <option value=""></option>
                        <option value="小提琴">小提琴</option>
                        <option value="中提琴">中提琴</option>
                        <option value="薩克斯風">薩克斯風</option>
                        <option value="鋼琴">鋼琴</option>
                        <option value="電子琴">電子琴</option>
                        <option value="爵士鼓">爵士鼓</option>
                        <option value="吉他">吉他</option>
                        <option value="烏克莉莉">烏克莉莉</option>
                        <option value="長笛">長笛</option>
                    </select>
                </label>
                <label htmlFor="videotime" className="video-puton-label font-size-1rem">影片長度<input id="videotime" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videoprice" className="video-puton-label font-size-1rem">影片價格<input id="videoprice" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videotext" className="video-puton-content-text font-size-1rem">影片簡介<textarea id="videotext" className="font-size-114rem"></textarea></label>
                <button type="submit" className="video-puton-add-btn">確認</button>
            </div>

        </form>
        </div>
    )
    }
   
}

export default VideoPutOn