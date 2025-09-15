'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  // 테이블 데이터를 객체 배열로 정리
  const tableData = [
    {
      year: '2025',
      title: 'HCI Korea 2025 Creative Award, 소노벨 비발디파크 컨벤션센터',
      description: '「iMessage: AI 의 특성을 반영한 다차원적 대화 인터페이스」',
    },
    {
      year: '2024',
      title:
        '2024 Singapore Design Week «Echoes for Tomorrow», LASALLE College of the Arts',
      description: "Interactive Media Installation 〈Oh, it's nothing〉",
    },
    {
      year: '2024',
      title: 'RCA×KARTS 협력 기획전 «Reverse Alchemy», 명동 온드림 소사이어티',
      description: 'Interactive Media Installation 〈iMessage〉',
    },
    {
      year: '2023',
      title: '«랩들이 LAB Coming Day», 아트코리아랩',
      description: '〈웹으로 실험하는 그래픽 시계〉',
    },
    {
      year: '2022',
      title: '공공디자인 페스티벌 «길몸삶터», 문화역서울 284',
      description: '〈기후 위기 대응 메뉴얼〉',
    },
    {
      year: '2022',
      title: '한국예술종합학교 미술원 복도갤러리 «□로부터의 ○»',
    },
    {
      year: '2020',
      title: '전주국제영화제 기획전 «100Films 100Posters»',
      description: '〈우주의 끝〉',
    },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setCurrentTime(
        `${year}-${month}-${day} ${hours}:${minutes}:${seconds} KST`
      );
    };

    // 초기 시간 설정
    updateTime();

    // 1초마다 시간 업데이트
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main className="ml-[15vw] mr-2 relative">
        <div className="md:max-w-1/3">
          <figure className="inline-block group">
            Euna Jang
            <Image
              src="/euna2.jpg"
              alt="profile"
              width={200}
              height={200}
              className="absolute top-0 left-0 z-[-1] scale-0 group-hover:scale-60 transition-transform duration-500 ease-out"
            />
          </figure>{' '}
          is a computational designer, researcher, and frontend developer who
          enjoys playful design. She explores the intersection of emerging
          technologies and design, creating digital experiences with thoughtful
          narratives and unexpected interactions. She studied Design at Korea
          National University of Arts and is currently pursuing a Master's
          degree at the Graduate School of Culture Technology, KAIST.
        </div>

        <div className="mt-8">{currentTime}</div>

        <ul className="mt-[40vh] flex gap-20">
          <Link href="https://www.instagram.com/ajangeunajang/" target="_blank">
            Instagram
          </Link>
          <Link href="https://cooperativeblue.com" target="_blank">
            Design
          </Link>
        </ul>
        <table className="mt-[5vh] md:ml-[30vw] ml-[20vw] border-collapse">
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="h-auto border-b-12 border-white">
                <td className="md:w-[10em] w-[3.5em] align-top">{item.year}</td>
                <td className="align-top">
                  <h3 className="inline-block">{item.title}</h3>
                  <p>{item.description}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
