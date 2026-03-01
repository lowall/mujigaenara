import React, { useState } from 'react';

const MujigaeNara = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDonationListModal, setShowDonationListModal] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedSupportAccount, setCopiedSupportAccount] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [supportMessage, setSupportMessage] = useState('');
  const [donationMessage, setDonationMessage] = useState('');
  const [donationComplete, setDonationComplete] = useState(false);
  const [supportComplete, setSupportComplete] = useState(false);

  const [messages, setMessages] = useState([
    { name: 'sumin_sil', msg: '오순이 덕분에 행복했어 🧡', time: '2시간 전' },
    { name: 'imissus_0717', msg: '무지개나라에서도 행복해 🌈', time: '5시간 전' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const [donationList, setDonationList] = useState([
    { name: '김**', amount: '30,000', message: '오순이 편히 쉬어 🌈', time: '1시간 전' },
    { name: '이**', amount: '50,000', message: '좋은 곳에서 행복하길', time: '3시간 전' },
    { name: '박**', amount: '10,000', message: '', time: '5시간 전' },
    { name: '최**', amount: '30,000', message: '무지개나라에서 뛰어놀아요', time: '1일 전' },
  ]);

  const [supportList] = useState([
    { name: '익명', amount: '5,000', message: '좋은 서비스 감사해요!', time: '2시간 전' },
    { name: '김**', amount: '3,000', message: '응원합니다 💜', time: '1일 전' },
    { name: '익명', amount: '10,000', message: '', time: '2일 전' },
  ]);

  const adminStats = {
    totalUsers: 127,
    totalMemorials: 89,
    totalDonations: '1,250,000',
    totalSupport: '185,000',
    todayVisitors: 342,
    thisMonthNewUsers: 23
  };

  const crayonShadow = "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]";
  const crayonRadius = "rounded-[2rem]";

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'donation') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } else if (type === 'support') {
      setCopiedSupportAccount(true);
      setTimeout(() => setCopiedSupportAccount(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const shareToInstagramStory = () => {
    const url = 'https://mujigae.land/osuni';
    window.open(`instagram-stories://share?url=${encodeURIComponent(url)}`, '_blank');
  };
  const shareToInstagramFeed = () => { window.open('instagram://app', '_blank'); };
  const shareToKakao = () => { alert('카카오톡 공유가 열립니다'); };

  const RainbowBar = () => (
    <div className="flex h-2 w-full rounded-full overflow-hidden">
      <div className="flex-1 bg-red-400"></div>
      <div className="flex-1 bg-orange-400"></div>
      <div className="flex-1 bg-yellow-400"></div>
      <div className="flex-1 bg-green-400"></div>
      <div className="flex-1 bg-blue-400"></div>
      <div className="flex-1 bg-indigo-400"></div>
      <div className="flex-1 bg-purple-400"></div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-purple-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-20 left-5 w-16 h-16 bg-red-200 rounded-full opacity-40 blur-sm"></div>
      <div className="absolute top-40 right-10 w-12 h-12 bg-orange-200 rounded-full opacity-50 blur-sm"></div>
      <div className="absolute top-60 left-20 w-10 h-10 bg-yellow-200 rounded-full opacity-40 blur-sm"></div>
      <div className="absolute bottom-60 right-5 w-14 h-14 bg-green-200 rounded-full opacity-40 blur-sm"></div>
      <div className="absolute bottom-40 left-10 w-12 h-12 bg-blue-200 rounded-full opacity-50 blur-sm"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 blur-sm"></div>

      <div className="relative mb-6">
        <div className="w-48 h-24 overflow-hidden">
          <div className="w-48 h-48 rounded-full border-[8px] border-red-400 shadow-[inset_0_0_0_8px_#fb923c,inset_0_0_0_16px_#facc15,inset_0_0_0_24px_#4ade80,inset_0_0_0_32px_#60a5fa,inset_0_0_0_40px_#818cf8,inset_0_0_0_48px_#c084fc]"></div>
        </div>
        <div className="absolute -bottom-1 left-0 flex">
          <div className="w-10 h-6 bg-white rounded-full shadow-sm"></div>
          <div className="w-8 h-5 bg-white rounded-full -ml-3 mt-1 shadow-sm"></div>
        </div>
        <div className="absolute -bottom-1 right-0 flex">
          <div className="w-8 h-5 bg-white rounded-full shadow-sm"></div>
          <div className="w-10 h-6 bg-white rounded-full -ml-3 mt-1 shadow-sm"></div>
        </div>
        <div className="absolute top-2 left-4 text-yellow-400 text-sm">✦</div>
        <div className="absolute top-0 right-8 text-pink-400 text-xs">✦</div>
        <div className="absolute top-4 right-2 text-blue-400 text-sm">✦</div>
      </div>

      <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
        무지개나라
      </h1>
      <p className="text-gray-500 mb-10 font-medium text-center">
        무지개다리 건넌 반려동물의 공간 🌈
      </p>

      <div className="space-y-4 w-full max-w-xs">
        <button
          onClick={() => setCurrentPage('create')}
          className={`w-full py-4 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 text-white font-black text-lg ${crayonRadius} ${crayonShadow} hover:scale-[1.02] transition`}
        >
          추모공간 만들기 🌈
        </button>
        <button
          onClick={() => setCurrentPage('memorial')}
          className={`w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-white font-black text-lg ${crayonRadius} ${crayonShadow} hover:scale-[1.02] transition`}
        >
          무지개나라 방문하기 ☁️
        </button>
      </div>

      <button
        onClick={() => setCurrentPage('about')}
        className="mt-10 text-gray-400 text-sm font-medium hover:text-purple-400 transition flex items-center gap-1"
      >
        <span>무지개나라가 뭐예요?</span>
        <span>→</span>
      </button>

      <button
        onClick={() => setShowSupportModal(true)}
        className={`mt-6 px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white font-bold ${crayonRadius} ${crayonShadow} flex items-center gap-2 hover:scale-[1.02] transition`}
      >
        <span>⭐</span>
        <span>무지개나라에 기부하기</span>
      </button>

      <button
        onClick={() => setCurrentPage('admin')}
        className="mt-4 text-gray-300 text-xs hover:text-gray-500 transition"
      >
        관리자
      </button>

      {showSupportModal && <SupportModal />}
    </div>
  );

  const AdminPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <button onClick={() => setCurrentPage('home')} className="text-gray-500 font-bold mb-6 flex items-center gap-2">
        <span className="text-xl">←</span> 돌아가기
      </button>
      <h2 className="text-2xl font-black text-gray-700 mb-6 flex items-center gap-2">
        🔒 관리자 대시보드
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className={`bg-white rounded-2xl p-4 ${crayonShadow}`}>
          <p className="text-gray-400 text-xs font-medium">전체 사용자</p>
          <p className="text-2xl font-black text-blue-500">{adminStats.totalUsers}명</p>
        </div>
        <div className={`bg-white rounded-2xl p-4 ${crayonShadow}`}>
          <p className="text-gray-400 text-xs font-medium">추모공간</p>
          <p className="text-2xl font-black text-purple-500">{adminStats.totalMemorials}개</p>
        </div>
        <div className={`bg-white rounded-2xl p-4 ${crayonShadow}`}>
          <p className="text-gray-400 text-xs font-medium">오늘 방문자</p>
          <p className="text-2xl font-black text-green-500">{adminStats.todayVisitors}명</p>
        </div>
        <div className={`bg-white rounded-2xl p-4 ${crayonShadow}`}>
          <p className="text-gray-400 text-xs font-medium">이번달 신규</p>
          <p className="text-2xl font-black text-orange-500">{adminStats.thisMonthNewUsers}명</p>
        </div>
      </div>
      <div className={`bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-5 ${crayonShadow} mb-4`}>
        <h3 className="font-bold text-purple-700 mb-3">💜 무지개나라 기부금</h3>
        <p className="text-3xl font-black text-purple-600">{adminStats.totalSupport}원</p>
        <p className="text-xs text-purple-400 mt-1">누적 기부금</p>
        <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
          {supportList.map((item, i) => (
            <div key={i} className="bg-white/60 rounded-xl p-3 flex justify-between items-center">
              <div>
                <p className="font-bold text-sm text-gray-700">{item.name}</p>
                {item.message && <p className="text-xs text-gray-500">"{item.message}"</p>}
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600">{item.amount}원</p>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`bg-white rounded-2xl p-5 ${crayonShadow} mb-6`}>
        <h3 className="font-bold text-gray-700 mb-3">🌈 최근 추모공간</h3>
        <div className="space-y-3">
          {[
            { name: '오순이', owner: 'sumin***', created: '2시간 전', donations: '110,000원' },
            { name: '뭉치', owner: 'happy***', created: '1일 전', donations: '85,000원' },
            { name: '코코', owner: 'love***', created: '2일 전', donations: '230,000원' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center text-xl">🐾</div>
                <div>
                  <p className="font-bold text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.owner} · {item.created}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-pink-500">부조금</p>
                <p className="text-xs text-gray-500">{item.donations}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-5 ${crayonShadow}`}>
        <h3 className="font-bold text-pink-700 mb-3">🌸 전체 부조금 현황</h3>
        <p className="text-3xl font-black text-pink-600">{adminStats.totalDonations}원</p>
        <p className="text-xs text-pink-400 mt-1">플랫폼 전체 부조금 (100% 가족 전달)</p>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-purple-50 p-6 pb-16">
      <button onClick={() => setCurrentPage('home')} className="text-purple-400 font-bold mb-6 flex items-center gap-2">
        <span className="text-xl">←</span> 돌아가기
      </button>
      <div className={`bg-white/90 backdrop-blur ${crayonRadius} p-6 ${crayonShadow} border-4 border-purple-100`}>
        <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
          🌈 무지개나라란?
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            사랑하는 반려동물이 무지개다리를 건넌 후, 행복한 <span className="font-bold text-purple-500">무지개나라</span>에서 뛰어놀고 있어요.
          </p>
          <div className="py-4"><RainbowBar /></div>
        </div>
      </div>
      <div className={`mt-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 ${crayonRadius} p-6 ${crayonShadow}`}>
        <h3 className="text-lg font-black text-amber-600 mb-4 flex items-center gap-2">
          🐔 무지개나라를 만든 이유
        </h3>
        <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
          <p>안녕하세요, 무지개나라를 만든 <span className="font-bold text-amber-600">수민</span>이에요.</p>
          <p>저도 <span className="font-bold">오순이</span>라는 닭을 10년간 키웠어요.</p>
          <div className="bg-white/60 rounded-2xl p-4 my-4">
            <p className="text-amber-700 italic">
              "주변에 말하기도 어렵고,<br/>혼자 슬퍼하는 게 외로웠어요."
            </p>
          </div>
          <p>그래서 <span className="font-bold text-purple-500">다 같이 추억하고, 마지막을 기록할 수 있는 공간</span>을 만들었어요.</p>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center text-2xl">🐔</div>
          <div>
            <p className="font-bold text-amber-700">오순이 (2014-2024)</p>
            <p className="text-xs text-amber-500">수민이의 첫 번째 무지개나라 친구</p>
          </div>
        </div>
      </div>
      <div className={`mt-6 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 ${crayonRadius} p-6 ${crayonShadow}`}>
        <h3 className="text-lg font-black text-blue-600 mb-4">👋 만든 사람들</h3>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center text-3xl">🌈</div>
          <div>
            <p className="font-black text-blue-700">Team 무지개나라</p>
            <p className="text-sm text-gray-500">반려동물을 사랑하는 사람들이 만들고 있어요 🐾</p>
          </div>
        </div>
      </div>
      <div className={`mt-6 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 ${crayonRadius} p-6 ${crayonShadow}`}>
        <h3 className="text-lg font-bold text-purple-600 mb-3">💜 기부금 사용처</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start gap-2"><span className="text-purple-400">✦</span><p>서비스 운영 및 유지 비용</p></div>
          <div className="flex items-start gap-2"><span className="text-pink-400">✦</span><p>새 기능 개발</p></div>
          <div className="flex items-start gap-2"><span className="text-blue-400">✦</span><p>반려동물 관련 단체 기부</p></div>
          <div className="flex items-start gap-2"><span className="text-green-400">✦</span><p>더 나은 추모 문화 만들기</p></div>
        </div>
        <button
          onClick={() => setShowSupportModal(true)}
          className={`w-full mt-4 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white font-bold rounded-2xl hover:scale-[1.02] transition`}
        >
          무지개나라에 기부하기 ⭐
        </button>
      </div>
      {showSupportModal && <SupportModal />}
    </div>
  );

  const SupportModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`bg-white ${crayonRadius} p-6 w-full max-w-sm ${crayonShadow} border-4 border-purple-200`}>
        {!supportComplete ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">무지개나라 기부 ⭐</h3>
              <button onClick={() => { setShowSupportModal(false); setSupportMessage(''); }} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200">×</button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold mb-2 text-sm">💬 응원의 한마디 (선택)</label>
              <textarea
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
                placeholder="무지개나라에 응원 메시지를 남겨주세요!"
                className="w-full p-3 bg-purple-50 rounded-xl h-20 focus:ring-2 focus:ring-purple-300 outline-none resize-none text-sm"
              />
            </div>
            <div className="space-y-3">
              <a href="https://qr.kakaopay.com/example" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 p-4 bg-yellow-50 rounded-2xl hover:bg-yellow-100 transition">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-black">K</div>
                <div className="flex-1">
                  <p className="font-bold text-yellow-800">카카오페이</p>
                  <p className="text-xs text-yellow-600">클릭하면 바로 송금</p>
                </div>
                <span className="text-yellow-400">→</span>
              </a>
              <a href="https://toss.me/mujigaenara" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-black">T</div>
                <div className="flex-1">
                  <p className="font-bold text-blue-800">토스</p>
                  <p className="text-xs text-blue-600">toss.me/mujigaenara</p>
                </div>
                <span className="text-blue-400">→</span>
              </a>
              <button
                onClick={() => copyToClipboard('카카오뱅크 3333-00-0000000', 'support')}
                className="w-full flex items-center gap-3 p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition">
                <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center text-white font-black">계</div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-purple-800">계좌이체</p>
                  <p className="text-xs text-purple-600">카카오뱅크 3333-00-0000000</p>
                </div>
                <span className="text-purple-400 text-sm font-medium">{copiedSupportAccount ? '복사됨!' : '복사'}</span>
              </button>
            </div>
            <button onClick={() => setSupportComplete(true)} className={`w-full mt-4 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold rounded-full hover:scale-[1.02] transition`}>
              기부 완료했어요 ✓
            </button>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-6xl mb-4">🌈</div>
            <h3 className="text-xl font-black text-purple-500 mb-2">감사해요!</h3>
            <p className="text-gray-500 mb-6 text-sm">따뜻한 응원 덕분에<br/>무지개나라가 더 밝아져요 ✨</p>
            <button onClick={() => { setShowSupportModal(false); setSupportComplete(false); setSupportMessage(''); }} className="w-full py-3 bg-purple-100 text-purple-600 rounded-full font-bold">닫기</button>
          </div>
        )}
      </div>
    </div>
  );

  const CreatePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 p-6 pb-16">
      <button onClick={() => setCurrentPage('home')} className="text-purple-400 font-bold mb-6 flex items-center gap-2">
        <span className="text-xl">←</span> 돌아가기
      </button>
      <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
        무지개나라 만들기 🌈
      </h2>
      <p className="text-gray-400 text-sm mb-6">우리 아이만의 공간을 만들어주세요 🐾</p>
      <div className={`bg-white/90 backdrop-blur ${crayonRadius} p-6 ${crayonShadow} border-4 border-pink-100 space-y-5`}>
        <div>
          <label className="block text-gray-600 font-bold mb-2 text-sm">🐾 우리 아이 이름</label>
          <input type="text" placeholder="예: 뭉치, 오순이" className="w-full p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl focus:ring-2 focus:ring-pink-300 outline-none" />
        </div>
        <div>
          <label className="block text-gray-600 font-bold mb-2 text-sm">📸 대표 사진</label>
          <div className="border-4 border-dashed border-purple-200 rounded-3xl p-8 text-center">
            <div className="text-4xl mb-2">🌈</div>
            <p className="text-gray-400 font-medium text-sm">탭해서 사진 올리기</p>
          </div>
        </div>
        <div>
          <label className="block text-gray-600 font-bold mb-2 text-sm">💕 함께한 시간</label>
          <div className="flex gap-3 items-center">
            <input type="date" className="flex-1 p-3 bg-purple-50 rounded-xl text-gray-600 focus:ring-2 focus:ring-purple-300 outline-none" />
            <span className="text-purple-300 font-bold">~</span>
            <input type="date" className="flex-1 p-3 bg-purple-50 rounded-xl text-gray-600 focus:ring-2 focus:ring-purple-300 outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-gray-600 font-bold mb-2 text-sm">✉️ 전하고 싶은 말</label>
          <textarea placeholder="무지개나라에 있는 우리 아이에게..." className="w-full p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl h-24 focus:ring-2 focus:ring-blue-300 outline-none resize-none" />
        </div>
        <div className="pt-2"><RainbowBar /></div>
        <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-4 space-y-4">
          <h3 className="font-bold text-pink-600 text-sm">🌸 부조금 받을 정보 (선택)</h3>
          <p className="text-xs text-gray-500">입력하신 정보로 방문자가 부조금을 보낼 수 있어요</p>
          <div>
            <label className="block text-gray-500 text-xs font-medium mb-1">카카오페이 송금 링크</label>
            <input type="text" placeholder="https://qr.kakaopay.com/..." className="w-full p-3 bg-white rounded-xl focus:ring-2 focus:ring-yellow-300 outline-none text-sm" />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-medium mb-1">토스 송금 링크</label>
            <input type="text" placeholder="https://toss.me/..." className="w-full p-3 bg-white rounded-xl focus:ring-2 focus:ring-blue-300 outline-none text-sm" />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-medium mb-1">계좌번호</label>
            <input type="text" placeholder="예: 카카오뱅크 3333-12-345678" className="w-full p-3 bg-white rounded-xl focus:ring-2 focus:ring-pink-300 outline-none text-sm" />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-medium mb-1">예금주</label>
            <input type="text" placeholder="예: 홍길동" className="w-full p-3 bg-white rounded-xl focus:ring-2 focus:ring-pink-300 outline-none text-sm" />
          </div>
        </div>
        <button onClick={() => setCurrentPage('memorial')} className={`w-full py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-black text-lg rounded-2xl ${crayonShadow} hover:scale-[1.02] transition`}>
          무지개나라 완성하기 ✨
        </button>
      </div>
    </div>
  );

  const DonationListModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-center z-50">
      <div className={`bg-white w-full max-w-lg rounded-t-[2rem] p-6 ${crayonShadow} max-h-[80vh] overflow-y-auto`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-black text-pink-500">🌸 부조해주신 분들</h3>
          <button onClick={() => setShowDonationListModal(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">×</button>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-500">총 <span className="font-bold text-pink-500">{donationList.length}명</span>이 마음을 전해주셨어요</p>
        </div>
        <div className="space-y-3">
          {donationList.map((item, i) => (
            <div key={i} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full"></div>
                  <span className="font-bold text-gray-700">{item.name}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-pink-500">{item.amount}원</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
              {item.message && (
                <div className="bg-white/60 rounded-xl p-3 mt-2">
                  <p className="text-sm text-gray-600">"{item.message}"</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6"><RainbowBar /></div>
      </div>
    </div>
  );

  const DonationModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-center z-50">
      <div className={`bg-white w-full max-w-lg rounded-t-[2rem] p-6 ${crayonShadow} max-h-[90vh] overflow-y-auto`}>
        {!donationComplete ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">부조하기 🌸</h3>
              <button onClick={() => { setShowDonationModal(false); setDonationMessage(''); }} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">×</button>
            </div>
            <p className="text-gray-500 mb-4 text-sm">오순이 가족에게 마음을 전해주세요 💕</p>
            <div className="mb-4">
              <label className="block text-gray-600 font-bold mb-2 text-sm">💬 한마디 남기기 (선택)</label>
              <textarea value={donationMessage} onChange={(e) => setDonationMessage(e.target.value)} placeholder="오순이와 가족에게 따뜻한 말을 남겨주세요" className="w-full p-3 bg-pink-50 rounded-xl h-20 focus:ring-2 focus:ring-pink-300 outline-none resize-none text-sm" />
            </div>
            <div className="space-y-3">
              <a href="https://qr.kakaopay.com/example" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-yellow-50 rounded-2xl hover:bg-yellow-100 transition">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-black">K</div>
                <div className="flex-1"><p className="font-bold text-yellow-800">카카오페이</p><p className="text-xs text-yellow-600">클릭하면 바로 송금</p></div>
                <span className="text-yellow-400">→</span>
              </a>
              <a href="https://toss.me/osuni_family" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-black">T</div>
                <div className="flex-1"><p className="font-bold text-blue-800">토스</p><p className="text-xs text-blue-600">toss.me/osuni_family</p></div>
                <span className="text-blue-400">→</span>
              </a>
              <button onClick={() => copyToClipboard('카카오뱅크 3333-12-3456789', 'donation')} className="w-full flex items-center gap-3 p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition">
                <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center text-white font-black">계</div>
                <div className="flex-1 text-left"><p className="font-bold text-pink-800">계좌이체</p><p className="text-xs text-pink-600">카카오뱅크 3333-12-3456789 (홍길동)</p></div>
                <span className="text-pink-400 text-sm font-medium">{copiedAccount ? '복사됨!' : '복사'}</span>
              </button>
            </div>
            <button onClick={() => setDonationComplete(true)} className={`w-full mt-4 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold rounded-full hover:scale-[1.02] transition`}>
              부조 완료했어요 ✓
            </button>
            <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-3">
              <p className="text-center text-xs text-purple-500 font-medium">🌈 부조금은 100% 오순이 가족에게 전달돼요</p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-xl font-black text-pink-500 mb-2">마음을 전했어요</h3>
            <p className="text-gray-500 mb-6 text-sm">따뜻한 마음이 무지개다리를 건너<br/>오순이 가족에게 전달돼요 💕</p>
            <button onClick={() => { setShowDonationModal(false); setDonationComplete(false); setDonationMessage(''); }} className="w-full py-3 bg-pink-100 text-pink-500 rounded-full font-bold">닫기</button>
          </div>
        )}
      </div>
    </div>
  );

  const ShareModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-center z-50">
      <div className={`bg-white w-full max-w-lg rounded-t-[2rem] p-6 ${crayonShadow}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-black text-gray-700">📤 공유하기</h3>
          <button onClick={() => setShowShareModal(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">×</button>
        </div>
        <p className="text-gray-500 mb-6 text-sm">오순이의 무지개나라를 공유해주세요 🌈</p>
        <div className="space-y-3">
          <button onClick={shareToInstagramStory} className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl hover:scale-[1.01] transition">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center text-white font-black">IG</div>
            <div className="flex-1 text-left"><p className="font-bold text-gray-700">인스타그램 스토리</p><p className="text-xs text-gray-500">스토리에 바로 공유</p></div>
            <span className="text-pink-400">→</span>
          </button>
          <button onClick={shareToInstagramFeed} className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl hover:scale-[1.01] transition">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center text-white font-black">피드</div>
            <div className="flex-1 text-left"><p className="font-bold text-gray-700">인스타그램 게시글</p><p className="text-xs text-gray-500">피드에 게시하기</p></div>
            <span className="text-pink-400">→</span>
          </button>
          <button onClick={shareToKakao} className="w-full flex items-center gap-3 p-4 bg-yellow-50 rounded-2xl hover:scale-[1.01] transition">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-black">카톡</div>
            <div className="flex-1 text-left"><p className="font-bold text-yellow-800">카카오톡</p><p className="text-xs text-yellow-600">친구에게 공유하기</p></div>
            <span className="text-yellow-400">→</span>
          </button>
          <button onClick={() => copyToClipboard('https://mujigae.land/osuni', 'link')} className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:scale-[1.01] transition">
            <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center text-white font-black">링크</div>
            <div className="flex-1 text-left"><p className="font-bold text-gray-700">링크 복사</p><p className="text-xs text-gray-500">mujigae.land/osuni</p></div>
            <span className="text-gray-400 text-sm font-medium">{copiedLink ? '복사됨! ✓' : '복사'}</span>
          </button>
        </div>
        <div className="mt-6"><RainbowBar /></div>
      </div>
    </div>
  );

  const MemorialPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-purple-100 pb-6">
      <div className="bg-white/70 backdrop-blur-md p-4 flex justify-between items-center sticky top-0 z-10">
        <button onClick={() => setCurrentPage('home')} className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 font-bold">←</button>
        <span className="font-bold text-gray-600">오순이의 무지개나라 🌈</span>
        <button onClick={() => setShowShareModal(true)} className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">📤</button>
      </div>
      <div className="p-4">
        <div className={`bg-white/95 backdrop-blur ${crayonRadius} ${crayonShadow} border-4 border-purple-100 overflow-hidden`}>
          <div className="h-4 flex">
            <div className="flex-1 bg-red-400"></div>
            <div className="flex-1 bg-orange-400"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-green-400"></div>
            <div className="flex-1 bg-blue-400"></div>
            <div className="flex-1 bg-indigo-400"></div>
            <div className="flex-1 bg-purple-400"></div>
          </div>
          <div className="bg-gradient-to-b from-sky-100 to-white py-4 flex justify-center">
            <span className="text-3xl">☁️ ⭐ ☁️ 🌟 ☁️</span>
          </div>
          <div className="flex justify-center -mt-6">
            <div className={`w-36 h-36 border-4 border-white bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-full flex items-center justify-center relative ${crayonShadow}`}>
              <span className="text-6xl">🐾</span>
              <div className="absolute -top-2 -right-2 text-2xl">🌈</div>
            </div>
          </div>
          <div className="text-center p-6">
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              오순아 잘 지내지? 💜
            </h1>
            <p className="text-gray-400 mt-1 text-sm font-medium">2015.03.15 ~ 2026.01.20</p>
            <div className="flex items-center justify-center my-5">
              <div className="flex-1 max-w-16"><RainbowBar /></div>
              <span className="mx-3 text-xl">🌈</span>
              <div className="flex-1 max-w-16"><RainbowBar /></div>
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">
              11년간 우리 가족과 함께해줘서 고마워.<br/>
              무지개나라에서도 행복하게 뛰어놀아 💕
            </p>
          </div>
          <div className="px-5 pb-4">
            <button onClick={() => setShowDonationListModal(true)} className="w-full bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 hover:scale-[1.01] transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-pink-600 text-sm">🌸 부조해주신 분들</p>
                  <p className="text-xs text-gray-500">{donationList.length}명이 마음을 전해주셨어요</p>
                </div>
                <span className="text-pink-300 text-xl">→</span>
              </div>
              <div className="mt-3 space-y-2">
                {donationList.slice(0, 2).map((item, i) => (
                  <div key={i} className="bg-white/60 rounded-xl p-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span>🌸</span>
                      <span className="text-gray-600">{item.name}</span>
                      {item.message && <span className="text-gray-400 text-xs">"{item.message}"</span>}
                    </div>
                    <span className="font-bold text-pink-500">{item.amount}원</span>
                  </div>
                ))}
              </div>
            </button>
          </div>
          <div className="px-5 pb-4">
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-4 space-y-3">
              {messages.slice(0, 2).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center text-lg">🐾</div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-purple-600">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 pt-2 space-y-3">
            <button onClick={() => setCurrentPage('messages')} className={`w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-white font-black text-lg rounded-2xl ${crayonShadow} hover:scale-[1.02] transition`}>
              추모글 남기기 ✏️
            </button>
            <button onClick={() => setShowDonationModal(true)} className={`w-full py-4 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 text-white font-black text-lg rounded-2xl ${crayonShadow} hover:scale-[1.02] transition`}>
              부조하기 🌸
            </button>
          </div>
        </div>
        <button onClick={() => setCurrentPage('album')} className={`w-full mt-4 bg-white/90 backdrop-blur rounded-2xl p-4 ${crayonShadow} flex items-center justify-between hover:scale-[1.01] transition`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-xl flex items-center justify-center text-2xl">📸</div>
            <span className="font-bold text-gray-600">무지개나라 앨범</span>
          </div>
          <span className="text-purple-300 text-xl">→</span>
        </button>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <button onClick={shareToInstagramStory} className={`py-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl font-bold text-sm text-pink-600 ${crayonShadow} flex flex-col items-center gap-1`}>
            <span className="text-xl">📷</span><span>스토리</span>
          </button>
          <button onClick={shareToInstagramFeed} className={`py-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl font-bold text-sm text-pink-600 ${crayonShadow} flex flex-col items-center gap-1`}>
            <span className="text-xl">🖼</span><span>게시글</span>
          </button>
          <button onClick={shareToKakao} className={`py-4 bg-yellow-100 rounded-2xl font-bold text-sm text-yellow-700 ${crayonShadow} flex flex-col items-center gap-1`}>
            <span className="text-xl">💬</span><span>카톡</span>
          </button>
        </div>
        <button onClick={() => setShowSupportModal(true)} className={`w-full mt-4 py-4 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-2xl font-bold text-purple-600 ${crayonShadow} flex items-center justify-center gap-2`}>
          <span>⭐</span><span>무지개나라에 기부하기</span><span>⭐</span>
        </button>
      </div>
      {showDonationModal && <DonationModal />}
      {showSupportModal && <SupportModal />}
      {showShareModal && <ShareModal />}
      {showDonationListModal && <DonationListModal />}
    </div>
  );

  const AlbumPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
      <div className="bg-white/70 backdrop-blur-md p-4 flex justify-between items-center sticky top-0">
        <button onClick={() => setCurrentPage('memorial')} className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 font-bold">←</button>
        <span className="font-bold text-gray-600">무지개나라 앨범 🌈</span>
        <button className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">+</button>
      </div>
      <div className="p-4">
        <RainbowBar />
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={`aspect-square bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl flex items-center justify-center ${crayonShadow}`}>
              <span className="text-5xl">🐾</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-6 font-medium">무지개나라의 추억들 🌈</p>
      </div>
    </div>
  );

  const MessagesPage = () => {
    const handleSendMessage = () => {
      if (newMessage.trim()) {
        setMessages([{ name: '방문자', msg: newMessage, time: '방금 전' }, ...messages]);
        setNewMessage('');
      }
    };
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 pb-24">
        <div className="bg-white/70 backdrop-blur-md p-4 flex justify-between items-center sticky top-0 z-10">
          <button onClick={() => setCurrentPage('memorial')} className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold">←</button>
          <span className="font-bold text-gray-600">추모글 💬</span>
          <div className="w-10"></div>
        </div>
        <div className="p-4"><RainbowBar /></div>
        <div className="px-4 space-y-4">
          {messages.map((item, i) => (
            <div key={i} className={`bg-white/90 backdrop-blur rounded-2xl p-4 ${crayonShadow}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center text-lg">🐾</div>
                <div>
                  <p className="font-bold text-purple-600">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">{item.msg}</p>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 border-t border-purple-100">
          <div className="max-w-lg mx-auto flex gap-3">
            <input
              type="text"
              placeholder="무지개나라에 메시지 보내기 🌈"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 p-4 bg-purple-50 rounded-full focus:ring-2 focus:ring-purple-300 outline-none"
            />
            <button onClick={handleSendMessage} className="px-6 py-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white font-bold rounded-full hover:scale-[1.02] transition">
              전송
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage />;
      case 'create': return <CreatePage />;
      case 'memorial': return <MemorialPage />;
      case 'album': return <AlbumPage />;
      case 'messages': return <MessagesPage />;
      case 'admin': return <AdminPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
      {renderPage()}
    </div>
  );
};

export default MujigaeNara;
