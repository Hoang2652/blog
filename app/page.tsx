import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <h1 className='text-2xl font-bold'>
        Thời gian biểu câu cá, khung giờ câu cá hiếm trong play together
      </h1>
      <div> 
      <table className="border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">Thời gian thực</th>
            <th className="border border-slate-300 ...">Loại cá</th>
            <th className="border border-slate-300 ...">Vị trí</th>
            <th className="border border-slate-300 ...">Thời gian trò chơi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ...">10-20</td>
            <td className="border border-slate-300 ...">Rùa biển</td>
            <td className="border border-slate-300 ...">bờ biển</td>
            <td className="border border-slate-300 ...">Ban ngày</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">13-18</td>
            <td className="border border-slate-300 ...">cá voi xanh</td>
            <td className="border border-slate-300 ...">Ngọn hải đăng</td>
            <td className="border border-slate-300 ...">Ban ngày</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">15-17</td>
            <td className="border border-slate-300 ...">Cá heo hồng</td>
            <td className="border border-slate-300 ...">khu sắm sửa</td>
            <td className="border border-slate-300 ...">Ban ngày</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  )
}
