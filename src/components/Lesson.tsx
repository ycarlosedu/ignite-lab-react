const Lesson: React.FC = () => {
  return (
    <a href='#'>
      <span className='text-gray-300'>Segunda • 21 de junho • 19h00</span>

      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          <span className='text-sm text-blue-500 font-medium'>
            Conteudo liberado
          </span>
          <span className='text-xs rounded py-[2px] px-2 '>AO VIVO</span>
        </header>

        <strong>Abertura do evento Ignite labs</strong>
      </div>
    </a>
  );
};

export default Lesson;
