import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Menu, Scissors, Star, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">Caio Ibraim</a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">Treinamentos</a>
            <a href="#" className="text-gray-300 hover:text-white">Sobre</a>
            <a href="#" className="text-gray-300 hover:text-white">Contato</a>
          </div>
          <Button variant="outline" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Button className="hidden md:block">Entrar</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/1.png?height=600&width=800')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Treinamento Indie Hacker</h1>
          <p className="text-xl mb-8">Esteja sempre atualizado, tenha acesso a um treinamento personalizado</p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
            Agende um treinamento
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Treinamentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Indie Hacker", icon: Scissors, price: "R$ 25" },
              { name: "Supabase", icon: Scissors, price: "R$ 15" },
              { name: "React JS Básico", icon: Users, price: "$30" },
              
            ].map((service, index) => (
              <Card key={index} className="bg-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <service.icon className="h-12 w-12 mb-4 text-yellow-500" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">Preço {service.price}</p>
                  <Button variant="outline">Agendar</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Barbers", description: "Our team of skilled professionals ensures top-notch service", icon: Users },
              { title: "Premium Products", description: "We use only the finest grooming products for the best results", icon: Star },
              { title: "Relaxing Atmosphere", description: "Enjoy a comfortable and stylish environment during your visit", icon: MapPin },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-yellow-500 p-3 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Doe", comment: "Best haircut I've ever had. The attention to detail is impressive!", rating: 5 },
              { name: "Mike Smith", comment: "Great atmosphere and friendly staff. I always leave feeling confident.", rating: 5 },
              { name: "Chris Johnson", comment: "The hot towel shave is a must-try. It's a relaxing experience.", rating: 4 },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Look?</h2>
          <p className="text-xl mb-8">Book your appointment today and experience the difference</p>
          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
            Book Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">BarberCo</h3>
              <p className="text-gray-400">Elevating your grooming experience since 2010</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Barber Street</p>
                <p>Styleville, ST 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@barberco.com</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 BarberCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}