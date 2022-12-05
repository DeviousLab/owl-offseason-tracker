const PlayerBank = ({ children }: any) => {
  return (
    <div className="p-5 mb-5">
      <h2 className="text-2xl font-bold mb-4 text-center px-24 text-gray-900 dark:text-gray-200 tracking-wide uppercase underline decoration-primary font-Industry">Player Bank</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PlayerBank