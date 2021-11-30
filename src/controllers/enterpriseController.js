const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM enterprise', (err, enterprises) => {
     if (err) {
      res.json(err);
     }
     res.render('enterprises', {
        data: enterprises
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO enterprise set ?', data, (err, enterprise) => {
      console.log(enterprise)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM enterprise WHERE id = ?", [id], (err, rows) => {
      res.render('enterprises_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newenterprise = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE enterprise set ? where id = ?', [newenterprise, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM enterprise WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
