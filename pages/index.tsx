import React, { useState } from 'react'

import Layout from '../components/Layout'

const IndexPage = () => {
  const [searchResultMessage, setSearchResultMessage] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const searchResponse = async (query: string, db = '') => {
    setSearchResultMessage("جار البحث ..")
    return await (await fetch(`https://hss-lib.herokuapp.com/?q=${query}&dbs=${db}`)).json()
  }
  const searchHandle = async () => {
    const query = (document.getElementById("q") as HTMLInputElement).value 
    const db = (document.querySelector('input[name="db"]:checked') as HTMLInputElement).value
    if (query.length > 2) {
      
      const searchResult = await searchResponse(query, db)  
     
      if (searchResult.length < 1) {
        setSearchResultMessage("لا توجد نتائج بحث مطابقة")

      } else {
        setSearchResultMessage(`توجد ${searchResult.length} نتيجة بحث متطابقة`)

      }
      setSearchResult(searchResult)
      
    }else{
      setSearchResultMessage('')
    }
    
  }
  return (
    <Layout title="الفهرس المتاح على الخط - علوم انسانية واجتماعية - شتمة بسكرة">
      <br/><br/>
      <strong className="xs:text-sm bg-green-100 py-4 px-5 rounded-md text-md">يجب ان تكون عبارة البحث اكثر من حرفين ليبدئ البحث</strong><br/><br/>
      <input type="text" id="q" placeholder="ادخل عبارة البحث ثم اضغط Enter" className="px-4 py-3 text-right w-3/6 xs:w-full" onChange={searchHandle}/>
      <p className="pt-3 pb-5">{ searchResultMessage }</p>
      <div className="grid grid-cols-3 xs:grid-cols-2 gap-6 w-3/6 xs:w-full m-auto ">
      <span>
          <label htmlFor="li">علم مكتبات</label>
          <input type="radio" name="db" value="li" id='li' onChange={searchHandle} />
        </span>
        <span>
          <label htmlFor="hs">تاريخ</label>
          <input type="radio" name="db" value="hs" id='hs' onChange={searchHandle} />
        </span>
        <span>
          <label htmlFor="co">اتصال</label>
          <input type="radio" name="db" value="co" id='co' onChange={searchHandle} />
        </span>
        <span>
          <label htmlFor="th">ثقافة عامة</label>
          <input type="radio" name="db" value="th" id='th' onChange={searchHandle} />
        </span>
        <span>
          <label htmlFor="so">علم الاجتماع</label>
          <input type="radio" name="db" value="so" id='so' onChange={searchHandle}/>
        </span>
        <span>
          <label htmlFor="pc">علم النفس</label>
          <input type="radio" name="db" value="pc" id="pc" onChange={searchHandle}/>
        </span>
        <span>
          <label htmlFor="fl">لغات اجنبية (فرنسية فقط)</label>
          <input type="radio" name="db" value="fl" id='fl' onChange={searchHandle}/>
        </span>
      </div>
     { searchResult.length > 0 ?  <div className="text-right">
        <table dir="rtl" className="m-auto">
          <thead>
            <tr className='font-mono'>
              <th className="px-2 py-1.5">المعرف</th>
              <th className="px-2 py-1.5">العنوان</th>
              <th className="px-2 py-1.5">الكاتب</th>
              <th className="xs:hidden px-2 py-1.5">دار النشر</th>
              <th className="xs:hidden px-2 py-1.5">سنة النشر</th>
              <th className="xs:hidden px-2 py-1.5">الدولة</th>
            </tr>
          </thead>
          <tbody>
            {
              searchResult.map((book:any, index)=>{
                return <tr className={ index % 2 == 0 ? "bg-gray-100" : ''}>
                <td className="px-2 py-1.5 border-r border-gray-100">{book.ID}</td>
                <td className="px-2 py-1.5 border-r border-gray-100">{book.title}</td>
                <td className="px-2 py-1.5 border-r border-gray-100">{book.author}</td>
                <td className="xs:hidden px-2 py-1.5 border-r border-gray-100">{book.publisher}</td>
                <td className="xs:hidden px-2 py-1.5 border-r border-gray-100">{book.publishYear}</td>
                <td className="xs:hidden px-2 py-1.5 border-r border-gray-100">{book.country}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </div> : ''}
    </Layout>
)}

export default IndexPage
