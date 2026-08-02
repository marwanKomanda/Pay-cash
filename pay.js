const express = require('express');
const app = express();

app.use(express.json());

// مسار تجريبي عشان تتأكد إن السيرفر شغال
app.get('/', (req, res) => {
  res.send('Vodafone Pay Server is running successfully!');
});

// مسار استقبال الدفع أو الـ Webhook
app.post('/webhook', (req, res) => {
  const paymentData = req.body;
  console.log('Payment received:', paymentData);
  
  // هنا هتحط كود معالجة الدفع وتحديث حالة الطلب في الـ Hostinger أو الداتا بيز
  
  res.status(200).send({ status: 'success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
