export default function Footer() {
  return (
    <footer className="mt-12 bg-black px-8 py-8 text-white">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">MyShop</h2>
          <p className="mt-2 text-gray-400">
            Quality products for everyone.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <p className="mt-2 text-gray-400">Products</p>
          <p className="text-gray-400">About</p>
          <p className="text-gray-400">Contact</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        © 2026 MyShop. All rights reserved.
      </div>
    </footer>
  )
}