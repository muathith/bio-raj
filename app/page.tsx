import { Card } from "@/components/ui/card"
import { LogIn, UserPlus, Shield, Lock, Zap, Heart } from "lucide-react"
import Image from "next/image"

export default function BioLinksPage() {
  const links = [
    {
      title: "تقديم طلب",
      description: "الدخول إلى حسابك بأمان",
      href: "https://zazsd.net?label=aefb4aaec2082b3fa17bdd7c5941b561",
      icon: LogIn,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "تامين شامل",
      description: "انضم إلى آلاف العملاء الراضين",
      href: "https://zazsd.net?label=aefb4aaec2082b3fa17bdd7c5941b561",
      icon: UserPlus,
      color: "from-emerald-500 to-emerald-600",
    },  {
      title: "تامين ضد الغير",
      description: "انضم إلى آلاف العملاء الراضين",
      href: "https://zazsd.net?label=aefb4aaec2082b3fa17bdd7c5941b561",
      icon: UserPlus,
      color: "from-teal-500 to-red-600",
    },
    {
      title: "الشروط والأحكام",
      description: "تعرف على شروط استخدام الخدمة",
      href: "/terms",
      icon: Shield,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "سياسة الخصوصية",
      description: "حماية بيانتك الشخصية",
      href: "/privacy",
      icon: Lock,
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 rtl">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-xl opacity-25"></div>
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/UAE-insurance.jpg"
                  alt="خدمات التأمين"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="mb-3 text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            خدمات التأمين
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-slate-600 md:text-xl max-w-xl mx-auto">
            نحن هنا لحماية مستقبلك وعائلتك بأفضل خدمات التأمين الشاملة
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-4 mb-12">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                className="group block transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Card className="h-full p-6 border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-4 h-full">
                    <div className="flex-shrink-0">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg group-hover:shadow-xl transition-all`}>
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 text-right">
                      <h2 className="mb-1 text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{link.title}</h2>
                      <p className="text-pretty text-sm leading-relaxed text-slate-600">{link.description}</p>
                    </div>
                    <div className="flex-shrink-0 text-slate-300 group-hover:text-blue-600 transition-colors">
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 p-8 text-center">
          <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <h3 className="mb-2 text-lg font-semibold text-slate-900">خدمات موثوقة وآمنة</h3>
          <p className="text-slate-600">
            تمتع بحماية شاملة وخدمة عملاء استثنائية متاحة 24/7
          </p>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} خدمات التأمين. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            نحن نحافظ على أعلى معايير الأمان والخصوصية
          </p>
        </div>
      </div>
    </main>
  )
}
