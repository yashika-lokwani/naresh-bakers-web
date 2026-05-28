import ImageWithLoading from "@/shared/ImageWithLoading";

const WhatsAppOverlay = () => {
  const phone = "9005163430";
  const message = "Hello! I want to order a cake";

  return (
    <div className='fixed bottom-[10dvh] right-[5dvw] z-2'>
      <div className="relative h-12.5 w-12.5 animate-[move_3s_infinite_ease_alternate]">
        <a
          href={`https://wa.me/91${phone}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithLoading alt="WhatsApp" src="/icons/whatsapp.svg" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppOverlay;