export function Footer() {
  return (
    <footer className="bg-gray-500 py-4 relative mt-auto flex items-center justify-center sm:py-8">
      <div className="flex flex-col items-center justify-center w-11/12 max-w-5xl sm:flex-row-reverse sm:justify-between">
        <div>
          <img src="/icon.svg" alt="Rango" className="w-11 sm:w-14" />
        </div>

        <span className="text-gray-400 text-xs mt-4 sm:mt-0">
          © 2022 RANGONLINE. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
