export default function Card({ title, text }: { title: string; text: string }) {
  return (
    
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{title}</h2>
    </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}