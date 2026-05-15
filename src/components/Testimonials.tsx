import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      text: "The interdisciplinary approach at Jagannath allowed me to combine my passion for Tech with Business. I am now a Product Manager at a Fortune 500 company.",
      name: "Rahul Sharma",
      role: "Class of 2022, MBA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZNIxfn4Q59iQrv1ESNqkIGwNj7JuuzdquIWc-EeAaA5ohQIkLU4znfWOujPp-2n4TtVf1eCyb5-0ro_Sdk8j_LSmupNwr7l4alHDjET2kx2Y2psFgex0chE7axrPbrTqQnYBAU3uTwt-npIPte0SU-2UBOp0tSU1-eTI56PqoRIa0rZMPhNm8-RoQ3t0f9Kt0uf-_eUpsOfTQk2As9wPu0cPiYay5npjhBJ_sUq3L-0OeGbv3f5z4sBssW3NTZ5FHsRwz042xZl8"
    },
    {
      text: "Research facilities here are unmatched. My project on sustainable energy received a national grant thanks to my professor's mentorship and support.",
      name: "Priya Gupta",
      role: "Class of 2023, M.Tech",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg_thsfwNVzlcapaQv28FaU8GTfWsmmXWpN0aUYBnuNS9zFTHxy36NSDqDDQ-QDAfqfhcwHzgOuxn4_8XfsGMp_9U83qjNA38Pw47C3pUe_HUkIrUtkEe-_MLahPZ5fqr-vjPaUxDz1ufJL_wgYrqG6HmH0Z-isa0czDcR6JKrNIv1-OHtDeWCFHApoLFUDhAIlzztxYaDyNp7qrQLsuWDmM2yIrkQSZbdO8PkAOD9VUK4JA7BjWkV64KbfS2kMmHAcP_9kuh6a5A"
    }
  ];

  return (
    <section className="py-section-gap-md md:py-section-gap-lg bg-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-on-primary mb-16 font-bold">Voices of our Students</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-canvas-white p-10 rounded-xl relative shadow-2xl overflow-hidden"
            >
              <Quote size={80} className="text-primary/5 absolute top-0 right-0 -translate-y-4 translate-x-4 rotate-12" />
              <p className="text-on-surface text-xl italic mb-8 leading-relaxed relative z-10 font-serif">"{review.text}"</p>
              <div className="flex items-center justify-center gap-5">
                <img 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" 
                  src={review.image} 
                  alt={review.name}
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="font-bold text-on-surface text-lg">{review.name}</p>
                  <p className="text-on-surface-variant text-sm font-semibold tracking-wide uppercase">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
