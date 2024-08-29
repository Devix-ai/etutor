// app/SoonNew/[level]/page.tsx
import { useRouter } from 'next/router';
import SoonNavbar from '../components/SoonNavbar';
import SoonFooter from '../components/SoonFooter';
import PageLevel from '../components/PageLevel';
import LevelContent from '../components/LevelContent';

const LevelPage = () => {
  const router = useRouter();
  const { level } = router.query; // Extracts the 'level' parameter from the URL

  // Define a Tailwind CSS class based on the level
  const levelClass = `bg-level-${level}`; // e.g., bg-level-1, bg-level-2
  const bgClass = `bg-level-${level}`;
  return (
    <>
    <div className={`${bgClass} min-h-screen flex flex-col`}>

      <SoonNavbar />
      <PageLevel level={levelClass}>
        <LevelContent
          text={`Welcome to Level ${level}`}
          hoverText={`Discover Level ${level}`}
        />
      </PageLevel>
      <SoonFooter />
    </div>

    </>
  );
};

export default LevelPage;
