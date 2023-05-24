import React from 'react'
import "./index.css"

const MemberTable = () => {
    const tableData = [
        { no: 1, existing_type: "소득적격", application_type: "소득적격", documents_to_be_submitted: "보기", date_and_time_of_application: "2023-01-10 09:00:00", approved_or_not: "승인대기", reasons_for_refusal_of_approval: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가", date_of_approval: "2023-01-10 09:00:00", administrator: "김관리자" },
        { no: 2, existing_type: "소득적격", application_type: "소득적격", documents_to_be_submitted: "보기", date_and_time_of_application: "2023-01-10 09:00:00", approved_or_not: "승인거부", reasons_for_refusal_of_approval: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가", date_of_approval: "2023-01-10 09:00:00", administrator: "김관리자" },
        { no: 3, existing_type: "소득적격", application_type: "소득적격", documents_to_be_submitted: "보기", date_and_time_of_application: "2023-01-10 09:00:00", approved_or_not: "승인완료", reasons_for_refusal_of_approval: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가", date_of_approval: "2023-01-10 09:00:00", administrator: "김관리자" },
        { no: 4, existing_type: "소득적격", application_type: "소득적격", documents_to_be_submitted: "보기", date_and_time_of_application: "2023-01-10 09:00:00", approved_or_not: "승인대기", reasons_for_refusal_of_approval: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가", date_of_approval: "2023-01-10 09:00:00", administrator: "김관리자" },
        { no: 5, existing_type: "소득적격", application_type: "소득적격", documents_to_be_submitted: "보기", date_and_time_of_application: "2023-01-10 09:00:00", approved_or_not: "승인거부", reasons_for_refusal_of_approval: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가", date_of_approval: "2023-01-10 09:00:00", administrator: "김관리자" },
        { no: 6, existing_type: "소득적격", application_type: "소득적격", documents_to_be_submitted: "보기", date_and_time_of_application: "2023-01-10 09:00:00", approved_or_not: "승인완료", reasons_for_refusal_of_approval: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가", date_of_approval: "2023-01-10 09:00:00", administrator: "김관리자" },
    ]
    return (
        <div className="overflow-x-auto w-100 table-scroll-custom">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-2 py-4 min-w-48 border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">
                            <input type="checkbox" className="accent-white h-4 w-4" />
                        </th>
                        <th className="px-2 py-4 min-w-48 border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">NO</th>
                        <th className="px-2 py-4 min-w-[100px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">기존유형</th>
                        <th className="px-2 py-4 min-w-[100px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">신청유형</th>
                        <th className="px-2 py-4 min-w-[100px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">제출서류</th>
                        <th className="px-2 py-4 min-w-[100px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">신청일시</th>
                        <th className="px-2 py-4 min-w-[100px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">승인여부</th>
                        <th className="px-2 py-4 min-w-[130px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">승인거부 사유</th>
                        <th className="px-2 py-4 min-w-[100px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">승인일시</th>
                        <th className="px-2 py-4 min-w-[100px] border-x-2 border-[#FFFFFF] bg-[#EEF0F4] ">관리자</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => {
                        return (
                            <tr key={index} className={`${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F9F9FB]"}`}>
                                <th className="px-2 py-2 text-center">
                                    <input type="checkbox" className="accent-white h-4 w-4" />
                                </th>
                                <td className="px-2 py-2 text-center min-w-96">{item.no}</td>
                                <td className="px-2 py-2 text-center min-w-96">{item.existing_type}</td>
                                <td className="px-2 py-2 text-center min-w-96">{item.application_type}</td>
                                <td className="px-2 py-2 text-center min-w-[100px]">
                                    <button className='bg-[#EBEEF3] rounded-xl border border-[#D7D8DA] px-4 py-1'>{item.documents_to_be_submitted}</button> 
                                </td>
                                <td className="px-2 py-2 text-center min-w-[170px]">{item.date_and_time_of_application}</td>
                                <td className="px-2 py-2 text-center min-w-[110px]">
                                    <label htmlFor="" className={`${item.approved_or_not === '승인대기' ? "bg-[#FFEDD5] text-[#9A3412] px-4 py-1 rounded-full text-sm font-bold":item.approved_or_not === '승인거부' ?"bg-[#FEE2E2] text-[#991B1B] px-4 py-1 rounded-full text-sm font-bold":item.approved_or_not === '승인완료' ? "bg-[#DCFCE7] text-[#166534] px-4 py-1 rounded-full text-sm font-bold":""}`}>{item.approved_or_not}</label>
                                </td>
                                <td className="px-2 py-2 min-w-[330px] max-w-[330px]">{item.reasons_for_refusal_of_approval}</td>
                                <td className="px-2 py-2 text-center min-w-[170px]">{item.date_of_approval}</td>
                                <td className="px-2 py-2 text-center min-w-96">{item.administrator}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MemberTable