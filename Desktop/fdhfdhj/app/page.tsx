import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";

export default function AboutPage() {
  return (
    <div>
      <Link href="/about">Обо мне</Link>
      <p>Я Изучаю Next.js на МДК.05.01</p>
      <Card title="Первая карточка" text="Текст первой карточки" />
      <Card title="Вторая карточка" text="Текст второй карточки" />
    </div>
    
  );
}
