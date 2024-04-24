import chatImage from '../../assets/Opened chat.svg';

const Messages = () => {

  return (
    <div className='product-listing-container'> {/* Container added */}
      <div className='product-nav-wrapper'>
        <div className='product-title-wrapper'>
          <p className='product-title'> Messages </p>
          <p className='product-title-sub'>Total chats: 120</p>
        </div>
        </div>
        <img src={chatImage} alt='chat' className='chat-list' />
      </div>
  );
}

export default Messages;
