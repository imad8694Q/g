export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PointsHub. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}