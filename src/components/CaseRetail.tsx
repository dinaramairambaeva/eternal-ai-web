import React from "react";
import { Flower, TrendingUp, Clock } from "lucide-react";

const CaseRetail: React.FC = () => (
  <div className="w-full max-w-5xl mx-auto px-4">
    <div className="text-center mb-6">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Flower className="w-8 h-8 text-brand-orange" />
        <span className="px-4 py-2 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold">
          Ритейл
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-brand-darkBlue">
        Цветочный бизнес
      </h2>
      <p className="text-sm sm:text-base text-gray-600">
        Как ИИ-ассистент увеличил продажи на 150%
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Проблема */}
      <div className="bg-red-50/70 rounded-xl border border-red-200/50 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <h3 className="font-bold text-base text-red-700">Проблема</h3>
        </div>
        <p className="text-sm text-gray-700 mb-3">
          60% лидов терялось из-за медленных ответов операторов
        </p>
        <div className="flex items-center gap-2 text-sm text-red-600">
          <Clock className="w-4 h-4" />
          <span>15+ минут ответа</span>
        </div>
      </div>
      
      {/* Решение */}
      <div className="bg-blue-50/70 rounded-xl border border-blue-200/50 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <h3 className="font-bold text-base text-blue-700">Решение</h3>
        </div>
        <p className="text-sm text-gray-700 mb-3">
          ИИ-ассистент: мгновенные ответы 24/7, обработка фото букетов
        </p>
        <div className="text-sm text-blue-600">
          Автоматический расчёт стоимости
        </div>
      </div>
      
      {/* Результат */}
      <div className="bg-green-50/70 rounded-xl border border-green-200/50 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h3 className="font-bold text-base text-green-700">Результат</h3>
        </div>
        <div className="space-y-2">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">+150%</div>
            <div className="text-sm text-gray-600">Рост продаж</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">90%</div>
            <div className="text-sm text-gray-600">Конверсия</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Отзыв */}
    <div className="bg-brand-purple/10 rounded-xl p-4 border-l-4 border-brand-purple">
      <div className="text-center">
        <a className="text-brand-darkBlue italic mb-3 leading-relaxed text-sm sm:text-base" href="https://wa.me/77753215207">
          Запустить чат-бота для цветочного бизнеса
        </a>
      </div>
    </div>
  </div>
);

export default CaseRetail;