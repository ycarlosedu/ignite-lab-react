import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { LessonType } from '../graphql/generated';

interface LessonProps {
  lessonData: {
    __typename?: 'Lesson' | undefined;
    id: string;
    slug?: string | null | undefined;
    title: string;
    availableAt?: any;
    lessonType: LessonType;
  };
}

const Lesson: React.FC<LessonProps> = ({ lessonData }) => {
  const { slug } = useParams<{ slug: string }>();
  const isActiveLesson = slug === lessonData.slug;

  const availableAtDate = new Date(lessonData.availableAt);
  const isLessonAvailable = isPast(availableAtDate);
  const availableDateFormatted = format(
    availableAtDate,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link to={`/event/lesson/${lessonData.slug}`} className='group'>
      <span className='text-gray-300'> {availableDateFormatted} </span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500': isActiveLesson,
          }
        )}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={classNames(
                'text-sm  font-medium flex items-center gap-2',
                {
                  'text-white': isActiveLesson,
                  'text-blue-500': !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded py-[2px] px-2 text-white border  font-bold',
              {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
              }
            )}
          >
            {lessonData.lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames(' mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {lessonData.title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
