const { Users, Weight } = require('../../models');
const { asyncHandler } = require('../../utils');

const weight = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const owner = String(_id);

    const currentDate = req.body.date || new Date();
    const newWeight = req.body.weight;

    // Оновлюємо вагу у властивостях користувача (таблиця users)
    await Users.findByIdAndUpdate(_id, { weight: newWeight }, { new: true });

    // Дата - об'єкт, тому створюємо два окремі об'єкти, щоб .setHours не затер currentDate
    // Задаємо для вибірки початок та кінець доби
    const beginDate = new Date(currentDate);
    const endDate = new Date(currentDate);
    beginDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    // Робимо запис про вагу в щоденник ваги (таблиця weights)
    // Перевіряємо, чи вносив вже поточний користувач дані за поточну добу
    const currentUserAndDay = await Weight.findOne({ owner, date: { $gte: beginDate, $lte: endDate } });

    // Якщо не вносив - створюємо новий запис, якщо вносив - оновлюємо існуючий
    let updatedUserAndDay = null;
    if (!currentUserAndDay) {
        updatedUserAndDay = await Weight.create({ date: currentDate, weight: newWeight, owner });
    } else {
        updatedUserAndDay = await Weight.findByIdAndUpdate(currentUserAndDay._id, { weight: newWeight }, { new: true });
    }

    res.status(200).json({
        date: updatedUserAndDay.date,
        weight: updatedUserAndDay.weight,
    });
});

module.exports = { weight };
