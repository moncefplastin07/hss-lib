import React, { useState } from 'react'

import Layout from '../components/Layout'

const IndexPage = () => {
  const [inSearch, setInSearch] = useState(false)
  const [showSearchLoading, setShowSearchLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const searchResponse = async (query: string, db = '') => {
    
    return await (await fetch(`http://localhost:3001/?q=${query}&dbs=${db}`)).json()
  }
  const searchHandle = async (e) => {
    const query = (document.getElementById("q") as HTMLInputElement).value 
    const db = (document.querySelector('input[name="db"]:checked') as HTMLInputElement).value
    if (query.length > 2) {
      setShowSearchLoading(true)
      setSearchResult(await searchResponse(query, db))
      setShowSearchLoading(false)
    }
    console.log(searchResult)
    
  }
  return (
    <Layout title="الفهرس المتاح على الخط - علوم انسانية واجتماعية - شتمة بسكرة">
      <br/><br/>
      <strong className="xs: mb-5 bg-green-100 p-5 rounded-md">يجب ان تكون عبارة البحث اكثر من حرفين ليبدئ البحث</strong><br/><br/>
      <input type="text" id="q" placeholder="ادخل عبارة البحث ثم اضغط Enter" className="px-4 py-3 text-right w-3/6 xs:w-full" onChange={searchHandle}/>
      <p className="pt-3 pb-5">{searchResult.length ? `توجد ${searchResult.length} نتيجة بحث متطابقة` : "عذرا لا توجد نتائج بحث .. حاول البحث بكلمات مفتاحية اخرى"}{showSearchLoading ? "جاري البحث" : ""}</p>
      <div className="grid grid-cols-3 w-3/6 m-auto">
      <span>
          علم مكتبات
          <input type="radio" name="db" value="li" onChange={searchHandle} />
        </span>
        <span>
          تاريخ
          <input type="radio" name="db" value="hs" onChange={searchHandle} />
        </span>
        <span>
          علم الاجتماع
          <input type="radio" name="db" value="so" onChange={searchHandle}/>
        </span>
      </div>
      <div className="m-auto text-right">
        <table dir="rtl">
          <thead>
            <tr className='font-mono'>
              <th>المعرف</th>
              <th>العنوان</th>
              <th>الكاتب</th>
              <th className="xs:hidden">دار النشر</th>
              <th className="xs:hidden">سنة النشر</th>
              <th className="xs:hidden">الدولة</th>
            </tr>
          </thead>
          <tbody>
            {
              searchResult.map((book:any, index)=>{
                return <tr className={ index % 2 == 0 ? "bg-gray-200" : ''}>
                <td>{book.ID}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className="xs:hidden">{book.publisher}</td>
                <td className="xs:hidden">{book.publishYear}</td>
                <td className="xs:hidden">{book.country}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </Layout>
)}

export default IndexPage
