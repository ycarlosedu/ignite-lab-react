import { useGetLessonsQuery } from '../graphql/generated';
import Lesson from './Lesson';

const Sidebar: React.FC = () => {
  const { data, loading } = useGetLessonsQuery();

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de Aulas
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons?.map((lesson) => {
          return <Lesson key={lesson.id} lessonData={lesson} />;
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
