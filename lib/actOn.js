
export var AoProcessForm = (formelement, aoCAP) => {
  //from ActOn - form submission script
  /* eslint-disable */
  var aoProtocol = location.protocol;
  if ( aoProtocol.indexOf('http') < 0 ) aoProtocol = 'http:';
  
  aoCAP.protocol = aoProtocol;

  var aoArr = aoArr || []; aoArr.push(aoCAP);

  for (var AoI = 0; AoI < aoArr.length; AoI++) {
    if ( aoArr[AoI].aid && aoArr[AoI].fid && aoArr[AoI].did && aoArr[AoI].server && ( aoArr[AoI].formId || aoArr[AoI].formName )) {
      var d = document,
      thisFormId = formelement.id || '',
      thisFormName = formelement.name || '',
      bi = function(i) {
        return d.getElementById(i);
      },
      bn = function(i) {
        return d.getElementsByName(i)[0];
      },
      names = [],
      values = [],
      params = {},
      w = window,
      targetIdOrName = aoArr[AoI].formName ? bn(aoArr[AoI].formName) : bi(aoArr[AoI].formId),
      len = targetIdOrName.elements.length,
      isLoaded = false,
      ud = 'undefined',
      st = function(f, i) {
        w.setTimeout(f, i);
      },
      ce = function(t) {
        return d.createElement(t)
      },
      gid = function(p) {
        var j, i = 0,
        n = Math.random,
        r = [],
        c = '0123456789abcdef'.split('');
        for (; i < 16; i++) r[i] = c[(0 | n() * 16) & 0xf];
        j = p + r.join('');
        return bi(j) == null ? j : gid(p);
      },
      addInput = function( form, name, value )
      {
        var el = ce('input');
        el.name = name;
        el.value = value;
        form.appendChild( el );
      },
      idifr = gid('aoCapT');

      if (aoArr[AoI].formName == thisFormName || aoArr[AoI].formId == thisFormId) {
        var dTarget = ce('div');
        dTarget.style.display = 'none';
        d.body.appendChild(dTarget);
        dTarget.innerHTML = '<iframe name="' + idifr + '" id="' + idifr + '"><\/iframe>'; // generate iframe

        var dForm = ce('form'), idform = gid('aoCapD');
        dForm.id = idform;
        dForm.style.display = "none";
        dForm.method = 'POST';
        dForm.enctype = 'multipart/form-data';
        dForm.acceptCharset = 'UTF-8';
        dForm.target = idifr; // form targets iframe
        dForm.action = (aoCAP.protocol || w.location.protocol) + '//' + aoCAP.server + '/acton/forms/userSubmit.jsp';
        d.body.appendChild(dForm); // generate form 

        for (var z = 0; z < len; z++) {
          var el = targetIdOrName.elements[z];
          var name = typeof(el.name) != ud ? el.name : null;
          var value = typeof(el.value) != ud ? el.value : null;
          var tagName = el.nodeName.toLowerCase();
          if (tagName == 'input' && (el.type == 'radio' || el.type == 'checkbox') && !el.checked) {
            value = 0;
          } else if (tagName == 'select' && el.selectedIndex && el.selectedIndex != -1 && el.options[el.selectedIndex] && el.options[el.selectedIndex].value) 
          {
            value = el.options[el.selectedIndex].value
          };
          if (name != null && name != '') {
            names.push(name);
            values.push(value);
            //console.log("Element name: " + el.name + " / Element value: " + value);
            params[name] = value;
          };
          addInput( dForm, el.name, value );
        }

        aoCAP.pid = 0;
        aoCAP.cuid = aoCAP.cuid || '';
        aoCAP.srcid = aoCAP.srcid || '';
        aoCAP.camp = aoCAP.camp || '';
        addInput( dForm, 'ao_a', aoArr[AoI].aid );
        addInput( dForm, 'ao_f', aoArr[AoI].fid );
        addInput( dForm, 'ao_d', aoArr[AoI].fid+":"+aoArr[AoI].did );
        addInput( dForm, 'ao_p', 0 );
        addInput( dForm, 'ao_jstzo', new Date().getTimezoneOffset() );
        addInput( dForm, 'ao_form_neg_cap', '' );
        addInput( dForm, 'ao_refurl', d.referrer );
        addInput( dForm, 'ao_cuid', aoCAP.cuid );
        addInput( dForm, 'ao_srcid', aoCAP.srcid );
        addInput( dForm, 'ao_camp', aoCAP.camp );
        bi(idform).submit();

        var dTargetFrame = bi( idifr );
          dTargetFrame.onload = function() { 
          isLoaded = true; 
        }; 
        var waitForSubmit = function()
        {
          this.count = "";
          if ( ! ( isLoaded || dTargetFrame.readyState == "complete" ) ) {
            st( waitForSubmit, 200 );
            this.count ++;
          } else if (this.count > 7) {
            return true;
            console.log("skipping dForm");
          }
        else {
          d.body.removeChild( dForm );
          d.body.removeChild( dTarget );
        }
      };

      st( waitForSubmit, 100 );

      }
    } else {
      console.log('aoCAP property missing');
      } 
    }
    /* eslint-enable */
};



