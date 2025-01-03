import Image from 'next/image'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/cover.png'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-red-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          Ça fait 3 ans que les infirmières me soignent. Elles sont très
          gentilles et elles travaillent très bien. Elles me font des
          injections, des prises de sang. Elles m'apportent tout le soutien dont
          j'ai besoin avec ma maladie Je suis très contente.
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-red-600 before:content-['—_']">
          Isabel Mendoca
        </strong>
        , Cliente du cabinet
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-red-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image
              className="w-full rounded-lg"
              src={coverImage}
              alt="Cabinet Infirmier Civiale"
              priority
            />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Le Cabinet Infirmier Civiale
            </h1>
            <p className="mt-4 text-2xl text-slate-600">
              Votre partenaire de santé et de bien-être depuis plus de 50 ans à
              <a
                className="ml-1 text-blue-600 hover:underline"
                target="_blank"
                href="https://www.google.fr/maps/place/Cabinet+Infirmier+Civiale/@48.8728737,2.3753148,17z/data=!4m6!3m5!1s0x47e66d4c85cd7c17:0xc2f677bafb58d0b9!8m2!3d48.8728737!4d2.3753148!16s%2Fg%2F11y83lwr41?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              >
                10 rue civiale, Belleville , 75010 Paris
              </a>
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Avec des soins à domicile et des consultations sur rendez-vous,
              nous nous engageons à offrir des services infirmiers
              professionnels et humains adaptés à vos besoins.
            </p>
            <div className="mt-8">
              <a
                href="tel:0664206570"
                className="text-lg font-semibold text-red-600 hover:underline"
              >
                Appelez-nous au 06 64 20 65 70
              </a>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
